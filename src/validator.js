const validator = {

  isValid: function (numeroTarjeta) {


    //console.log(numeroTarjeta);


    const tarjetaArray = numeroTarjeta.split("");


    tarjetaArray.reverse();


    //console.log(tarjetaArray);


    let sumaTotal = 0;


    for (let index = 0; index < tarjetaArray.length; index++) {


      if (index % 2 !== 0) {


        //console.log("index" + index + " es impar");


        //console.log("valor inicial" + tarjetaArray [index]);


        tarjetaArray[index] = tarjetaArray[index] * 2;


        //console.log("valor duplicado" + tarjetaArray[index]);


        if (tarjetaArray[index] >= 10) {


          const mayorAdiez = String(tarjetaArray[index]).split("");


          tarjetaArray[index] =
            parseInt(mayorAdiez[0]) + parseInt(mayorAdiez[1]);


          //console.log("suma de los digitos " + tarjetaArray[index]);
        }
      }

      sumaTotal = sumaTotal + parseInt(tarjetaArray[index]);
    }

    //console.log(sumaTotal);


    let resultado;


    if (sumaTotal % 10 === 0) {

      //console.log("Tarjeta válida");
      resultado = true;
    } else {

      //console.log("Tarjeta inválida");
      resultado = false;
    }

    return resultado;
  },




  //definir metodo maskify
  maskify: function (numeroTarjeta) {

    // se define la variable tarjetaArray como un array
    const tarjetaArray = numeroTarjeta.split("");

    // se condiciona, si el length del array es mayor de 4 dígitos, se sustituyen los números por # exceptuando los últimos 4 números
    if (tarjetaArray.length > 4) {
      for (let index = 0; index < tarjetaArray.length - 4; index++) {
        tarjetaArray[index] = "#"
        //console.log(tarjetaArray);
      }

      // si es el lenght es menor a 4 no se sustituyen
    } else {
      //console.log(tarjetaArray);
    }
    // se presentan los numeros de array a string, definiendo una variable numerooculto y utilizando el .Join 
    const numerooculto = tarjetaArray.join("");
    return numerooculto;
  }


};


export default validator;

