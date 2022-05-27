function dibujar(MouseEvent) {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var posX = MouseEvent.clientX;
    var posY = MouseEvent.clientY;
    console.log(posX, posY);
    ctx.fillRect(posX, posY, 5, 5);
    ctx.fill();
}