<?php
/**
 * Classe Database - Gestion de la connexion à la base de données
 * Utilise le pattern Singleton pour une seule instance de connexion
 */
class Database {
    // Paramètres de connexion à modifier selon votre configuration
    private $host = "localhost";
    private $db_name = "sample_android_app";
    private $username = "root";
    private $password = "";
    private $conn;

    /**
     * Obtenir la connexion à la base de données
     * @return PDO|null
     */
    public function getConnection() {
        $this->conn = null;

        try {
            // Connexion avec PDO pour utiliser les requêtes préparées (sécurité)
            $this->conn = new PDO(
                "mysql:host=" . $this->host . ";dbname=" . $this->db_name,
                $this->username,
                $this->password
            );

            // Configuration UTF-8 pour supporter les accents
            $this->conn->exec("set names utf8");

            // Mode d'erreur PDO : exceptions
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        } catch(PDOException $exception) {
            echo "Erreur de connexion : " . $exception->getMessage();
        }

        return $this->conn;
    }
}
?>
