import validator from './validator.js';


const donarboton = document.getElementById("donar");

//const verificaBtn = document.getElementById("verificacion");

const numeroTarjeta = document.getElementById("numerotarjeta");

//const fechaVenc = document.getElementById("fechaVenc");









donarboton.addEventListener("click", function () {
  const cardnumber = numeroTarjeta.value;
  const val = validator.isValid(cardnumber);
  const mask = validator.maskify(cardnumber);



  if (val === true) {
    alert("Su tarjeta n° " + mask + " es válida :) ¡GRACIAS POR SU APORTE ES MUY VALIOSO!");
  }

  else {
    alert("Su tarjeta n° " + mask + " no es válida :( ¡Inténtelo nuevamente!");
  }
});


