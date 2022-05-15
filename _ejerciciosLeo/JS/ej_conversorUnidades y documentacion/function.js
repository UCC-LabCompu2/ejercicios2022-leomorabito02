/**
 * conversion de unidades de metros, yardas, pies y pulgadas
 * @method cambiar_unidades
 * @param {string} id - El id de los metros, pies o pulgadas
 * @param  {number} valor - El valor de los inputs de metros, yardas, pies o pulgadas
 */
function cambiar_unidades(id, valor) {
    if (isNaN(valor)) {
        alert("Se ingresó un valor invalido"+id);
        document.Unidades.unid_metro.value = "";
        document.Unidades.unid_pulgada.value = "";
        document.Unidades.unid_pie.value = "";
        document.Unidades.unid_yarda.value = "";
    } else if (id == "metro") {
        document.Unidades.unid_pulgada.value = 39.3701 * valor;
        document.Unidades.unid_pie.value = 3.28084 * valor;
        document.Unidades.unid_yarda.value = 1.03961 * valor;
    } else if (id == "pulgada") {
        document.Unidades.unid_metro.value = 0.0254 * valor;
        document.Unidades.unid_pie.value = 0.0833333 * valor;
        document.Unidades.unid_yarda.value = 0.0277778 * valor;
    } else if (id == "yarda") {
        document.Unidades.unid_metro.value = 0.9144 * valor;
        document.Unidades.unid_pulgada.value = 36 * valor;
        document.Unidades.unid_pie.value = 3 * valor;
    }
}