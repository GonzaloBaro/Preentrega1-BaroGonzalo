
let tasa = 0
let capital = 0
let cuotas = 0

do{
    tasa= parseFloat(prompt("Ingrese la tasa de interés anual"))
    if (isNaN(tasa)) {
        alert("El valor ingreso no es un número. Por favor, ingrese nuevamente")
    }
}while(isNaN(tasa));

do{
    capital= parseInt(prompt("Ingrese el capital inicial"))
    if (isNaN(capital)) {
        alert("El valor ingreso no es un número. Por favor, ingrese nuevamente")}
}while(isNaN(capital));

do{
    cuotas= parseInt(prompt("Ingrese la cantidad de cuotas deseadas"))
    if (isNaN(cuotas)) {
        alert("El valor ingreso no es un número. Por favor, ingrese nuevamente")}
}while(isNaN(cuotas));


function calculaCuotaMensual (tasa, capital, cuotas)
{
let tasamensual = tasa/100/12

return capital/((1- (Math.pow((1+tasamensual),(-1*cuotas))))/tasamensual)

}

let cuotamensual = calculaCuotaMensual (tasa, capital, cuotas)

alert("Su cuota mensual es de "+cuotamensual)


