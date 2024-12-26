<?php
header('Access-Control-Allow-Origin: *');
$id=$_GET['id'];

include 'DatabaseManager.php';
$databaseManagerObj = new DatabaseManager();
$databaseManagerObj->getUser($id);



