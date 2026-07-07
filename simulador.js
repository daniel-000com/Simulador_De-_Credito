function recupearTexto(idComponente){
    let componente = document.getElementById(idComponente);
    let valor = componente.value;
    return valor;   
}
function recuperarFloat(idComponente){
    let valorTexto = recupearTexto(idComponente);
    let valorFloat = parseFloat(valorTexto);
    return valorFloat;
}
function calcular(){
    let ingresosFloat=recuperarFloat("txtIngresos");
    let egresosFloat=recuperarFloat("txtEgresos");
    let monto = recuperarFloat("txtMonto");
    let plazoAnios = parseInt(document.getElementById("txtPlazo").value);
    let tasaInteres = parseFloat(document.getElementById("txtTasaInteres").value);

    if (!validarFormulario(ingresosFloat, egresosFloat, monto, plazoAnios, tasaInteres)) {
    return;
}


    saldoDisponible=calcularDisponible(ingresosFloat,egresosFloat);
    total=document.getElementById("spnDisponible");
    total.innerText="$ " + saldoDisponible; 

    let capacidadDePago=calcularCapacidadPago(saldoDisponible);
    let mostrarCapacidadPago=document.getElementById("spnCapacidadPago");
    mostrarCapacidadPago.innerText="$ " + capacidadDePago;

    let interes = calcularInteresSimple(monto, tasaInteres, plazoAnios);
    document.getElementById("spnInteresPagar").innerText = "$ " + interes;

    let totalPagar = calcularTotalPagar(monto, interes);
    document.getElementById("spnTotalPrestamo").innerText = "$ " + totalPagar;

    let cuotaMensual = calcularCuotaMensual(totalPagar, plazoAnios);
    document.getElementById("spnCuotaMensual").innerText = "$ " + cuotaMensual.toFixed(2);

// Estado de crédito
    let estadoEl = document.getElementById("spnEstadoCredito");
      if (cuotaMensual <= capacidadDePago) {
        estadoEl.innerText = "✅ APROBADO";
    
     } else {
        estadoEl.innerText = "❌ RECHAZADO"; 
   }
}

function reiniciar() {
const campos = ["txtIngresos", "txtEgresos", "txtMonto", "txtPlazo", "txtTasaInteres"];
campos.forEach(id => {
document.getElementById(id).value = "";
document.getElementById(id).classList.remove("input-error", "input-ok");
});


const spans = ["spnDisponible","spnCapacidadPago","spnInteresPagar","spnTotalPrestamo","spnCuotaMensual"];
spans.forEach(id => document.getElementById(id).innerText = "");

let estadoEl = document.getElementById("spnEstadoCredito");
estadoEl.innerText = "ANALIZANDO...";
estadoEl.className = "";

}