let textInput = document.querySelector("#input-texto-cripto");
let outInput = document.querySelector("#output");

function criptografar() {
    let texto = textInput.value;

    let resultCripto = texto.replace(/e/g, "k").replace(/i/g, "hy").replace(/a/g, "q")
        .replace(/o/g, "ober").replace(/u/g, "z");

    document.getElementById('output').innerHTML =
        '<textarea readonly id="input-texto-cripto">' + resultCripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar() {
    let texto = textInput.value;

    let resultDescripto = texto.replace(/k/g, "e").replace(/hy/g, "i").replace(/q/g, "a")
        .replace(/ober/g, "o").replace(/z/g, "u");

    document.getElementById('output').innerHTML =
        '<textarea readonly id="input-texto-cripto">' + resultDescripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    let textoCop = document.getElementById('input-texto-cripto');

    textoCop.select();
    document.execCommand('copy');
    alert("Texto Copiado");
}