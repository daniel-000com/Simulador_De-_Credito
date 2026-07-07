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
