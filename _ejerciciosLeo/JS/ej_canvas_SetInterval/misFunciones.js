/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

x = 0;
dx = 2;

function animarAuto() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    console.log(posX, posY);
    canvas.width = canvas.width;
    var img = new Image();
    img.src = "../../../Ejercicios-JavaScript/images/auto.png";


    img.onload = function () {
        ctx.drawImage(img, x, 100)
    }
    if(x>canvas.width)
    {
        x=0;

    }
    x += dx;
}
