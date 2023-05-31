//JS para esconder el mesaje que aparecera despues de encriptar un texto
window.onload = esconderMensaje;
function esconderMensaje() {
  document.getElementById("funciones-mensaje").style.display = "none";
}

//JS para validar sin el texto tiene minusculas, acentos o mayusculas
function validar() {
  var texto = document.getElementById("funciones-entrada").value;
  var patron = /[áéíóúÁÉÍÓÚÜüÑñA-Z0-9]/;

  if (
    texto.match(patron) ||
    document.getElementById("funciones-entrada").value == ""
  ) {
    alerta();
    document.getElementById("funciones-entrada").value = "";
    return false;
  }
  document.getElementById("funciones-icono").style.color = "#474747";
  document.getElementById("funciones-letra").style.color = "#474747";
  document.getElementById("funciones-entrada").value = "";
}

function alerta() {
  document.getElementById("funciones-icono").style.color = "red";
  document.getElementById("funciones-letra").style.color = "red";
  document.getElementById("funciones-imagen").style.display = "block";
  document.getElementById("funciones-mensaje").style.display = "none";
}

function mostrar() {
  document.getElementById("funciones-imagen").style.display = "none";
  document.getElementById("funciones-mensaje").style.display = "block";
}

//JS para encriptar un mensaje
function encriptar() {
  var texto = document.getElementById("funciones-entrada").value;
  var txtEncriptado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  document.getElementById("salida").value = txtEncriptado;
}

//JS para desencriptar el mensaje

function desencriptar() {
  var texto = document.getElementById("funciones-entrada").value;
  var txtDesencriptado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  document.getElementById("salida").value = txtDesencriptado;
}

//JS pra copiar el texto
function copiar() {
  var texto = document.getElementById("salida");
  texto.select();
  document.execCommand("copy");
  document.getElementById("funciones-imagen").style.display = "block";
  document.getElementById("funciones-mensaje").style.display = "none";
}
