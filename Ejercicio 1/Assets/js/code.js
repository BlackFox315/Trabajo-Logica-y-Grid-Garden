let n = parseInt(prompt("Ingrese un número entero positivo: "));
let sumatoria = 0;

for (let i = 1; i <= n; i++) {
    sumatoria += i;
}
    
console.log("La sumatoria de los números del 1 al " + n + " es " + sumatoria);
