<?php

// $hostname = "sql104.epizy.com";
// $dbname = "epiz_31796370_rifa";
// $username = "epiz_31796370";
// $password = "o2sSumuvRTBQ";


$hostname = "localhost";
$dbname = "rifa";
$username = "root";
$password = "";

try{
    $pdo = new PDO('mysql:host='.$hostname.';dbname='.$dbname, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e){
    echo 'Error: '.$e->getMessage();
}
