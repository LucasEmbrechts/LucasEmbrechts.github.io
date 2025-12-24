<?php
/**
 * Modèle User - Représente un utilisateur de l'application
 * Contient toutes les opérations liées aux utilisateurs (CRUD)
 */
class User {
    // Connexion à la base de données
    private $conn;
    private $table_name = "users";

    // Propriétés de l'utilisateur
    private $id;
    private $username;
    private $email;
    private $password;
    private $created_at;

    /**
     * Constructeur
     * @param PDO $db - Connexion à la base de données
     */
    public function __construct($db) {
        $this->conn = $db;
    }

    /**
     * Méthode magique __get pour accéder aux propriétés privées
     * @param string $property
     * @return mixed
     */
    public function __get($property) {
        if(property_exists($this, $property)) {
            return $this->$property;
        }
        return null;
    }

    /**
     * Méthode magique __set pour modifier les propriétés privées
     * @param string $property
     * @param mixed $value
     */
    public function __set($property, $value) {
        if(property_exists($this, $property)) {
            $this->$property = $value;
        }
    }

    /**
     * Créer un nouvel utilisateur (inscription)
     * @return bool
     */
    public function create() {
        // Requête SQL préparée pour éviter les injections SQL
        $query = "INSERT INTO " . $this->table_name . "
                  (username, email, password)
                  VALUES (:username, :email, :password)";

        $stmt = $this->conn->prepare($query);

        // Nettoyage des données (sécurité)
        $this->username = htmlspecialchars(strip_tags($this->username));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->password = htmlspecialchars(strip_tags($this->password));

        // Hash du mot de passe (TRÈS IMPORTANT pour la sécurité)
        $password_hash = password_hash($this->password, PASSWORD_BCRYPT);

        // Liaison des paramètres
        $stmt->bindParam(":username", $this->username);
        $stmt->bindParam(":email", $this->email);
        $stmt->bindParam(":password", $password_hash);

        // Exécution
        if($stmt->execute()) {
            return true;
        }

        return false;
    }

    /**
     * Vérifier si un email existe déjà
     * @return bool
     */
    public function emailExists() {
        $query = "SELECT id, username, password
                  FROM " . $this->table_name . "
                  WHERE email = :email
                  LIMIT 1";

        $stmt = $this->conn->prepare($query);

        // Nettoyage
        $this->email = htmlspecialchars(strip_tags($this->email));

        // Liaison
        $stmt->bindParam(":email", $this->email);

        // Exécution
        $stmt->execute();

        $num = $stmt->rowCount();

        // Si l'email existe
        if($num > 0) {
            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            // Récupération des données
            $this->id = $row['id'];
            $this->username = $row['username'];
            $this->password = $row['password'];

            return true;
        }

        return false;
    }

    /**
     * Récupérer les informations d'un utilisateur par son ID
     * @return bool
     */
    public function getById() {
        $query = "SELECT id, username, email, created_at
                  FROM " . $this->table_name . "
                  WHERE id = :id
                  LIMIT 1";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(":id", $this->id);

        $stmt->execute();

        if($stmt->rowCount() > 0) {
            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            $this->username = $row['username'];
            $this->email = $row['email'];
            $this->created_at = $row['created_at'];

            return true;
        }

        return false;
    }

    /**
     * Mettre à jour un utilisateur existant
     * @return bool
     */
    public function update() {
        // Construction dynamique de la requête selon les champs à modifier
        $fields = [];
        $params = [];

        // Vérifier quels champs doivent être mis à jour
        if(!empty($this->username)) {
            $fields[] = "username = :username";
            $params[':username'] = htmlspecialchars(strip_tags($this->username));
        }

        if(!empty($this->email)) {
            $fields[] = "email = :email";
            $params[':email'] = htmlspecialchars(strip_tags($this->email));
        }

        if(!empty($this->password)) {
            $fields[] = "password = :password";
            // Hash du nouveau mot de passe
            $params[':password'] = password_hash($this->password, PASSWORD_BCRYPT);
        }

        // Si aucun champ à mettre à jour
        if(empty($fields)) {
            return false;
        }

        $query = "UPDATE " . $this->table_name . "
                  SET " . implode(", ", $fields) . "
                  WHERE id = :id";

        $stmt = $this->conn->prepare($query);

        // Liaison de l'ID
        $params[':id'] = $this->id;

        // Liaison de tous les paramètres
        foreach($params as $key => $value) {
            $stmt->bindValue($key, $value);
        }

        // Exécution
        if($stmt->execute()) {
            return true;
        }

        return false;
    }

    /**
     * Supprimer un utilisateur
     * @return bool
     */
    public function delete() {
        $query = "DELETE FROM " . $this->table_name . "
                  WHERE id = :id";

        $stmt = $this->conn->prepare($query);

        // Liaison de l'ID
        $stmt->bindParam(":id", $this->id);

        // Exécution
        if($stmt->execute()) {
            return true;
        }

        return false;
    }

    /**
     * Valider les données de l'utilisateur
     * @param array $data
     * @return array - Tableau des erreurs (vide si tout est valide)
     */
    public static function validate($data) {
        $errors = [];

        // Validation du nom d'utilisateur
        if(empty($data['username'])) {
            $errors[] = "Le nom d'utilisateur est requis";
        } elseif(strlen($data['username']) < 3) {
            $errors[] = "Le nom d'utilisateur doit contenir au moins 3 caractères";
        }

        // Validation de l'email
        if(empty($data['email'])) {
            $errors[] = "L'email est requis";
        } elseif(!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            $errors[] = "L'email n'est pas valide";
        }

        // Validation du mot de passe
        if(empty($data['password'])) {
            $errors[] = "Le mot de passe est requis";
        } elseif(strlen($data['password']) < 6) {
            $errors[] = "Le mot de passe doit contenir au moins 6 caractères";
        }

        return $errors;
    }
}
?>
