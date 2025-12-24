<?php
/**
 * Contrôleur User - Gère la logique métier pour les utilisateurs
 * Fait le lien entre l'API et le modèle User
 */

// Inclure les fichiers nécessaires
require_once __DIR__ . '/../config/Database.php';
require_once __DIR__ . '/../models/User.php';

class UserController {
    private $db;
    private $user;

    /**
     * Constructeur
     */
    public function __construct() {
        // Initialiser la connexion à la base de données
        $database = new Database();
        $this->db = $database->getConnection();

        // Initialiser le modèle User
        $this->user = new User($this->db);
    }

    /**
     * Inscription d'un nouvel utilisateur
     * @param array $data - Données POST de la requête
     * @return array - Réponse JSON
     */
    public function register($data) {
        // Validation des données
        $errors = User::validate($data);

        if(!empty($errors)) {
            return [
                'success' => false,
                'message' => 'Erreurs de validation',
                'errors' => $errors
            ];
        }

        // Vérifier si l'email existe déjà
        $this->user->email = $data['email'];
        if($this->user->emailExists()) {
            return [
                'success' => false,
                'message' => 'Cet email est déjà utilisé'
            ];
        }

        // Créer l'utilisateur
        $this->user->username = $data['username'];
        $this->user->email = $data['email'];
        $this->user->password = $data['password'];

        if($this->user->create()) {
            return [
                'success' => true,
                'message' => 'Utilisateur créé avec succès'
            ];
        } else {
            return [
                'success' => false,
                'message' => 'Erreur lors de la création de l\'utilisateur'
            ];
        }
    }

    /**
     * Connexion d'un utilisateur
     * @param array $data - Données POST de la requête
     * @return array - Réponse JSON
     */
    public function login($data) {
        // Validation basique
        if(empty($data['email']) || empty($data['password'])) {
            return [
                'success' => false,
                'message' => 'Email et mot de passe requis'
            ];
        }

        // Vérifier si l'email existe
        $this->user->email = $data['email'];

        if($this->user->emailExists()) {
            // Vérifier le mot de passe
            if(password_verify($data['password'], $this->user->password)) {
                return [
                    'success' => true,
                    'message' => 'Connexion réussie',
                    'data' => [
                        'user_id' => $this->user->id,
                        'username' => $this->user->username
                    ]
                ];
            } else {
                return [
                    'success' => false,
                    'message' => 'Mot de passe incorrect'
                ];
            }
        } else {
            return [
                'success' => false,
                'message' => 'Email non trouvé'
            ];
        }
    }

    /**
     * Récupérer le profil d'un utilisateur
     * @param int $user_id - ID de l'utilisateur
     * @return array - Réponse JSON
     */
    public function getProfile($user_id) {
        if(empty($user_id)) {
            return [
                'success' => false,
                'message' => 'ID utilisateur requis'
            ];
        }

        $this->user->id = $user_id;

        if($this->user->getById()) {
            return [
                'success' => true,
                'message' => 'Profil récupéré',
                'data' => [
                    'id' => $this->user->id,
                    'username' => $this->user->username,
                    'email' => $this->user->email,
                    'created_at' => $this->user->created_at
                ]
            ];
        } else {
            return [
                'success' => false,
                'message' => 'Utilisateur non trouvé'
            ];
        }
    }

    /**
     * Mettre à jour un utilisateur
     * @param array $data - Données PUT de la requête (user_id, username, email, password)
     * @return array - Réponse JSON
     */
    public function updateUser($data) {
        // Vérifier que l'ID est fourni
        if(empty($data['user_id'])) {
            return [
                'success' => false,
                'message' => 'ID utilisateur requis'
            ];
        }

        // Vérifier que l'utilisateur existe
        $this->user->id = $data['user_id'];
        if(!$this->user->getById()) {
            return [
                'success' => false,
                'message' => 'Utilisateur non trouvé'
            ];
        }

        // Vérifier qu'au moins un champ est fourni pour la mise à jour
        if(empty($data['username']) && empty($data['email']) && empty($data['password'])) {
            return [
                'success' => false,
                'message' => 'Aucune donnée à mettre à jour'
            ];
        }

        // Validation partielle des données fournies
        $errors = [];

        if(isset($data['username']) && !empty($data['username'])) {
            if(strlen($data['username']) < 3) {
                $errors[] = "Le nom d'utilisateur doit contenir au moins 3 caractères";
            } else {
                $this->user->username = $data['username'];
            }
        }

        if(isset($data['email']) && !empty($data['email'])) {
            if(!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
                $errors[] = "L'email n'est pas valide";
            } else {
                // Vérifier si l'email n'est pas déjà utilisé par un autre utilisateur
                $tempUser = new User($this->db);
                $tempUser->email = $data['email'];
                if($tempUser->emailExists() && $tempUser->id != $data['user_id']) {
                    $errors[] = "Cet email est déjà utilisé par un autre utilisateur";
                } else {
                    $this->user->email = $data['email'];
                }
            }
        }

        if(isset($data['password']) && !empty($data['password'])) {
            if(strlen($data['password']) < 6) {
                $errors[] = "Le mot de passe doit contenir au moins 6 caractères";
            } else {
                $this->user->password = $data['password'];
            }
        }

        if(!empty($errors)) {
            return [
                'success' => false,
                'message' => 'Erreurs de validation',
                'errors' => $errors
            ];
        }

        // Mettre à jour l'utilisateur
        if($this->user->update()) {
            return [
                'success' => true,
                'message' => 'Utilisateur mis à jour avec succès'
            ];
        } else {
            return [
                'success' => false,
                'message' => 'Erreur lors de la mise à jour de l\'utilisateur'
            ];
        }
    }

    /**
     * Supprimer un utilisateur
     * @param int $user_id - ID de l'utilisateur à supprimer
     * @return array - Réponse JSON
     */
    public function deleteUser($user_id) {
        if(empty($user_id)) {
            return [
                'success' => false,
                'message' => 'ID utilisateur requis'
            ];
        }

        // Vérifier que l'utilisateur existe
        $this->user->id = $user_id;
        if(!$this->user->getById()) {
            return [
                'success' => false,
                'message' => 'Utilisateur non trouvé'
            ];
        }

        // Supprimer l'utilisateur
        if($this->user->delete()) {
            return [
                'success' => true,
                'message' => 'Utilisateur supprimé avec succès'
            ];
        } else {
            return [
                'success' => false,
                'message' => 'Erreur lors de la suppression de l\'utilisateur'
            ];
        }
    }

    /**
     * Envoyer une réponse JSON
     * @param array $data - Données à envoyer
     * @param int $http_code - Code HTTP (200, 400, 404, etc.)
     */
    public function sendResponse($data, $http_code = 200) {
        http_response_code($http_code);
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
    }
}
?>
