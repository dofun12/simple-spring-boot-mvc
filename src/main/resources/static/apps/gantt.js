function loadFusionCharts(response) {
    var tasksJson = [];
    var headers = [];
    $.each(response, function (index, obj) {
        tasksJson.push({
            "label":"Planejado",
            "processid": obj.id+"",
            "start": moment(obj.dateStart, 'YYYY-MM-DDTHH:mm:ss').format("DD/MM/YYYY"),
            "end": moment(obj.datePreview, 'YYYY-MM-DDTHH:mm:ss').format("DD/MM/YYYY"),
            "id": obj.id+"-1",
            "color": "#0000AA",
            "alpha": "100",
            "height": "27%",
            "toppadding": "32%"
        });
        var dateStart = new moment(obj.dateStart, 'YYYY-MM-DDTHH:mm:ss');
        var dateEnd = new moment(obj.dateEnd, 'YYYY-MM-DDTHH:mm:ss');
        var datePreview = new moment(obj.datePreview, 'YYYY-MM-DDTHH:mm:ss');
        var duration = moment.duration(dateEnd.diff(datePreview));
        var periodStart = moment.duration(dateStart.diff(new moment()));
        var color = "#e44a00";
        if(duration.as('days')<=0){
            color = "#88D8B0";
        }
        if(periodStart.as('days')<0){
            tasksJson.push({
                "label":"Atual",
                "processid": obj.id+"",
                "start": moment(obj.dateStart, 'YYYY-MM-DDTHH:mm:ss').format("DD/MM/YYYY"),
                "end": moment(obj.dateEnd, 'YYYY-MM-DDTHH:mm:ss').format("DD/MM/YYYY"),
                "id": obj.id+"1",
                "color": color,
                "alpha": "100",
                "height": "27%",
                "toppadding": "65%"
            });
        }

        headers.push({
            "label": obj.taskName,
            "id": ""+obj.id
        })
    });
    var dataSource = {
        "chart": {
            "dateformat": "dd/mm/yyyy",
            "caption": "Planejamento Projeto",
            "plottooltext": "<b>$label</b><br>Start: <b>$start</b><br>End: <b>$end</b>",
            "theme": "fusion"
        },
        "legend": {
            "item": [
                {
                    "label": "Planejado",
                    "color": "#0000AA"
                },
                {
                    "label": "Atual",
                    "color": "#88D8B0"
                },
                {
                    "label": "Atrasado",
                    "color": "#e44a00"
                }
            ]
        },
        "tasks": {
            "task": tasksJson
        },
        "processes": {
            "headertext": "Task",
            "align": "left",
            "process": headers
        },
        "categories": [
            {
                "category": [
                    {
                        "start": "4/2/2019",
                        "end": "30/2/2019",
                        "label": "Fevereiro"
                    },
                    {
                        "start": "1/4/2019",
                        "end": "30/4/2019",
                        "label": "Abril"
                    },
                    {
                        "start": "1/5/2019",
                        "end": "31/5/2019",
                        "label": "Maio"
                    },
                    {
                        "start": "1/6/2019",
                        "end": "30/6/2019",
                        "label": "Junho"
                    }
                ]
            },
            {
                "category": [
                    {
                        "start": "4/2/2019",
                        "end": "10/2/2019",
                        "label": "Sem 1"
                    },
                    {
                        "start": "10/2/2019",
                        "end": "17/2/2019",
                        "label": "Sem 2"
                    },
                    {
                        "start": "18/2/2019",
                        "end": "24/2/2019",
                        "label": "Sem 3"
                    },
                    {
                        "start": "25/2/2019",
                        "end": "02/3/2019",
                        "label": "Sem 4"
                    },
                    {
                        "start": "4/3/2019",
                        "end": "10/3/2019",
                        "label": "Sem 5"
                    },
                    {
                        "start": "11/3/2019",
                        "end": "17/3/2019",
                        "label": "Sem 6"
                    },
                    {
                        "start": "18/3/2019",
                        "end": "24/3/2019",
                        "label": "Sem 7"
                    },
                    {
                        "start": "19/3/2019",
                        "end": "24/3/2019",
                        "label": "Sem 8"
                    },
                    {
                        "start": "25/3/2019",
                        "end": "31/3/2019",
                        "label": "Sem 9"
                    },
                    {
                        "start": "1/4/2019",
                        "end": "7/4/2019",
                        "label": "Sem 10"
                    },
                    {
                        "start": "8/4/2019",
                        "end": "14/4/2019",
                        "label": "Sem 11"
                    },
                    {
                        "start": "15/4/2019",
                        "end": "21/4/2019",
                        "label": "Sem 12"
                    },
                    {
                        "start": "22/4/2019",
                        "end": "28/4/2019",
                        "label": "Sem 13"
                    },
                    {
                        "start": "29/4/2019",
                        "end": "5/5/2019",
                        "label": "Sem 14"
                    },
                    {
                        "start": "6/5/2019",
                        "end": "12/5/2019",
                        "label": "Sem 15"
                    },
                    {
                        "start": "13/5/2019",
                        "end": "19/5/2019",
                        "label": "Sem 16"
                    },
                    {
                        "start": "20/5/2019",
                        "end": "26/5/2019",
                        "label": "Sem 17"
                    },
                    {
                        "start": "27/5/2019",
                        "end": "2/6/2019",
                        "label": "Sem 18"
                    },
                    {
                        "start": "3/6/2019",
                        "end": "9/6/2019",
                        "label": "Sem 19"
                    },
                    {
                        "start": "10/6/2019",
                        "end": "16/6/2019",
                        "label": "Sem 20"
                    },
                    {
                        "start": "17/6/2019",
                        "end": "23/6/2019",
                        "label": "Sem 21"
                    },
                    {
                        "start": "24/6/2019",
                        "end": "30/6/2019",
                        "label": "Sem 22"
                    }
                ]
            }
        ]
    };

    console.log(dataSource);
    FusionCharts.ready(function() {
        var myChart = new FusionCharts({
            type: "gantt",
            renderAt: "chart-container",
            width: "100%",
            height: "600",
            dataFormat: "json",
            dataSource:dataSource
        }).render();
    });
}

$(document).ready(function () {
    getJson('/api/tarefas', function (response) {
        loadFusionCharts(response);
    });
});
