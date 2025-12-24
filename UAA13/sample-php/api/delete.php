<?php
/**
 * Endpoint API : Suppression d'un utilisateur
 * Méthode : DELETE
 * URL : /api/delete.php
 * Body JSON : {"user_id": X}
 */

// Headers pour l'API REST
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Inclure le contrôleur
require_once __DIR__ . '/../controllers/UserController.php';

// Vérifier la méthode HTTP
if($_SERVER['REQUEST_METHOD'] !== 'DELETE') {
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

// Récupérer l'ID utilisateur
$user_id = isset($data['user_id']) ? intval($data['user_id']) : null;

// Créer une instance du contrôleur
$controller = new UserController();

// Appeler la méthode deleteUser
$response = $controller->deleteUser($user_id);

// Envoyer la réponse
$http_code = $response['success'] ? 200 : 404;
$controller->sendResponse($response, $http_code);
?>
