<?php
header('Access-Control-Allow-Origin: *');

include 'DatabaseManager.php';
$databaseManagerObj = new DatabaseManager();
$databaseManagerObj->getAllUsers();



