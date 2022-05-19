/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
function guardarLocalStorage() {
    let distancia, unidad;
    distancia = document.getElementById('distancia').value;
    unidad = document.getElementsByName('unidades')[0].value;
    localStorage.setItem("distanciaLS", distancia);
    localStorage.setItem("unidadesLS", unidad);
    window.open('segundaWeb.html');
}

function cargarLocalStorage() {
    let cant, unid;
    cant = localStorage.getItem("distanciaLS");
    unid = localStorage.getItem("unidadesLS");
    document.getElementById("dist").value = cant + " " + unid;
}