<?php

    $hostname = "sql102.epizy.com";
    $database = "epiz_31461389_rifas";
    $username = "epiz_31461389";
    $password = "b5dexyVmH3kl8sw";

   if($conecta = mysqli_connect($hostname, $username, $password, $database)){
       echo 'Conectado ao banco de dados' . $database . '......';
   } else { 
       echo 'Erro: ' . mysqli_connect_error();
   }