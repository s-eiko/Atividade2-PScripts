$(document).ready(function () {
    function pegarImagem () {
        $.ajax({
            url: 'https://dog.ceo/api/breeds/image/random',
            method: 'GET',
            success: function(data) {
                $('#imgCachorro').attr('src', data.message);
                $('#imgCachorro').fadeIn(10);
                $('#btEsconder').show();
            }
        });
    };

    $("#btMostrar").click(function () {
        pegarImagem();
        $("#btMostrar").hide();
    });

    $("#btEsconder").click(function () {
        $("#btMostrar").show();
        $("#btEsconder").hide();
        $("#imgCachorro").fadeOut(10);
    });
});