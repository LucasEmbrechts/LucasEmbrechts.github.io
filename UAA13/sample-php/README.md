# API PHP pour Application Android - Gestion d'Utilisateurs

Une API REST simple construite avec PHP et MySQL utilisant l'architecture MVC pour gérer l'authentification et les profils utilisateurs.

## 📁 Structure du Projet

```
sample-php/
├── api/                    # Endpoints de l'API REST
│   ├── register.php        # Inscription utilisateur (POST)
│   ├── login.php          # Connexion utilisateur (POST)
│   └── profile.php        # Récupération profil (GET)
├── config/                 # Configuration
│   └── Database.php       # Classe de connexion à la BD
├── controllers/           # Contrôleurs MVC
│   └── UserController.php # Logique métier utilisateurs
├── models/                # Modèles de données
│   └── User.php          # Modèle User (CRUD)
├── database/             # Scripts SQL
│   └── schema.sql       # Création de la BD et tables
└── README.md            # Cette documentation
```

## 🏗️ Architecture MVC

### Model (Modèle)
- **Fichier** : `models/User.php`
- **Rôle** : Représente les données et la logique d'accès à la base de données
- **Méthodes principales** :
  - `create()` : Créer un nouvel utilisateur
  - `emailExists()` : Vérifier si un email existe
  - `getById()` : Récupérer un utilisateur par son ID
  - `validate()` : Valider les données utilisateur

### Controller (Contrôleur)
- **Fichier** : `controllers/UserController.php`
- **Rôle** : Gère la logique métier et fait le lien entre l'API et le modèle
- **Méthodes principales** :
  - `register($data)` : Gérer l'inscription
  - `login($data)` : Gérer la connexion
  - `getProfile($user_id)` : Récupérer le profil
  - `sendResponse($data, $code)` : Envoyer une réponse JSON

### View (API Endpoints)
- **Dossier** : `api/`
- **Rôle** : Points d'entrée de l'API REST
- **Endpoints** :
  - `POST /api/register.php` : Inscription
  - `POST /api/login.php` : Connexion
  - `GET /api/profile.php?user_id=X` : Profil

## ⚙️ Installation

### 1. Prérequis
- PHP 7.4 ou supérieur
- MySQL 5.7 ou supérieur
- Serveur web (Apache/XAMPP/WAMP/MAMP)

### 2. Configuration de la base de données

1. Ouvrir phpMyAdmin ou votre client MySQL
2. Exécuter le fichier `database/schema.sql`
3. Vérifier que la base de données `sample_android_app` et la table `users` sont créées

### 3. Configuration de la connexion

Modifier les paramètres dans `config/Database.php` selon votre environnement :

```php
private $host = "localhost";      // Hôte MySQL
private $db_name = "sample_android_app";  // Nom de la BD
private $username = "root";       // Utilisateur MySQL
private $password = "";           // Mot de passe MySQL
```

### 4. Déployer les fichiers

Copier tout le dossier `sample-php/` dans le répertoire de votre serveur web :
- **XAMPP** : `C:\xampp\htdocs\sample-php\`
- **WAMP** : `C:\wamp64\www\sample-php\`
- **MAMP** : `/Applications/MAMP/htdocs/sample-php/`

## 🚀 Utilisation de l'API

### Base URL
```
http://localhost/sample-php/api/
```

### 1. Inscription (Register)

**Endpoint** : `POST /api/register.php`

**Corps de la requête (JSON)** :
```json
{
    "username": "john_doe",
    "email": "john@example.com",
    "password": "password123"
}
```

**Réponse en cas de succès** :
```json
{
    "success": true,
    "message": "Utilisateur créé avec succès"
}
```

**Réponse en cas d'erreur** :
```json
{
    "success": false,
    "message": "Erreurs de validation",
    "errors": [
        "Le nom d'utilisateur doit contenir au moins 3 caractères"
    ]
}
```

### 2. Connexion (Login)

**Endpoint** : `POST /api/login.php`

**Corps de la requête (JSON)** :
```json
{
    "email": "john@example.com",
    "password": "password123"
}
```

**Réponse en cas de succès** :
```json
{
    "success": true,
    "message": "Connexion réussie",
    "data": {
        "user_id": 1,
        "username": "john_doe"
    }
}
```

**Réponse en cas d'erreur** :
```json
{
    "success": false,
    "message": "Mot de passe incorrect"
}
```

### 3. Récupérer le Profil

**Endpoint** : `GET /api/profile.php?user_id=1`

**Réponse en cas de succès** :
```json
{
    "success": true,
    "message": "Profil récupéré",
    "data": {
        "id": 1,
        "username": "john_doe",
        "email": "john@example.com",
        "created_at": "2025-12-24 10:30:00"
    }
}
```

## 🧪 Tester l'API

### Avec Postman

1. **Register** :
   - Méthode : POST
   - URL : `http://localhost/sample-php/api/register.php`
   - Headers : `Content-Type: application/json`
   - Body (raw/JSON) : `{"username":"test","email":"test@test.com","password":"test123"}`

