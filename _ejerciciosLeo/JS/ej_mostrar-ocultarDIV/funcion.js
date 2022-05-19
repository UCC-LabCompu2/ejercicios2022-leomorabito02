function mostrar_ocultar(valMo)
{
    if(valMo == "val_mostrar")
    {
        document.getElementById("divMo").style.display="block";
    }
    else if (valMo == "val_ocultar")
    {
        document.getElementById("divMo").style.display="none";
    }
}