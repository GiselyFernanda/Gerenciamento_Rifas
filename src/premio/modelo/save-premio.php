<?php
    include('../../conexao/conn.php');


    $requestData = $_REQUEST;

    if(empty($requestData['NOME'])){
        $dados = array(
            "tipo" => 'error',
            "mensagem" => 'Existe(m) campo(s) obrigatório(s) não preenchido(s).'
        );
    } else {
        $ID = isset($requestData['ID']) ? $requestData['ID'] : '';
        $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : '';

        if($operacao == 'insert'){
            try{
                $stmt = $pdo->prepare('INSERT INTO PREMIO (NOME, DESCRICAO, VALOR) VALUES (:a, :b, :c)');
                $stmt->execute(array(
                    ':a' => $requestData['NOME'],
                    ':b' => $requestData['DESCRICAO'],
                    ':c' => $requestData['VALOR'],
                ));
                $dados = array(
                    "tipo" => 'success',
                    "mensagem" => 'Registro salvo com sucesso.'
                );
            } catch(PDOException $e) {
                $dados = array(
                    "tipo" => 'error',
                    "mensagem" => 'Não foi possível salvar o registro: .'.$e
                );
            }
        } else {

            try{
                $stmt = $pdo->prepare('UPDATE PREMIO SET NOME= :a, DESCRICAO = :b, VALOR = :c  WHERE ID = :id');
                $stmt->execute(array(
                    ':id' => $ID,
                     ':a' => $requestData['NOME'],
                     ':b' => $requestData['DESCRICAO'],
                     ':c' => $requestData['VALOR'],
                ));
                $dados = array(
                    "tipo" => 'success',
                    "mensagem" => 'Registro atualizado com sucesso.'
                );
            } catch (PDOException $e) {
                $dados = array(
                    "tipo" => 'error',
                    "mensagem" => 'Não foi possível efetuar o alteração do registro.'.$e
                );
            }
        }
    }

    echo json_encode($dados);