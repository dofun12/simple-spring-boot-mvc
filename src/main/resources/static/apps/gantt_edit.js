//document.getElementById('dateStart').value = new moment().format("YYYY-MM-DDTHH:mm");
//document.getElementById('dateEnd').value = new moment().add(2, 'days').format("YYYY-MM-DDTHH:mm");
var array = [];
var gantt;

function onDelete(event) {
    deleteId('/api/tarefas/'+event.data.obj.id,function () {
        alert(event.data.obj.taskName+" deletado!");
        listBooks();
    });
}

function onEdit(event) {
    edit = true;
    $('#btn-save').hide();
    $('#btn-cancel').show();
    $('#btn-atualizar').show();

    console.log(new moment(event.data.obj.dateStart));
    document.getElementById('taskId').value=event.data.obj.id;
    document.getElementById('taskName').value=event.data.obj.taskName;
    document.getElementById('dateStart').value=new moment(event.data.obj.dateStart, 'YYYY-MM-DDTHH:mm:ss').format('YYYY-MM-DD');
    document.getElementById('dateEnd').value=new moment(event.data.obj.dateEnd, 'YYYY-MM-DDTHH:mm:ss').format('YYYY-MM-DD');
    document.getElementById('datePreview').value=new moment(event.data.obj.datePreview, 'YYYY-MM-DDTHH:mm:ss').format('YYYY-MM-DD');
    document.getElementById('percentComplete').value=event.data.obj.percentComplete;

}

function listBooks() {

    getJson('/api/tarefas', function (response) {
        console.log(response);
        createSimpleTable('table#dynamicTable', response,onDelete,onEdit);
    });
}

function simpleTableDelete(id) {
    deleteId('/api/tarefas/' + id, listBooks());
}

/**
 * Sem 1: 11/03 – 17/03: Primeira rega (1x semanal)
 Sem 2: 18/03 – 24/03: Segunda rega (1x semanal)
 Sem 3: 25/03 – 31/03: Terceira rega (1 x semanal)
 Quinzena 1: 01/04 – 14/04: Quarta rega (1x quinzenal)
 Quinzena 2: 15/04 – 28/04: Quinta rega (1x quinzenal)
 Quinzena 3: 29/04 – 12/05: Sexta rega (1x quinzenal)
 */

$(document).ready(function () {

    $('#btn-cancel').hide();
    $('#btn-atualizar').hide();
    $('#btn-save').on('click', function () {
        var dateStart = moment($('#dateStart').val(), 'YYYY-MM-DDTHH:mm');
        var dateEnd = moment($('#dateEnd').val(), 'YYYY-MM-DDTHH:mm');
        var duration = dateEnd.diff(dateStart, 'days');
        if(!duration){
            duration =1;
        }
        var obj = {
            taskName: $('#taskName').val(),
            dateStart: $('#dateStart').val(),
            dateEnd: $('#dateEnd').val(),
            duration: duration,
            percentComplete: $('#percentComplete').val(),
            datePreview: $('#datePreview').val()
        };
        console.log(obj);
        postJsonData('/api/tarefas', obj, function (response) {
            alert("Livro Salvo");
            listBooks();
        });
    });
    $('#btn-atualizar').on('click', function () {
        if($('#taskId').val()) {
            var dateStart = moment($('#dateStart').val(), 'YYYY-MM-DDTHH:mm');
            var dateEnd = moment($('#dateEnd').val(), 'YYYY-MM-DDTHH:mm');
            var duration = dateEnd.diff(dateStart, 'days');
            if (!duration) {
                duration = 1;
            }
            var obj = {
                id: $('#taskId').val() ,
                taskName: $('#taskName').val(),
                dateStart: $('#dateStart').val(),
                dateEnd: $('#dateEnd').val(),
                duration: duration,
                percentComplete: $('#percentComplete').val(),
                datePreview: $('#datePreview').val()
            };
            console.log(obj);
            putJsonData('/api/tarefas/'+$('#taskId').val(), obj, function (response) {
                alert("Alterado");
                listBooks();
            });
        }
    });
    $('#btn-cancel').on('click', function () {
        $('#btn-cancel').hide();
        $('#btn-atualizar').hide();
        $('#btn-save').show();
    });
    listBooks();

});