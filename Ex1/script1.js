$(document).ready(function () {
    $("#btObter").click(function () {
        $.ajax({
            url: "https://worldtimeapi.org/api/ip",
            success: function(resultado) {
                var agora = new Date(resultado.datetime);
                var formHora = new Intl.NumberFormat('pt-br', {
                    minimumIntegerDigits: 2,
                    minimumFractionDigits: 0
                });
                var data = agora.getDate() + "/" + (agora.getMonth() + 1) + "/" + agora.getFullYear();
                var hora = formHora.format(agora.getHours()) + ":" + formHora.format(agora.getMinutes());
                var dataHoraHTML = "<p> Data: " + data + "<br>Hora: " + hora + "</p>";

                var img = "";
                var horaAtual = agora.getHours();
                if (horaAtual >= 6 && horaAtual < 18) {
                    img = "<img src='https://cdn.icon-icons.com/icons2/1370/PNG/512/if-weather-3-2682848_90785.png'>";
                }
                else {
                    img = "<img src='https://cdn.icon-icons.com/icons2/1678/PNG/512/wondicon-ui-free-sleep_111270.png'>";
                }
                $("#dataHora").html(dataHoraHTML + "<br>" + img);
            },
        });
    });
});