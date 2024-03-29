$(document).ready(function() {

    $('#table-promocao').on('click', 'button.btn-edit', function(e) {

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
            url: 'src/promocao/modelo/view-promocao.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/promocao/visao/form-promocao.html', function() {
                        $('#TITULO').val(dado.dados.TITULO)
                        $('#DESCRICAO').val(dado.dados.DESCRICAO)
                        $('#DATA_INICIO').val(dado.dados.DATA_INICIO)
                        $('#DATA_FIM').val(dado.dados.DATA_FIM)
                        $('#DATA_SORTEIO').val(dado.dados.DATA_SORTEIO)
                        $('#VALOR_RIFA').val(dado.dados.VALOR_RIFA)
                        $('#ID').val(dado.dados.ID)
                        $('#ARRECADACAO').val(dado.dados.ARRECADACAO)
                    })
                    $('.btn-save').removeAttr('data-operation', 'insert')
                    $('.btn-save').show()
                    $('#modal-promocao').modal('show')
                } else {
                    Swal.fire({
                        title: 'e-Rifa',
                        text: dado.mensagem,
                        type: dado.tipo,
                        confirmButtonText: 'OK'
                    })
                }
            }
        })

    })
})