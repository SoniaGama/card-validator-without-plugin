const validateAll = e => {
    e.preventDefault();
    const form = document.querySelector("form");
    const formArray = Array.from(form);


    // formArray[1].value

    if (validateCard(formArray[1].value)) {
        // console.log('tarj valida');
        // document.getElementById('pay').disabled = false;
    } else {
        // console.log('tarj invalida');

    }

    formArray.map(element => element.value = ''); // limpiamos el formulario

    // validateName(formArray[0].value)
    // validateCard(formArray[1].value);
    // validateDateExpiration(formArray[2].value);
    // validateCvv(formArray[3].value);

}

const validateCard = (numberCard) => {

    // 4183394090189505  
    // 5059810904933814
    const cardArray = Array.from(numberCard).reverse();
    let newCardArray = cardArray.map((element, index) => {

        if (index % 2 !== 0) {
            let numberTwo = element * 2;
            let numberTwo10;
            if (numberTwo >= 10) {
                numberTwo10 = numberTwo.toString().split('');
                numberTwo10 = numberTwo - 10 + 1;
                return numberTwo10;
                // console.log(numberTwo10);                
            }else{
                return numberTwo;
                // console.log(numberTwo);                
              
            }
            // console.log(numberTwo10, numberTwo);

            return numberTwo, numberTwo10;
        } else {
            // console.log(element);            
            return parseInt(element);
        }
    });
    // console.log(newCardArray);
    // return false;

    // return newCardArray

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