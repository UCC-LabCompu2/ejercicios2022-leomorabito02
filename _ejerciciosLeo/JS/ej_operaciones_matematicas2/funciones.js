function calcular_suma() {
    var n1, n2;
    n1 = Number(document.getElementsByName("sum_num1")[0].value);
    n2 = Number(document.getElementsByName("sum_num2")[0].value);
    document.getElementsByName("sum_total")[0].innerHTML = n1 + n2;
}

function calcular_resta() {
    var n1, n2;

    n1 = Number(document.getElementsByName("res_num1")[0].value);
    n2 = Number(document.getElementsByName("res_num2")[0].value);
    document.getElementsByName("res_total")[0].innerHTML = n1 - n2;
}

function calcular_multi() {
    var n1, n2;

    n1 = Number(document.getElementsByName("mul_num1")[0].value);
    n2 = Number(document.getElementsByName("mul_num2")[0].value);
    document.getElementsByName("mul_total")[0].innerHTML = n1 * n2;
}

function calcular_div() {

    var n1, n2;

    n1 = Number(document.getElementsByName("div_num1")[0].value);
    n2 = Number(document.getElementsByName("div_num2")[0].value);
    document.getElementsByName("div_total")[0].innerHTML = n1 / n2;
}