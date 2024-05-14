document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculosForm").addEventListener("submit", function(event) {
        event.preventDefault();

        if (!this.checkValidity()) {
            alert("Por favor, introduce un número válido para el radio.");
            return;
        }

        var radio = parseFloat(document.getElementById("radio").value);
        var resultados = calcularResultados(radio);
        mostrarResultados(resultados);
    });
});

function calcularResultados(radio) {
    var resultados = {
        circunferencia: 2 * Math.PI * radio,
        areaCirculo: Math.PI * radio ** 2,
        volumenEsfera: (4 / 3) * Math.PI * radio ** 3
    };
    return resultados;
}

function mostrarResultados(resultados) {
    var listaResultados = document.getElementById("resultados");

    // Eliminar resultados anteriores si los hay
    while (listaResultados.firstChild) {
        listaResultados.removeChild(listaResultados.firstChild);
    }

    for (var propiedad in resultados) {
        var valor = resultados[propiedad];
        var itemLista = document.createElement("li");
        itemLista.textContent = `${propiedad}: ${valor.toFixed(2)}`;
        listaResultados.appendChild(itemLista);
    }
}