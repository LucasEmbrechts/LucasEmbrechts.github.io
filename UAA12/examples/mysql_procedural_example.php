<?php
/**
 * =============================================================================
 * GUIDE : CONNEXION MySQL EN PHP (VERSION PROCÉDURALE)
 * =============================================================================
 *
 * Ce fichier démontre comment se connecter à MySQL et effectuer des opérations
 * CRUD (Create, Read, Update, Delete) en PHP procédural avec des exemples concrets.
 */

// =============================================================================
// 1. CONNEXION À LA BASE DE DONNÉES
// =============================================================================

// Paramètres de connexion
$host = 'localhost';        // Serveur MySQL (localhost pour XAMPP)
$username = 'root';         // Utilisateur (root par défaut sur XAMPP)
$password = '';             // Mot de passe (vide par défaut sur XAMPP)
$database = 'ma_base';      // Nom de votre base de données

// Établir la connexion
$connexion = mysqli_connect($host, $username, $password, $database);

// Vérifier si la connexion a réussi
if (!$connexion) {
    die("Erreur de connexion : " . mysqli_connect_error());
}

echo "✓ Connexion réussie à la base de données<br><br>";

// Définir l'encodage UTF-8 pour supporter les accents
mysqli_set_charset($connexion, "utf8");

// =============================================================================
// 2. SELECT - RÉCUPÉRER TOUS LES UTILISATEURS
// =============================================================================

echo "<h2>1. Récupérer tous les utilisateurs</h2>";

$sql = "SELECT id, nom, email FROM users ORDER BY id DESC";
$resultat = mysqli_query($connexion, $sql);

if ($resultat) {
    // Compter le nombre de résultats
    $nombre = mysqli_num_rows($resultat);
    echo "Nombre d'utilisateurs : $nombre<br><br>";

    // Afficher les résultats dans un tableau HTML
    if ($nombre > 0) {
        echo "<table border='1' cellpadding='10'>";
        echo "<tr><th>ID</th><th>Nom</th><th>Email</th></tr>";

        // Parcourir chaque ligne du résultat
        while ($ligne = mysqli_fetch_assoc($resultat)) {
            echo "<tr>";
            echo "<td>" . $ligne['id'] . "</td>";
            echo "<td>" . htmlspecialchars($ligne['nom']) . "</td>";
            echo "<td>" . htmlspecialchars($ligne['email']) . "</td>";
            echo "</tr>";
        }

        echo "</table><br>";
    } else {
        echo "Aucun utilisateur dans la base.<br>";
    }

    // Libérer la mémoire
    mysqli_free_result($resultat);
}

echo "<hr><br>";

// =============================================================================
// 3. SELECT - RECHERCHER UN UTILISATEUR PAR EMAIL (REQUÊTE PRÉPARÉE)
// =============================================================================

echo "<h2>2. Rechercher un utilisateur par email</h2>";

$email_recherche = "alice@example.com";

// Préparer la requête avec un placeholder (?)
$sql = "SELECT id, nom, email FROM users WHERE email = ?";
$stmt = mysqli_prepare($connexion, $sql);

if ($stmt) {
    // Lier le paramètre
    // "s" signifie que le paramètre est de type string
    mysqli_stmt_bind_param($stmt, "s", $email_recherche);

    // Exécuter la requête
    mysqli_stmt_execute($stmt);

    // Récupérer le résultat
    $resultat = mysqli_stmt_get_result($stmt);

    if ($ligne = mysqli_fetch_assoc($resultat)) {
        echo "Utilisateur trouvé :<br>";
        echo "ID : " . $ligne['id'] . "<br>";
        echo "Nom : " . htmlspecialchars($ligne['nom']) . "<br>";
        echo "Email : " . htmlspecialchars($ligne['email']) . "<br>";
    } else {
        echo "Aucun utilisateur avec l'email : $email_recherche<br>";
    }

    // Fermer le statement
    mysqli_stmt_close($stmt);
}

echo "<hr><br>";

// =============================================================================
// 4. INSERT - AJOUTER UN NOUVEL UTILISATEUR (REQUÊTE PRÉPARÉE)
// =============================================================================

echo "<h2>3. Ajouter un nouvel utilisateur</h2>";

$nouveau_nom = "Bob Martin";
$nouveau_email = "bob@example.com";

// Préparer la requête INSERT
$sql = "INSERT INTO users (nom, email, date_creation) VALUES (?, ?, NOW())";
$stmt = mysqli_prepare($connexion, $sql);

