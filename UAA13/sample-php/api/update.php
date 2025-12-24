<?php
/**
 * Endpoint API : Mise à jour d'un utilisateur
 * Méthode : PUT
 * URL : /api/update.php
 * Body JSON : {"user_id": X, "username": "...", "email": "...", "password": "..."}
 * Note: Au moins un des champs (username, email, password) doit être fourni
 */

// Headers pour l'API REST
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Inclure le contrôleur
require_once __DIR__ . '/../controllers/UserController.php';

// Vérifier la méthode HTTP
if($_SERVER['REQUEST_METHOD'] !== 'PUT') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée']);
    exit();
}

// Récupérer les données JSON depuis le corps de la requête
$data = json_decode(file_get_contents("php://input"), true);

// Vérifier que les données JSON sont valides
if(json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'JSON invalide']);
    exit();
}

// Créer une instance du contrôleur
$controller = new UserController();

// Appeler la méthode updateUser
$response = $controller->updateUser($data);

// Envoyer la réponse
$http_code = $response['success'] ? 200 : 400;
$controller->sendResponse($response, $http_code);
?>
