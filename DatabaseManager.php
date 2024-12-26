<?php
class DatabaseManager
{

    const DB_NAME = "atarod_db";

    function getConnection($db_name)
    {
        return mysqli_connect("localhost", "root", "", $db_name);
    }

    function execcuteQuery($conncetion, $query)
    {
        return mysqli_query($conncetion, $query);
    }

    function createDatabase()
    {
        $query = "create database " . DatabaseManager::DB_NAME;
        $connection = DatabaseManager::getConnection("");
        $execute_query = DatabaseManager::execcuteQuery($connection, $query);
        if ($execute_query) {
            echo "DATABASE CREATED SUCCESSFULLY";

        }



    }

    function createTable()
    {
        $query = " create table tbl_user (id INTEGER PRIMARY KEY AUTO_INCREMENT,
                                            fullName TEXT ,
                                            userName TEXT,
                                            email TEXT ,
                                            city TEXT,
                                            street TEXT,
                                            state TEXT,
                                            postalCode TEXT

                                            )";
        $connection = DatabaseManager::getConnection(DatabaseManager::DB_NAME);
        $executer_query = DatabaseManager::execcuteQuery($connection, $query);
        if ($executer_query) {
            echo "THE TABLE CREATED SUCCESSFULLY";
        }


    }


    function addUser($fullName, $userName, $email,$city,$street,$state,$postalCode)
    {
        $query = "INSERT INTO tbl_user (fullName ,userName,email,city,street,state,postalCode) 
        VALUES('$fullName','$userName','$email','$city','$street','$state','$postalCode')";

        $connection = DatabaseManager::getConnection(DatabaseManager::DB_NAME);
        $execute_query = DatabaseManager::execcuteQuery($connection, $query);
        if ($execute_query) {
            echo "User INSERTED SUCCESSFULLY";
        }

    }

    function getAllUsers()
    {
        $query = "SELECT * FROM tbl_user ";
        $connection = DatabaseManager::getConnection(DatabaseManager::DB_NAME);
        $result = DatabaseManager::execcuteQuery($connection, $query);

        $resultArrey = array();
        for ($i = 0; $i < mysqli_num_rows($result); $i++) {
            $resultArrey[$i] = $result->fetch_assoc();

            // echo  $resultArrey[$i] ;



        }
        echo json_encode($resultArrey);

    }

    function getUser($id)
    {
        $query = "SELECT * FROM tbl_user where id='$id' ";
        $connection = DatabaseManager::getConnection(DatabaseManager::DB_NAME);
        $result = DatabaseManager::execcuteQuery($connection, $query);

        $resultArrey = array();
        $resultArrey[0] = $result->fetch_assoc();
        echo json_encode($resultArrey[0]);
    }




    function deleteUser($id)
    {
        $query = "DELETE FROM tbl_user where id='$id'";
        $connection = DatabaseManager::getConnection(DatabaseManager::DB_NAME);
        $execute_query = DatabaseManager::execcuteQuery($connection, $query);
        if ($execute_query) {
            // echo "RECORD DELETED SUCCESSFULLY";

        }
    }

    function updateUser($id,$fullName, $userName, $email,$city,$street,$state,$postalCode)
    {
        $query = "UPDATE tbl_user SET  fullname='$fullName'
        , userName='$userName' ,email='$email' , city='$city', street='$street'
        , state='$state', postalCode='$postalCode' where id='$id' ";

        $connection = DatabaseManager::getConnection(DatabaseManager::DB_NAME);
        $execute_query = DatabaseManager::execcuteQuery($connection, $query);
        if ($execute_query) {
            echo "RECORD UPDATED SUCCESSFULLY";

        }
    }





}