if ($stmt) {
    // Lier les 2 paramètres
    // "ss" = 2 paramètres de type string
    mysqli_stmt_bind_param($stmt, "ss", $nouveau_nom, $nouveau_email);

    // Exécuter la requête
    if (mysqli_stmt_execute($stmt)) {
        // Récupérer l'ID du nouvel utilisateur
        $dernier_id = mysqli_insert_id($connexion);
        echo "✓ Utilisateur ajouté avec succès !<br>";
        echo "ID du nouvel utilisateur : $dernier_id<br>";
        echo "Nom : " . htmlspecialchars($nouveau_nom) . "<br>";
        echo "Email : " . htmlspecialchars($nouveau_email) . "<br>";
    } else {
        echo "❌ Erreur lors de l'ajout : " . mysqli_stmt_error($stmt) . "<br>";
    }

    mysqli_stmt_close($stmt);
}

echo "<hr><br>";

// =============================================================================
// 5. SELECT - RECHERCHER PAR NOM (LIKE)
// =============================================================================

echo "<h2>4. Rechercher par nom (recherche partielle)</h2>";

$nom_recherche = "Martin";

// Préparer la requête avec LIKE
$sql = "SELECT id, nom, email FROM users WHERE nom LIKE ? ORDER BY nom";
$stmt = mysqli_prepare($connexion, $sql);

if ($stmt) {
    // Ajouter les % pour la recherche partielle
    $pattern = "%" . $nom_recherche . "%";
    mysqli_stmt_bind_param($stmt, "s", $pattern);
    mysqli_stmt_execute($stmt);
    $resultat = mysqli_stmt_get_result($stmt);

    $nombre = mysqli_num_rows($resultat);
    echo "Utilisateurs contenant '$nom_recherche' dans le nom : $nombre<br><br>";

    if ($nombre > 0) {
        while ($ligne = mysqli_fetch_assoc($resultat)) {
            echo "- " . htmlspecialchars($ligne['nom']) . " (" . htmlspecialchars($ligne['email']) . ")<br>";
        }
    }

    mysqli_stmt_close($stmt);
}

echo "<hr><br>";

// =============================================================================
// 6. UPDATE - MODIFIER UN UTILISATEUR (REQUÊTE PRÉPARÉE)
// =============================================================================

echo "<h2>5. Modifier le nom d'un utilisateur</h2>";

$id_a_modifier = 1;
$nouveau_nom = "Alice Dupont";

// Préparer la requête UPDATE
$sql = "UPDATE users SET nom = ? WHERE id = ?";
$stmt = mysqli_prepare($connexion, $sql);

if ($stmt) {
    // "si" = string, integer
    mysqli_stmt_bind_param($stmt, "si", $nouveau_nom, $id_a_modifier);

    if (mysqli_stmt_execute($stmt)) {
        // Vérifier combien de lignes ont été modifiées
        $lignes_modifiees = mysqli_stmt_affected_rows($stmt);

        if ($lignes_modifiees > 0) {
            echo "✓ Utilisateur ID $id_a_modifier modifié avec succès<br>";
            echo "Nouveau nom : " . htmlspecialchars($nouveau_nom) . "<br>";
        } else {
            echo "Aucune modification (ID inexistant ou nom déjà identique)<br>";
        }
    } else {
        echo "❌ Erreur : " . mysqli_stmt_error($stmt) . "<br>";
    }

    mysqli_stmt_close($stmt);
}

echo "<hr><br>";

// =============================================================================
// 7. DELETE - SUPPRIMER UN UTILISATEUR (REQUÊTE PRÉPARÉE)
// =============================================================================

echo "<h2>6. Supprimer un utilisateur</h2>";

$id_a_supprimer = 5;

// Préparer la requête DELETE
$sql = "DELETE FROM users WHERE id = ?";
$stmt = mysqli_prepare($connexion, $sql);

if ($stmt) {
    // "i" = integer
    mysqli_stmt_bind_param($stmt, "i", $id_a_supprimer);

    if (mysqli_stmt_execute($stmt)) {
        $lignes_supprimees = mysqli_stmt_affected_rows($stmt);

        if ($lignes_supprimees > 0) {
            echo "✓ Utilisateur ID $id_a_supprimer supprimé<br>";
        } else {
            echo "Aucun utilisateur supprimé (ID inexistant)<br>";
        }
    } else {
        echo "❌ Erreur : " . mysqli_stmt_error($stmt) . "<br>";
    }

    mysqli_stmt_close($stmt);
}

echo "<hr><br>";

// =============================================================================
// 8. COUNT - COMPTER LE NOMBRE D'UTILISATEURS
// =============================================================================

echo "<h2>7. Compter les utilisateurs</h2>";

$sql = "SELECT COUNT(*) as total FROM users";
$resultat = mysqli_query($connexion, $sql);

if ($resultat) {
    $ligne = mysqli_fetch_assoc($resultat);
    echo "Nombre total d'utilisateurs : " . $ligne['total'] . "<br>";
    mysqli_free_result($resultat);
}

