<?php

    $hostname = "sql102.epizy.com";
    $database = "epiz_31461389_rifas";
    $username = "epiz_31461389";
    $password = "b5dexyVmH3kl8sw";

    try{
        $pdo = new PDO('mysql:host='.$hostname.';dbname'.$dbname, $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo 'Conectado';
    } catch (PDOException $e) {
        echo 'Error: '. $e->getMessage();
    }