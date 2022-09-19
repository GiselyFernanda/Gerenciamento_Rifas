$(document).ready(function() {

    $('#table-premio').on('click', 'button.btn-edit', function(e) {

        e.preventDefault()


        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Visualização de registro')

        let ID = `ID=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: ID,
            url: 'src/premio/modelo/view-premio.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/premio/visao/form-premio.html', function() {
                        $('#TITULO').val(dado.dados.TITULO)
                        $('#DESCRICAO').val(dado.dados.DESCRICAO)
                        $('#INICIO').val(dado.dados.DATA_INICIO)
                        $('#TERMINO').val(dado.dados.DATA_FIM)
                        $('#SORTEIO').val(dado.dados.DATA_SORTEIO)
                        $('#ARRECADACAO').val(dado.dados.ARRECADACAO)
                        $('#VALOR').val(dado.dados.VALOR_RIFA)
                        $('#ID').val(dado.dados.ID)
                    })
                    $('.btn-save').removeAttr('data-operation', 'insert')
                    $('.btn-save').show()
                    $('#modal-premio').modal('show')
                } else {
                    Swal.fire({ 
                        title: 'Rifas da Bibi', 
                        text: dado.mensagem, 
                        type: dado.tipo, 
                        confirmButtonText: 'OK'
                    })
                }
            }
        })

    })
})