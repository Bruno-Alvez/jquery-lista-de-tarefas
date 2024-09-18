$(document).ready(function () {

    $('#form-tarefas').submit(function (e) {
        e.preventDefault(); 

        const nomeTarefa = $('#Input-nome-tarefa').val();

        if (nomeTarefa) {
            const novaTarefa = $('<li>').text(nomeTarefa).hide();
            $('#lista-de-tarefas').append(novaTarefa);
            novaTarefa.slideDown(200);

            $('#Input-nome-tarefa').val('');
        }
    });

    $(document).on('click', 'li', function () {
        $(this).toggleClass('tarefa-completa');
    });

});