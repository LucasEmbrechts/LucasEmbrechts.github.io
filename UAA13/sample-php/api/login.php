<?php
/**
 * Endpoint API : Connexion d'un utilisateur
 * Méthode : POST
 * URL : /api/login.php
 */

// Headers pour l'API REST
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Inclure le contrôleur
require_once __DIR__ . '/../controllers/UserController.php';

// Vérifier la méthode HTTP
if($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée']);
    exit();
}

// Récupérer les données JSON du body
$data = json_decode(file_get_contents("php://input"), true);

// Créer une instance du contrôleur
$controller = new UserController();

// Appeler la méthode login
$response = $controller->login($data);

// Envoyer la réponse
$http_code = $response['success'] ? 200 : 401;
$controller->sendResponse($response, $http_code);
?>
