<?php
include 'database.php';

$stmt = $conn->prepare("SELECT id, search_term, search_time FROM search_history ORDER BY search_time DESC");
$stmt->execute();

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($results);
?>