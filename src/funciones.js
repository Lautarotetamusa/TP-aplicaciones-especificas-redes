function verDropdown(){
  var dropdown = document.getElementById("dropdown");
  var botonera = document.getElementById("botonera_chica");

  dropdown.style.opacity = "1";
  botonera.style.height = "300px";

  botonera.addEventListener("mouseleave", ocultarDropDown);
}

function ocultarDropDown(){
  var dropdown = document.getElementById("dropdown");
  var botonera = document.getElementById("botonera_chica");

  botonera.style.height = "inherit";

  dropdown.style.opacity = "0";
}

function resize(){
  if(window.innerWidth > 720){ //Desktop
    botonera_grande();
  }
  else{
    botonera_chica();

    var boton = document.getElementById("boton");

    boton.addEventListener("mouseenter", verDropdown);
  }
}

function botonera_chica(){
  var botoneraG = document.getElementById("botonera_grande");
  var botoneraC = document.getElementById("botonera_chica");


  botoneraG.style.display = "none";
  botoneraC.style.display = "inline-block";
}

function botonera_grande(){
  var botoneraG = document.getElementById("botonera_grande");
  var botoneraC = document.getElementById("botonera_chica");


  botoneraG.style.display = "flex";
  botoneraC.style.display = "none";
}
