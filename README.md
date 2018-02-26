#Pseudocódigo algoritmo

-Pedir el numero de tarjeta por medio de un form-----

<!-- -desabilitar el boton de verificar/pagar por dafault -->

<!-- -si no se ingresan 16 numeros o si esta vacio desabilitar boton-- if() -->

-Guardar el value del input (número de Tarjeta)----

-Convertir el numero a un array (Array.from())---

-revertir el orden del array-- reverse()---

-Identificar los numeros que esten en indices pares-- map(element, index)--

-A los numeros que esten en indices pares los multiplicamos x 2-- if()---

-Si el resultado es mayor o igual a 10 se suman los digitos y se regresa al array-- if() ---

-Si el resultado es menor a 10 no se cambia y se regresa al array--- else{}---

-Sumamos todos los numeros del array-- reduce()

-Dividimos el resultado entre 10-- reduce()/10

-Si el residuo es igual a 0 se agregamos la clase .success al los inputs

-Si el residuo es diferente a 0 agregamos la clase .error a los inputs

<!-- Revisar implementación para el boton desabilitado
Materialize.toast('I am a toast!', 3000, 'rounded') -->

<!-- La función debe recibir un elemento DOM que contenga <input>s con los siguientes nombres (atributo name):
pasar el elemento html como parametro -->


<!-- Funciones:
-función que desabilita boton (por default y por condición)
Revisar si se necesitan mas funciones
-función que valida tarjeta -->

<!-- que todos sean num
digitos 2 año y 2 mes
que no sean negativos
que solo tega año y mes
fecha futura
mes no mayor a 12


.error--- input borde rojo
.success--- input borde verde -->



<!-- funcion principal que llame a la funcion desabilitar 
o
funcion pricnipal, si todas las dema regresan true activa el boton

placeholder de ejemplo de como escribir los datos

revisar pattern!!!!!!!!!!!!!!!!!!!!!!

revisar funcion con keyup

revisar codigo ascci para eviotar numeros o letras

probable boton que revise si los datos estan bien----- si no estan bien rojo y dysplay block (buttton check form)

probable si estan bien display none y aparece el boton submmit

que submmit solo envie datos 

funcion que valide que solo entren numeros
fucion que valide que solo entra texto

-->



