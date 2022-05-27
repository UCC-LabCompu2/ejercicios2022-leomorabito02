/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
function dibujar() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
//rectangulo
    var yMax = canvas.height;
    var margen = 5;
    ctx.fillStyle = "#333899";
    ctx.fillRect(0+margen, yMax-40-margen, 40, 40);

    //circulo
    var xMax = canvas.width;
    ctx.arc(xMax/2, yMax/2, 20, 0, 2*Math.PI);
    ctx.stroke();//dibujar
    ctx.fillStyle = "#a81818";//antes del fill para  cambiar de color
    ctx.fill();//pintar dentro
}