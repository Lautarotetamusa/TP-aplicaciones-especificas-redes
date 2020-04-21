function verDropdown(){
  var dropdown = document.getElementById("dropdown");
  var botonera = document.getElementById("botonera");

  dropdown.style.opacity = "1";
  botonera.style.height = "300px";

  botonera.addEventListener("mouseleave", ocultarDropDown);
}

function ocultarDropDown(){
  var dropdown = document.getElementById("dropdown");
  var botonera = document.getElementById("botonera");

  botonera.style.height = "inherit";

  dropdown.style.opacity = "0";
}
