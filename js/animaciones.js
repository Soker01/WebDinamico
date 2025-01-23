function escalarCiculo(tamaño) {
    const circulo = document.getElementById("Tamañopizza");

    switch (tamaño) {
        case 'chico':
            circulo.style.width = "100px";
            circulo.style.height = "100px";
            break;
        case 'mediano':
            circulo.style.width = "150px";
            circulo.style.height = "150px";
            break;
        case 'grande':
            circulo.style.width = "200px";
            circulo.style.height = "200px";
            break;
        default:
            console.warn("Tamaño no reconocido");
    }
}

function rotoplas() {
    let pizzas = document.querySelectorAll('.Pizza'); // Selecciona todos los divs con clase Pizza
    pizzas.forEach(function(pizza) {
        pizza.style.transform = "rotate(360deg)";
        setTimeout(function() {
            pizza.style.transform = "rotate(0deg)";
        }, 2000);
    });
}

let animacion = document.querySelector("#animacion");

let activar = false;
let frame = 0;
let intervalo;

function transicion() {
    let imagen = `salto_${(frame % 8) + 1}.jpg`;
    animacion.style.backgroundImage = `url("img/${imagen}")`;
}

animacion.addEventListener("dblclick", function () {
    if (!activar) {
        activar = true;
        intervalo = setInterval(() => {
            transicion();
            frame++;
        }, 200);
    } else {
        activar = false;
        clearInterval(intervalo);
    }
});

// Iniciar con una transición inicial para mostrar la imagen
transicion();