2. **Login** :
   - Méthode : POST
   - URL : `http://localhost/sample-php/api/login.php`
   - Headers : `Content-Type: application/json`
   - Body (raw/JSON) : `{"email":"test@test.com","password":"test123"}`

3. **Profile** :
   - Méthode : GET
   - URL : `http://localhost/sample-php/api/profile.php?user_id=1`

### Avec cURL (Terminal)

```bash
# Register
curl -X POST http://localhost/sample-php/api/register.php \
  -H "Content-Type: application/json" \
  -d '{"username":"test","email":"test@test.com","password":"test123"}'

# Login
curl -X POST http://localhost/sample-php/api/login.php \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","password":"test123"}'

# Profile
curl http://localhost/sample-php/api/profile.php?user_id=1
```

## 🔒 Sécurité

L'API implémente plusieurs mesures de sécurité basiques :

### 1. Protection contre l'injection SQL
- Utilisation de **requêtes préparées** (PDO prepared statements)
- Tous les paramètres sont liés avec `bindParam()`

```php
$stmt = $this->conn->prepare("SELECT * FROM users WHERE email = :email");
$stmt->bindParam(":email", $this->email);
```

### 2. Hachage des mots de passe
- Utilisation de `password_hash()` avec **BCRYPT**
- Vérification avec `password_verify()`

```php
$password_hash = password_hash($this->password, PASSWORD_BCRYPT);
```

### 3. Validation des données
- Vérification des champs requis
- Validation du format email
- Longueur minimale des mots de passe (6 caractères)
- Nettoyage avec `htmlspecialchars()` et `strip_tags()`

### 4. Headers CORS
- Configuration pour autoriser les requêtes depuis une app Android
- Headers Access-Control configurés dans chaque endpoint

## 📱 Intégration Android

### Exemple avec Volley

```java
// Login
String url = "http://10.0.2.2/sample-php/api/login.php"; // Émulateur Android
JSONObject jsonBody = new JSONObject();
jsonBody.put("email", "john@example.com");
jsonBody.put("password", "password123");

JsonObjectRequest request = new JsonObjectRequest(
    Request.Method.POST, url, jsonBody,
    response -> {
        boolean success = response.getBoolean("success");
        if (success) {
            JSONObject data = response.getJSONObject("data");
            int userId = data.getInt("user_id");
            String username = data.getString("username");
            // Sauvegarder userId en SharedPreferences
        }
    },
    error -> {
        // Gérer l'erreur
    }
);
```

**Note** : Utilisez `10.0.2.2` au lieu de `localhost` pour l'émulateur Android.

### Exemple avec Retrofit

```java
public interface ApiService {
    @POST("api/login.php")
    Call<LoginResponse> login(@Body LoginRequest request);

    @GET("api/profile.php")
    Call<ProfileResponse> getProfile(@Query("user_id") int userId);
}
```

## 🎓 Concepts Pédagogiques

### Ce que vous apprenez avec ce projet :

1. **Architecture MVC** : Séparation des responsabilités
   - Model : Gestion des données
   - Controller : Logique métier
   - View : Présentation (API endpoints)

2. **API REST** : Communication client-serveur
   - Méthodes HTTP (GET, POST)
   - Format JSON
   - Codes de réponse HTTP

3. **Sécurité web** :
   - Injection SQL et requêtes préparées
   - Hachage de mots de passe
   - Validation des données

4. **Base de données** :
   - Schéma relationnel
   - Requêtes SQL (INSERT, SELECT)
   - Indexes pour performance

## 📝 Évolutions Possibles

Pour aller plus loin avec ce projet :

1. **Authentification avancée** :
   - Ajouter JWT (JSON Web Tokens)
   - Session management
   - Refresh tokens

2. **Fonctionnalités utilisateur** :
   - Mise à jour du profil (UPDATE)
   - Suppression de compte (DELETE)
   - Réinitialisation mot de passe

3. **Validation renforcée** :
   - Vérification force du mot de passe
   - CAPTCHA
   - Rate limiting

4. **Logging et monitoring** :
   - Logs des erreurs
   - Historique des connexions
   - Analytics

## 🐛 Dépannage

### Erreur : "Erreur de connexion"
- Vérifier que MySQL est démarré
- Vérifier les identifiants dans `config/Database.php`
- Vérifier que la base de données existe

### Erreur 404
- Vérifier que les fichiers sont dans le bon dossier du serveur web
- Vérifier l'URL (http://localhost/sample-php/api/...)

### Erreur : "Call to undefined function password_hash()"
- Mettre à jour PHP vers version 7.4+

## 📚 Ressources

- [Documentation PHP PDO](https://www.php.net/manual/fr/book.pdo.php)
- [Guide API REST](https://restfulapi.net/)
- [PHP Password Hashing](https://www.php.net/manual/fr/function.password-hash.php)
- [Architecture MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)

---

**Auteur** : Projet pédagogique pour UAA13
**Licence** : Usage éducatif
