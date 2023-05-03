let numero = parseInt(prompt("Ingrese un número:"));
let total = 0;

if (!isNaN(numero)) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
    total += resultado;
  }
  console.log("El total de la multiplicación es: " + total);
} else {
  console.log("El valor ingresado no es un número.");
}
