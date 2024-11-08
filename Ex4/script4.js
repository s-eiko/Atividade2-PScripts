document.getElementById("btCalcular").addEventListener('click', calcular);

function calcular (event) {
    event.preventDefault(); 

    document.getElementById("erroTensão").innerHTML = "";
    document.getElementById("erroCorrente").innerHTML = "";

    var tensao = parseFloat(document.getElementById("vTensão").value);
    var corrente = parseFloat(document.getElementById("vCorrente").value);

    if (document.getElementById("vTensão").value === "") {
        document.getElementById("erroTensão").innerHTML = "Campo obrigatório";
    }
    else if (document.getElementById("vCorrente").value === "") {
        document.getElementById("erroCorrente").innerHTML = "Campo obrigatório";
    }
    else {
        var resis = tensao / corrente;
        document.getElementById("res").innerHTML = "<p>A resistência elétrica é de: " + resis.toFixed(2) + "Ω. </p>";
    }
}