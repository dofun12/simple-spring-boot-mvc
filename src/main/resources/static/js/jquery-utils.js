function postJsonData(url, data, onComplete) {
    $.ajax({
        method: "POST",
        dataType: "json",
        url: url,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data)
    }).done(onComplete);
}

function putJsonData(url, data, onComplete) {
    $.ajax({
        method: "PUT",
        dataType: "json",
        url: url,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data)
    }).done(onComplete);
}

function getJson(url, onComplete) {
    $.ajax({
        method: "GET",
        dataType: "json",
        url: url,
        contentType: "application/json; charset=utf-8"
    }).done(onComplete);
}

function deleteId(url, onComplete) {
    $.ajax({
        method: "DELETE",
        dataType: "json",
        url: url,
        contentType: "application/json; charset=utf-8"
    }).always(onComplete);
}

function createSimpleTable(selector, array, onDelete, onEdit) {
    $(selector).empty();
    $.each(array, function (index, obj) {
        var tr = $("<tr></tr>");
        Object.keys(obj).forEach(function (key) {
            var td = $("<td></td>");
            td.html(obj[key]);
            tr.append(td);
        });
        var tdAction = $("<td></td>");
        var deleteBtn = $("<button></button>");
        deleteBtn.html("Deletar");
        deleteBtn.bind("click", {'obj': obj}, onDelete);

        var editBtn = $("<button></button>");
        editBtn.html("Editar");
        editBtn.bind("click", {'obj': obj}, onEdit);

        tdAction.append(deleteBtn);
        tdAction.append(editBtn);
        tr.append(tdAction);
        $(selector).append(tr);

    });

}