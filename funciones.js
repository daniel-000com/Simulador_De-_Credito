function calcularDisponible(ingresos,egresos){
let valorDisponible=0
valorDisponible=ingresos-egresos;
return valorDisponible <0 ? 0 :valorDisponible;
}

function calcularCapacidadPago(valorDisponible){
let resultado;
resultado = valorDisponible /2;
return resultado;
}

function calcularInteresSimple(monto, tasa, plazoAnios) {
let interes;
interes = plazoAnios * monto * (tasa / 100);
return interes;
}

function calcularTotalPagar(monto, interes) {
let total;
total = monto + interes + 100;
return total;
}

function calcularCuotaMensual(total, plazoAnios) {
let cuota;
let meses = plazoAnios * 12;
cuota = total / meses;
return cuota;
}

// ── VALIDACIONES ──────────────────────────────────────────────

function mostrarError(idCampo, mensaje) {
let errorSpan = document.getElementById("err_" + idCampo);
if (errorSpan) {
errorSpan.textContent = mensaje;
errorSpan.style.display = mensaje ? "block" : "none";
}
let input = document.getElementById(idCampo);
if (input) {
input.classList.toggle("input-error", !!mensaje);
input.classList.toggle("input-ok", !mensaje);
}
}

function limpiarErrores() {
const campos = ["txtIngresos", "txtEgresos", "txtMonto", "txtPlazo", "txtTasaInteres"];
campos.forEach(id => mostrarError(id, ""));
}

function validarFormulario(ingresos, egresos, monto, plazo, tasa) {
let valido = true;


if (isNaN(ingresos) || document.getElementById("txtIngresos").value.trim() === "") {
    mostrarError("txtIngresos", "⚠ Ingresa un valor numérico."); valido = false;
} else if (ingresos <= 0) {
    mostrarError("txtIngresos", "⚠ Los ingresos deben ser mayores a 0."); valido = false;
} else if (ingresos > 1000000) {
    mostrarError("txtIngresos", "⚠ Los ingresos no pueden superar $1,000,000."); valido = false;
} else { mostrarError("txtIngresos", ""); }

if (isNaN(egresos) || document.getElementById("txtEgresos").value.trim() === "") {
    mostrarError("txtEgresos", "⚠ Ingresa un valor numérico."); valido = false;
} else if (egresos < 0) {
    mostrarError("txtEgresos", "⚠ Los egresos no pueden ser negativos."); valido = false;
} else if (egresos >= ingresos && !isNaN(ingresos) && ingresos > 0) {
    mostrarError("txtEgresos", "⚠ Los egresos deben ser menores a los ingresos."); valido = false;
} else { mostrarError("txtEgresos", ""); }

if (isNaN(monto) || document.getElementById("txtMonto").value.trim() === "") {
    mostrarError("txtMonto", "⚠ Ingresa un valor numérico."); valido = false;
} else if (monto < 100) {
    mostrarError("txtMonto", "⚠ El monto mínimo es $100."); valido = false;
} else if (monto > 100000) {
    mostrarError("txtMonto", "⚠ El monto máximo es $100,000."); valido = false;
} else { mostrarError("txtMonto", ""); }

if (isNaN(plazo) || document.getElementById("txtPlazo").value.trim() === "") {
    mostrarError("txtPlazo", "⚠ Ingresa un valor numérico."); valido = false;
} else if (plazo < 1) {
    mostrarError("txtPlazo", "⚠ El plazo mínimo es 1 año."); valido = false;
} else if (plazo > 30) {
    mostrarError("txtPlazo", "⚠ El plazo máximo es 30 años."); valido = false;
} else { mostrarError("txtPlazo", ""); }

if (isNaN(tasa) || document.getElementById("txtTasaInteres").value.trim() === "") {
    mostrarError("txtTasaInteres", "⚠ Ingresa un valor numérico."); valido = false;
} else if (tasa < 1) {
    mostrarError("txtTasaInteres", "⚠ La tasa mínima es 1%."); valido = false;
} else if (tasa > 100) {
    mostrarError("txtTasaInteres", "⚠ La tasa máxima es 100%."); valido = false;
} else { mostrarError("txtTasaInteres", ""); }

return valido;


}