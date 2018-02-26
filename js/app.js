const validateAll = e => {
    e.preventDefault();
    const form = document.querySelector("form");
    const formArray = Array.from(form); // convertimos nuestro form a un array

    // extraemos los valores del formulario
    const name = formArray[0].value;
    const card = formArray[1].value;
    const dateExpiration = formArray[2].value;
    const cvv = formArray[3].value;

    // llamamos a la función de validar tarjeta y le pasamos de parametro el numero de tarjeta
    if (validateCard(card)) {
        console.log('tarj valida');        
    } else {
        console.log('tarj invalida');
        
    }

    formArray.map(element => element.value = ''); // limpiamos el formulario


}

const validateCard = (numberCard) => {
    const cardArray = Array.from(numberCard).reverse(); //
    let newCardArray = cardArray.map((element, index) => {
        if (index % 2 !== 0) {
            let numberTwo = element * 2;
            let numberTwo10;
            if (numberTwo >= 10) {
                numberTwo10 = numberTwo.toString().split('');
                numberTwo10 = numberTwo - 10 + 1;
                return numberTwo10;
            } else {
                return numberTwo;
            }
        } else {
            return parseInt(element);
        }
    }).reduce((previous, current) => previous + current);
    console.log(newCardArray);
    if (newCardArray % 10 === 0) {
        return true;
    } else {
        return false;
    }
}


// const disabledButton = () => {
//     if()
// }





// const validateName = (name) => {
//     // if (typeof name === 'string'||) {
//     //     return true;
//     // }




// No string vacio
// SOLO Sea string
// Cada palabra maximo tiene 30 caracteres
// mayusculas y minusculas
// MINIMO 2 palabras
// No empieza con espacios




// }


// const validateDateExpiration = (expiration) => {
//     //hacer el borde de los dos select rojo en caso de no tener seleccion   
//     // solo numeros    
//     // retorna false

//     // debe retornar true
// }

// const validateCvv = (cvv) => {
//     //    tipo de dato
//     //    (no string ni boolean ni nada)-- convertir a numero
//     // los numeros sean positivos(que numeros son positivos de 3 digitos¿)
//     //que no acepte simbolos
// }





const form = document.querySelector("form");
form.addEventListener('submit', validateAll);


function validarSiNumero(numerTarjeta) {
    if (!/^([0-9])*$/.test(numerTarjeta));
}


// // evento keyup que llama a la funcion que revisa el tipo de dato