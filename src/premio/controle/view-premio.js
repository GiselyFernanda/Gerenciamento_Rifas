$(document).ready(function() {

    $('#table-premio').on('click', 'button.btn-view', function(e) {

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
                        $('#NOME').val(dado.dados.NOME)
                        $('#DESCRICAO').val(dado.dados.DESCRICAO)
                        $('#VALOR').val(dado.dados.VALOR)
                        $('#NOME').attr('readonly', 'true')
                        $('#DESCRICAO').attr('readonly', 'true')
                        $('#VALOR').attr('readonly', 'true')
                    })
                    $('.btn-save').hide()
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