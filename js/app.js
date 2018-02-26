const extractData = e => {
    e.preventDefault(); //prevenimos el renicio de la página  
    const formArray = Array.from(form); // convertimos nuestro form a un array

    // extraemos los valores del formulario

    // const name = formArray[0].value;
    const card = formArray[1].value; //número de tarjeta
    // const dateExpiration = formArray[2].value;
    // const cvv = formArray[3].value;

    //ejecutamos la función que evalua el true de validateCard y añade las clases success y error según el caso
    inputClass(card);
    formArray.map(element => element.value = ''); // limpiamos el formulario
}

const inputClass = (card) => {
    //traemos nuestros elementos input y los recorremos
    document.querySelectorAll('input').forEach(elements => {
        if (validateCard(card)) {
            //si el número de la tarjeta regresa true en la función validateCard agrega la clase success
            console.log('tarjeta valida');
            elements.classList.add('success');
        } else {
            //si el número de la tarjeta regresa false en la función validateCard agrega la clase error
            console.log('tarjeta invalida');
            elements.classList.add('error');
        }
    });
};

//Validamos tarjeta con el algoritmo de Luhn
const validateCard = (card) => {
    //convertimos el numero de tarjeta a un array y lo ordenamos en orden inverso
    const cardArray = Array.from(card).reverse(); //
    // usamos map para recorrerlo y aplicar los cambios
    const newCardArray = cardArray.map((element, index) => {
        if (index % 2 !== 0) { // seleccionamos las posiciones pares
            let numberTwo = element * 2; // multiplicamos *2 los numeros en posiciones pares
            let numberTwo10; //declaramos la varieble donde se guardaran los resultados de la multiplicación >= 10
            if (numberTwo >= 10) {
                numberTwo10 = numberTwo - 10 + 1; // se suman sus dos digitos 
                return numberTwo10; //regresamos el número mayor a 10 ya con un solo digito
            } else {
                return numberTwo; //regresamos los numeros que multiplicados *2 son solo son de un digito
            }
        } else {
            // Regresamos los numeros en posiciones impares y los convertimos a typeof number
            return parseInt(element);
        }
    }).reduce((previous, current) => previous + current); // sumamos todos los elementos de nuestro array con reduce
    if (newCardArray % 10 === 0) { //si el residuo de dividirlo entre 10 en = 0 regresamos true
        return true;
    } else { //en caso distinto regresamos false
        return false;
    }
}

const form = document.querySelector("form"); // traemos nuestro formulario
form.addEventListener('submit', extractData); //  aregamos el evento submit que ejecuta la función extractData
