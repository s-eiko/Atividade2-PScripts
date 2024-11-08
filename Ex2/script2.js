document.getElementById('btCalcular').addEventListener('click', calcular);

function calcular() {

    document.getElementById('erroUnit').innerHTML = "";
    document.getElementById('erroDesc').innerHTML = "";
    document.getElementById('erroQnt').innerHTML = "";

    if (document.getElementById('pUnit').value === "") {
        document.getElementById('erroUnit').innerHTML = "Campo obrigatório";
    }
    else if (document.getElementById('desc').value === "") {
        document.getElementById('erroDesc').innerHTML = "Campo obrigatório";
    }
    else if (document.getElementById('qnt').value === "") {
        document.getElementById('erroQnt').innerHTML = "Campo obrigatório";
    }
    else {
        var pUnit = parseFloat(document.getElementById('pUnit').value);
        var desc = parseFloat(document.getElementById('desc').value);
        var qnt = parseInt(document.getElementById('qnt').value);
        var pTotal =  pUnit * qnt * (1 - (desc / 100));
        document.getElementById('res').innerHTML = "<p id='resultado'>O valor total é de: R$" + pTotal.toFixed(2) + "</p>";
    }
}