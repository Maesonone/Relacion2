document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("dniForm").addEventListener("submit", function(event) {
        event.preventDefault();

        var dni = document.getElementById("dni").value.trim();

        if (!/^\d{8}$/.test(dni)) {
            alert("Por favor, introduce un número de DNI válido (8 dígitos).");
            return;
        }

        var letra = obtenerLetraDNI(parseInt(dni, 10));
        document.getElementById("resultado").textContent = `La letra del DNI ${dni} es: ${letra}`;
    });
});

function obtenerLetraDNI(numero) {
    var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    return letras.charAt(numero % 23);
}