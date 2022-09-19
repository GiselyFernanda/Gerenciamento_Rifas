$(document).ready(function() {

    $('#table-premio').on('click', 'button.btn-delete', function(e) {

        e.preventDefault()

        let ID = `ID=${$(this).attr('id')}`

        Swal.fire({
            title: 'Rifas da Bibi',
            text: "Deseja excluir esse registro?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.value) {

                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    assync: true,
                    data: ID,
                    url: 'src/premio/modelo/delete-premio.php',
                    success: function(dados) {
                        Swal.fire({
                            title: 'Rifas de Bibi',
                            text: dados.mensagem,
                            icon: dados.tipo,
                            confirmButtonText: 'OK'
                        })

                        $('#table-premio').DataTable().ajax.reload()
                    }
                })


            }
        })
    })
})