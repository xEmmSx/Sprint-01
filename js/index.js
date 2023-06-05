//JS para esconder el mesaje que aparecera despues de encriptar un texto
window.onload = hiddeMessage;
function hiddeMessage() {
  document.getElementById("output-msg").style.display = "none";
}

//JS para validar sin el texto tiene minusculas, acentos o mayusculas
function validar() {
  var texto = document.getElementById("input-text").value;
  var patron = /[áéíóúÁÉÍÓÚÜüÑñA-Z0-9]/;

  if (
    texto.match(patron) ||
    document.getElementById("input-text").value == ""
  ) {
    alerta();
    document.getElementById("input-text").value = "";
    return false;
  }
  document.getElementById("alert-icon").style.color = "#474747";
  document.getElementById("alert-text").style.color = "#474747";
  document.getElementById("input-text").value = "";
}

function alerta() {
  document.getElementById("alert-icon").style.color = "red";
  document.getElementById("alert-text").style.color = "red";
  document.getElementById("output-img").style.display = "block";
  document.getElementById("output-msg").style.display = "none";
}

function mostrar() {
  document.getElementById("output-img").style.display = "none";
  document.getElementById("output-msg").style.display = "block";
}

//JS para encriptar un mensaje
function encriptar() {
  var texto = document.getElementById("input-text").value;
  var txtEncriptado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  document.getElementById("output-text").value = txtEncriptado;
}

//JS para desencriptar el mensaje

function desencriptar() {
  var texto = document.getElementById("input-text").value;
  var txtDesencriptado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  document.getElementById("output-text").value = txtDesencriptado;
}

//JS pra copiar el texto
function copiar() {
  var texto = document.getElementById("output-text");
  texto.select();
  document.execCommand("copy");
  document.getElementById("output-img").style.display = "block";
  document.getElementById("output-msg").style.display = "none";
}
