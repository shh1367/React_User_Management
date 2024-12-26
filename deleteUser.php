<?php 
header('Access-Control-Allow-Origin: *');
$id =$_REQUEST['id'];

include 'DatabaseManager.php';
$databaseManagerObj=new DatabaseManager();
$databaseManagerObj->deleteUser($id) ;