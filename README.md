#Validación de formulario para una tarjeta de crédito

**Validamos que el campo del nombre, CVV, fecha de vencimiento y numero de tarjeta no este vacio y que conicida con el formato que se necesita con HTML**

**Validamos el número de tarjeta con la implementación del algoritmo de Luhn**

##Pseudocódigo algoritmo Luhn

- Pedir el numero de tarjeta por medio de un form-----

- Guardar el value del input (número de Tarjeta)----

- Convertir el numero a un array (Array.from())---

- revertir el orden del array-- reverse()---

- Identificar los numeros que esten en indices pares-- map(element, index)--

- A los numeros que esten en indices pares los multiplicamos x 2-- if()---

- Si el resultado es mayor o igual a 10 se suman los digitos y se regresa al array-- if() ---

- Si el resultado es menor a 10 no se cambia y se regresa al array--- else{}---

- Sumamos todos los numeros del array-- reduce()

- Dividimos el resultado entre 10-- reduce()/10

- Si el residuo es igual a 0 se agregamos la clase .success al los inputs

- Si el residuo es diferente a 0 agregamos la clase .error a los inputs





