
let menu = [
    { plato: "Arroz Chino", precio: 25000 },
    { plato: "Malteada", precio: 6000 },
    { plato: "Hamburguesa", precio: 12000 },
    { plato: "Cuy", precio: 180000 },
    { plato: "Pasta", precio: 18600 },
]

function solicitarComida() {
    let peticionPlatoUsuario = document.querySelector(`#platoUsuario`)
    let precioActual = 0
    if (localStorage.getItem("total_cuenta") != null) {
        precioActual = localStorage.getItem("total_cuenta")
    }
    else {
        localStorage.setItem("total_cuenta", precioActual)
    }
    if (peticionPlatoUsuario.value != 'pagar') {
        menu.forEach((opcionMenu) => {
            if (peticionPlatoUsuario.value == opcionMenu.plato) { 
            precioActual = parseInt(precioActual) + opcionMenu.precio
        }}
        )
    }
}