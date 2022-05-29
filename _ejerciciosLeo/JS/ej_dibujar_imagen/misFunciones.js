/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function dibujar_imagen(posX, posY) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    console.log(posX, posY);
    var img = new Image();
    img.src = "../../../Ejercicios-JavaScript/images/auto.png";

    canvas.width=canvas.width;
    img.onload=function()
    {
        ctx.drawImage(img, posX, posY);
    }
}
