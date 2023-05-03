let promedio = parseFloat(prompt("Ingrese su promedio:"));

if (!isNaN(promedio)) {
    let valorMatricula = 1000000;

    if (promedio < 3) {
        console.log("Su valor de matrícula es: " + valorMatricula);
    } else if (promedio >= 3 && promedio <= 4) {
        valorMatricula -= valorMatricula * 0.05;
        console.log("Su valor de matrícula es: " + valorMatricula);
    } else if (promedio > 4) {
        valorMatricula /= 2;
        console.log("Su valor de matrícula es: " + valorMatricula);
    } else {
        console.log("El promedio ingresado no es válido.");
    }
} else {
    console.log("El valor ingresado no es un número.");
}
