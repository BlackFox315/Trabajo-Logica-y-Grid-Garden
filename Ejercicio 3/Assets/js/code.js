let edad = parseInt(prompt("Ingresa tu edad"))
let genero = prompt("¿Eres Hombre o Mujer?")

if (edad <= 10) {
    if (genero == "Hombre") {
        console.log("Reclama un jugo y una pizza tres carnes")
        alert("Reclama un jugo y una pizza tres carnes")
    }
    else if (genero == "Mujer") {
        console.log("Reclama un jugo y una pizza Hawaiana")
        alert("Reclama un jugo y una pizza Hawaiana")
    }
    else{
        console.error ("¿Colocaste bien tu genero?. Recuerda que es con la inicial en Mayúscula")
        alert ("¿Colocaste bien tu genero?. Recuerda que es con la inicial en Mayúscula")
    }
}
else if (11 < edad && edad < 17) {
    console.error ("No hay nada pa sumercé")
    alert ("No hay nada pa sumercé")
}
else if (edad >= 18 ) {
    if (genero == "Hombre") {
        console.log("Reclama una cerveza y una pizza tres carnes")
        alert("Reclama una cerveza y una pizza tres carnes")
    }
    else if (genero == "Mujer") {
        console.log("Reclama un cerveza y una pizza Hawaiana")
        alert("Reclama un cerveza y una pizza Hawaiana")
    }
    else {
        console.error ("¿Colocaste bien tu genero?. Recuerda que es con la inicial en Mayúscula")
        alert ("¿Colocaste bien tu genero?. Recuerda que es con la inicial en Mayúscula")
    }
}
else {
    console.error ("No hay nada pa sumercé")
    alert ("No hay nada pa sumercé")
}
