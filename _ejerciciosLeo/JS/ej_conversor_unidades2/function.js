/**
 * conversion de unidades de metros, yardas, pies y pulgadas
 * @method cambiar_unidades
 * @param {string} id - El id de los metros, pies o pulgadas
 * @param  {number} valor - El valor de los inputs de metros, yardas, pies o pulgadas
 */
function cambiar_unidades(id, valor) {
    var metro, pulgada, pie, yarda;
    if (valor.includes(",")) {
        valor = valor.replace(",", ".");
    }
    if (isNaN(valor)) {
        alert("Se ingresó un valor invalido" + id);
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";
    } else if (id == "metro") {
        metro = valor;
        pulgada = 39.3701 * valor;
        pie = 3.28084 * valor;
        yarda = 1.03961 * valor;
    } else if (id == "pulgada") {
        pulgada = valor;
        metro = 0.0254 * valor;
        pie = 0.0833333 * valor;
        yarda = 0.0277778 * valor;
    } else if (id == "yarda") {
        yarda = valor;
        metro = 0.9144 * valor;
        pulgada = 36 * valor;
        pie = 3 * valor;
    }
    document.Unidades.unid_metro.value = Math.round(metro * 100) / 100;
    document.Unidades.unid_pulgada.value = Math.round(pulgada * 100) / 100;
    document.Unidades.unid_pie.value = Math.round(pie * 100) / 100;
    document.Unidades.unid_yarda.value = Math.round(yarda * 100) / 100;
}
