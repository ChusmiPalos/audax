<?php

include 'database.php';

$searchTerm = $_GET['term'];

// Primero registro la busqueda
$stmt = $conn->prepare("INSERT INTO search_history (search_term) VALUES (:search_term)");
$stmt->bindParam(':search_term', $searchTerm);
$stmt->execute();

// Después, consulto la API
$apiUrl = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=" . urlencode($searchTerm);

$response = file_get_contents($apiUrl);
echo $response;
?>
