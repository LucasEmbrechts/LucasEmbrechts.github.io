<?php
/**
 * Endpoint API : Récupération du profil utilisateur
 * Méthode : GET
 * URL : /api/profile.php?user_id=X
 */

// Headers pour l'API REST
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Inclure le contrôleur
require_once __DIR__ . '/../controllers/UserController.php';

// Vérifier la méthode HTTP
if($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée']);
    exit();
}

// Récupérer l'ID utilisateur depuis les paramètres GET
$user_id = isset($_GET['user_id']) ? intval($_GET['user_id']) : null;

// Créer une instance du contrôleur
$controller = new UserController();

// Appeler la méthode getProfile
$response = $controller->getProfile($user_id);

// Envoyer la réponse
$http_code = $response['success'] ? 200 : 404;
$controller->sendResponse($response, $http_code);
?>
