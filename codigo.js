/* Funciones o metodos 
un bloque de codigo que se ejecuta cada vez que lo llamamos*/

'use strict';

function NombreFuncion(){
    // que devuelva es lo que hace le return
return 'Hola soy el return de la primera funcion'; // solo muestra en consola llamndo el nombre de la funcion
}

function MostrarMensaje(){
    console.log('Hola que tal estoy dentro de la funcion');
}

MostrarMensaje();

//PARAMETROS EN LAS FUNCIONES

var n1 = prompt('Dime una palabra' , 'no has puesto nada');

var n2 = prompt('Dime otra palabra' , 'no has puesto nada');

function UnirPalabras(n1,n2){

    var PalabrasUnidas = n1 + ' ' + n2;

    return PalabrasUnidas;
}

var resultado = UnirPalabras(n1,n2);

console.log(resultado);

//Parametros REST
//cuando no sabemos que cantidadparametros vamos a recibir en un metodo

function ListadoPaises(p1,p2,...p){// indica que vamos a utilizar parametros rest
console.log(p1);
console.log(p2);
console.log(p);
}

ListadoPaises('España','Alemania','Inglaterra','Suiza');