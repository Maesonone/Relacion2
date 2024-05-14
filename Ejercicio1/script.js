document.addEventListener("DOMContentLoaded", function() {
    cargarOpcionesMeses();
    document.getElementById("dniForm").addEventListener("submit", mostrarLetraDNI);
    document.getElementById("darkMode").addEventListener("click", activarModoOscuro);
    document.getElementById("pastelMode").addEventListener("click", activarModoPastel);
});

function cargarOpcionesMeses() {
    var select = document.getElementById("mes");
    fetch("meses.json")
        .then(response => response.json())
        .then(data => {
            data.español.forEach(function(mes, index) {
                var option = document.createElement("option");
                option.value = index + 1;
                option.textContent = mes;
                select.appendChild(option);
            });
        })
        .catch(error => {
            console.error("Error al obtener el archivo JSON:", error);
        });
}

function mostrarLetraDNI(event) {
    event.preventDefault();

    var dni = document.getElementById("dni").value.trim();

    if (!/^\d{8}$/.test(dni)) {
        alert("Por favor, introduce un número de DNI válido (8 dígitos).");
        return;
    }

    var letra = obtenerLetraDNI(parseInt(dni, 10));
    document.getElementById("resultado").textContent = `La letra del DNI ${dni} es: ${letra}`;
}

function activarModoOscuro() {
    document.body.classList.add("dark-mode");
    document.getElementById("resultado").classList.add("dark-mode-text");
}

function activarModoPastel() {
    document.body.classList.remove("dark-mode");
    document.getElementById("resultado").classList.remove("dark-mode-text");
}

function obtenerLetraDNI(numero) {
    var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    return letras.charAt(numero % 23);
}