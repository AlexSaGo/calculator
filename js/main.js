// alert("Bienvenido a mi calculadora, espero que te guste :D!!!!")

// const  calcularRaizCuadrada = () => {
//     var entrada = document.calculator.ans.value;
//     var resultado = Math.sqrt(parseFloat(entrada));
//     document.calculator.ans.value = resultado;
// }

let elevar3 = document.getElementById("elevar3");

elevar3.addEventListener("click", () => {
    var entrada = document.calculator.ans.value;
    var resultado = Math.sqrt(parseFloat(entrada));
    document.calculator.ans.value = resultado;
})

const  ElevarCuadrado = () => {
    var entrada = document.calculator.ans.value;
    var resultado = Math.pow(entrada, 2);
    document.calculator.ans.value = resultado;
}

const  logaritmo = () => {
    var entrada = document.calculator.ans.value;
    var resultado = Math.log(entrada);
    document.calculator.ans.value = resultado;
}

const  tangente = () => {
    var entrada = document.calculator.ans.value;
    var resultado = Math.tan(entrada);
    document.calculator.ans.value = resultado;
}

const  seno = () => {
    var entrada = document.calculator.ans.value;
    var resultado = Math.sin(entrada);
    document.calculator.ans.value = resultado;
}

const  coseno = () => {
    var entrada = document.calculator.ans.value;
    var resultado = Math.cos(entrada);
    document.calculator.ans.value = resultado;
}

const  round = () => {
    var entrada = document.calculator.ans.value;
    var resultado = Math.round(entrada);
    document.calculator.ans.value = resultado;
}
