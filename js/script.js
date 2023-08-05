window.onload = iniciar;

function iniciar() {
    var btnCalcular = document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click", clickBtnCalcular);
}

function clickBtnCalcular() {
    var txtPeso = document.getElementById("txtPeso");
    var peso = txtPeso.value

    var txtAltura = document.getElementById("txtAltura");
    var altura = txtAltura.value

    var imc = peso / (altura * altura);
    alert("Su indice de masa corporal es: " + Math.round(imc) + ".");
}