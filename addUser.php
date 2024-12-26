<?php
header('Access-Control-Allow-Origin: *');

$fullName = $_REQUEST['fullName'];
$userName = $_REQUEST['userName'];
$email = $_REQUEST['email'];
$city = $_REQUEST['city'];
$street = $_REQUEST['street'];
$state = $_REQUEST['state'];
$postalCode = $_REQUEST['state'];


include 'DataBaseManager.php';
$databaseManager = new DatabaseManager();
$databaseManager->addUser($fullName,$userName,$email,$city,$street,$state,$postalCode) ;