echo "<hr><br>";

// =============================================================================
// 9. SELECT - RÉCUPÉRER UN UTILISATEUR PAR ID (REQUÊTE PRÉPARÉE)
// =============================================================================

echo "<h2>8. Récupérer un utilisateur par son ID</h2>";

$id_recherche = 1;

$sql = "SELECT id, nom, email, date_creation FROM users WHERE id = ?";
$stmt = mysqli_prepare($connexion, $sql);

if ($stmt) {
    // "i" = integer
    mysqli_stmt_bind_param($stmt, "i", $id_recherche);
    mysqli_stmt_execute($stmt);
    $resultat = mysqli_stmt_get_result($stmt);

    if ($ligne = mysqli_fetch_assoc($resultat)) {
        echo "Détails de l'utilisateur ID $id_recherche :<br>";
        echo "Nom : " . htmlspecialchars($ligne['nom']) . "<br>";
        echo "Email : " . htmlspecialchars($ligne['email']) . "<br>";
        echo "Date création : " . $ligne['date_creation'] . "<br>";
    } else {
        echo "Utilisateur ID $id_recherche introuvable<br>";
    }

    mysqli_stmt_close($stmt);
}

echo "<hr><br>";

// =============================================================================
// 10. VÉRIFIER SI UN EMAIL EXISTE DÉJÀ
// =============================================================================

echo "<h2>9. Vérifier si un email existe</h2>";

$email_a_verifier = "test@example.com";

$sql = "SELECT COUNT(*) as total FROM users WHERE email = ?";
$stmt = mysqli_prepare($connexion, $sql);

if ($stmt) {
    mysqli_stmt_bind_param($stmt, "s", $email_a_verifier);
    mysqli_stmt_execute($stmt);
    $resultat = mysqli_stmt_get_result($stmt);
    $ligne = mysqli_fetch_assoc($resultat);

    if ($ligne['total'] > 0) {
        echo "❌ L'email '$email_a_verifier' est déjà utilisé<br>";
    } else {
        echo "✓ L'email '$email_a_verifier' est disponible<br>";
    }

    mysqli_stmt_close($stmt);
}

echo "<hr><br>";

// =============================================================================
// 11. FERMER LA CONNEXION
// =============================================================================

// Toujours fermer la connexion à la fin
mysqli_close($connexion);

echo "<br>✓ Connexion fermée<br>";

?>

<!--
=============================================================================
STRUCTURE DE LA TABLE USERS
=============================================================================

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    date_creation DATETIME DEFAULT CURRENT_TIMESTAMP
);

=============================================================================
TYPES DE PARAMÈTRES POUR mysqli_stmt_bind_param()
=============================================================================

i = integer (nombre entier)
d = double (nombre décimal)
s = string (chaîne de caractères)
b = blob (données binaires)

Exemples :
mysqli_stmt_bind_param($stmt, "s", $email);           // 1 string
mysqli_stmt_bind_param($stmt, "si", $nom, $id);       // 1 string, 1 integer
mysqli_stmt_bind_param($stmt, "ss", $nom, $email);    // 2 strings
mysqli_stmt_bind_param($stmt, "ssi", $nom, $email, $id); // 2 strings, 1 integer

=============================================================================
FONCTIONS MYSQLI IMPORTANTES
=============================================================================

mysqli_connect()              → Établit la connexion
mysqli_query()                → Exécute une requête SQL simple
mysqli_prepare()              → Prépare une requête sécurisée
mysqli_stmt_bind_param()      → Lie les paramètres à la requête préparée
mysqli_stmt_execute()         → Exécute la requête préparée
mysqli_stmt_get_result()      → Récupère le résultat d'un SELECT
mysqli_fetch_assoc()          → Récupère une ligne comme tableau associatif
mysqli_num_rows()             → Compte le nombre de lignes
mysqli_affected_rows()        → Nombre de lignes affectées (INSERT/UPDATE/DELETE)
mysqli_insert_id()            → Récupère le dernier ID auto-généré
mysqli_free_result()          → Libère la mémoire d'un résultat
mysqli_stmt_close()           → Ferme un statement
mysqli_close()                → Ferme la connexion

=============================================================================
POURQUOI UTILISER DES REQUÊTES PRÉPARÉES ?
=============================================================================

✓ SÉCURITÉ : Protection contre les injections SQL
✓ PERFORMANCE : Requêtes pré-compilées (plus rapide si répétées)
✓ PROPRETÉ : Séparation claire entre SQL et données

Exemple d'injection SQL sans requête préparée :
$email = "'; DROP TABLE users; --";
$sql = "SELECT * FROM users WHERE email = '$email'";  // DANGER !

Avec une requête préparée, les données sont automatiquement échappées et sécurisées.

=============================================================================
-->
