-- ============================================
-- Script SQL pour créer la base de données
-- Application Android - Sample PHP API
-- ============================================

-- Créer la base de données
CREATE DATABASE IF NOT EXISTS sample_android_app
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

-- Sélectionner la base de données
USE sample_android_app;

-- ============================================
-- Table : users
-- ============================================
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_username (username)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- Données de test (optionnel)
-- ============================================
-- Les mots de passe sont hachés avec password_hash()
-- Mot de passe test : "password123"

INSERT INTO users (username, email, password) VALUES
('john_doe', 'john@example.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'),
('jane_smith', 'jane@example.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi');

-- ============================================
-- Vérification
-- ============================================
SELECT * FROM users;
