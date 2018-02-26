// var cardNumber = prompt("¿Cuál es el número de tu tarjeta?");

// // console.log(cardArray);

// function isValidCard() {
//   var cardArray = [];
//   if (cardNumber == 0 || cardNumber.length !== 16) {
//     alert("no válido");
//   } else {
//     for (var i = 0; i < cardNumber.length; i++) {
//       var numbers = parseInt(cardNumber[i]);
//       // console.log(numbers);
//       cardArray.push(numbers);
//     }
//     cardArray.reverse();
//     // console.log(cardArray);
//     for (var i = 0; i < cardArray.length; i++) {
//       var position = i;
//       // console.log(position);
//       if (position % 2 === 0) {
//         console.log(cardArray[i]);
//         // var pair = cardArray[i] * 2
//         // console.log(pair);
//       }
//     }


//     // cardArray = Array.from(numbers);
//     // console.log(cardArray);
//   }
// }

// isValidCard();


// const form = document.querySelector("form");

// form.addEventListener("submit", e => {
//     e.preventDefault();
//     if (validateCardDetails(form)) {
//         console.log("datos válido... enviar...");
//     } else {
//         console.log("datos inválidos");
//     }
// });

// .addEventListener("submit", validateAll);


const validateAll = e => {
    e.preventDefault();
    const formArray = Array.from(form);
    console.log(formArray);

    // if (validateName(formArray[0].value) && validateCard(formArray[1].value) && validateDateExpiration(formArray[2].value) && validateCvv(formArray[3].value)) {
    //    // añadir clase
    // }
    validateName(formArray[0].value);
    // validateCard(formArray[1].value);
    // validateDateExpiration(formArray[2].value);
    // validateCvv(formArray[3].value);
}


function validarSiNumero(numerTarjeta) {
    if (!/^([0-9])*$/.test(numerTarjeta))
        alert("El valor " + numerTarjeta + " no es un número");
}


// evento keyup que llama a la funcion que revisa el tipo de dato 

const disabledButton = () => {

}

const validateName = (name) => {
    // console.log(name);
    // Array.from(name);
    if(typeof name == "string"){

    }

    // solo Sea string
    // Cada palabra maximo tiene 30 caracteres
    // mayusculas y minusculas
    // MINIMO 2 palabras
    // No empieza con espacios

}

const validateCard = (numberCard) => {
    //  ALGORITMO LU
}

const validateDateExpiration = (expiration) => {
    //hacer el borde de los dos select rojo en caso de no tener seleccion   
    // solo numeros    
    // retorna false

    // debe retornar true
}

const validateCvv = (cvv) => {
    //    tipo de dato
    //    (no string ni boolean ni nada)-- convertir a numero
    // los numeros sean positivos(que numeros son positivos de 3 digitos¿)
    //que no acepte simbolos
}



const form = document.querySelector("form")
form.addEventListener("submit", validateAll);





// form.addEventListener("submit", e => {
//     e.preventDefault();
//     if (validateCardDetails(form)) {
//         console.log("datos válido... enviar...");
//     } else {
//         console.log("datos inválidos");
//     }
// });


// function validateCardDetails(element) {
// //    declarar el Array
// // declara variables
// const name = name.value;
// const cvv = name;
// const tdc = name;
// if(validarNAme(name)&&
//     validarCvv(cvv)&&
//     validarTDC(tdc)){
//         returnt true;
//         console.log('Tarjeta Valida')
//     } else{
//         return false;
//         console.log('trjeta invalido')
//     }
// }

// valideName(name){
//     if (nameValido){
//         agrega clase que quieras
//         return true
//     }
// }

//primero todas mis variables globales
// const form = document.querySelector("form");
// console.log(Array.from(form));


//luego todos mis eventos

// form.addEventListener("submit", e =>{
//     e.preventDefault();

// })



//finalmente mis funciones








// validarSiNumero(numerTarjeta)