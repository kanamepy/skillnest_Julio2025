function clicAlBotonParaEncender() {
  teleEncendida = true;
}

function nombreDeFuncion() {
  //Código que se ejecuta
}

nombreDeFuncion();

function saluda() {
  console.log("¡Hola!");
}

saluda(); //Ejecuta la función saluda
saluda(); //Ejecuta la función saluda de nuevo

var nombre = "Frida";

var apellido = "Kahlo";

var edad = 47;

var altura = 1.6;

console.log(nombre); //Frida

//tipos de datos-->
//var numero
var primerNumero = 50;
var segundoNumero = 27;
console.log(primerNumero + segundoNumero); // 77

var edadNumero = 47;
// var cadena
var edadCadena = "47";
var cadena = "¡Hola soy Frida y tengo 47 años!";

//Undefined
var nuevaVariable;

console.log(nuevaVariable); // Se imprime undefined

//Null
//Null es un valor que significa nulo o vacío. Suele confundirse con undefined,
// pero son muy distintas. Undefined es el valor que encontrarás en una variable a la cuál no se le ha asignado aún información.
// Mientras que null es un valor que se asigna como vacío de manera intencional y explícita.

//boolean
//Este tipo de dato solo puede tener dos valores: verdadero o falso.

var primerNumero = 50;
var segundoNumero = 27;
console.log(primerNumero + segundoNumero); // 77

var cadena = "¡Hola soy Frida y tengo 47 años!";

var edadCadena = "47";
var edadNumero = 47;

var nuevaVariable;
console.log(nuevaVariable); // Se imprime undefined


//condicionales 

if(condicional) {

   //Código que se ejecuta si la condición se cumple

} else if(2da condicional) { //Podemos tener 0 o muchas de estas sentencias

   //Código que se ejecuta si segunda condicional se cumple

} else {

   //Código que se ejecuta si ninguna de las condiciones se cumple

}
// Sentencia If/Else
var edad = 17;

if(edad > 18) {

   console.log("Mayor de edad");

} else {

   console.log("Menor de edad");

}

//Dado a que la variable edad no es mayor a 18, la segunda sentencia de impresión, 
// "Menor de edad" es la línea que se ejecutaría

//Sentencia If/Else If/Else
var edad = 17;

if(edad < 5) {

   console.log("Es un bebe");

} else if(edad < 11) {

   console.log("Es un niño");

} else if(edad < 18) {

   console.log("Es un adolescente");

} else if(edad < 59) {

   console.log("Es un adulto");

} else {

   console.log("Es una persona mayor");

}

//Dado a que las primera dos sentencias no se cumplen (edad NO es menor a 5 ni edad es menor a 11), la tercera sentencia es verdadera (edad SI es menor a 18), se imprimirá "Es un adolescente". 
// Sin embargo, el resto de mis sentencias no serán verificadas ya que se cumplió con una de las condicionales de la cadena.

//Operadores lógicos y de comparación

//    ==     igual                 7 == 7 es verdadero (true)     7 == 8 es falso (false)

//    !=     distinto              7 != 7 es false                7 != 8 es true

//     >     mayor que              7 > 8 es false                 8 > 7 es true

//     >=    mayor o igual que       7 >= 8 es false               7 >= 7 es true

//      <   menor que               7 < 8 es true                   8 < 7 es false

//      <=  menor o igual que       7 <= 7 es true                  8 <= 7 es false


if(condicional) {
    //Código que se ejecuta si la condición se cumple
} else if(2daCondicional) { //Podemos tener 0 o muchas de estas sentencias
    //Código que se ejecuta si segunda condicional se cumple
} else {
    //Código que se ejecuta si ninguna de las condiciones se cumple
}
 
var edad = 17;
if(edad > 18) {
    console.log("Mayor de edad");
} else {
    console.log("Menor de edad");
}

//Dado a que la variable edad no es mayor a 18, la segunda sentencia de impresión, "Menor de edad" es la línea que se ejecutaría

var edad = 17;
if(edad < 5) {
    console.log("Es un bebe");
} else if(edad < 11) {
    console.log("Es un niño");
} else if(edad < 18) {
    console.log("Es un adolescente");
} else if(edad < 59) {
    console.log("Es un adulto");
} else {
    console.log("Es una persona mayor");
}

//Dado a que las primera dos sentencias no se cumplen (edad NO es menor a 5 ni edad es menor a 11), 
// la tercera sentencia es verdadera (edad SI es menor a 18), se imprimirá "Es un adolescente".
//  Sin embargo, el resto de mis sentencias no serán verificadas ya que se cumplió con una de las condicionales de la cadena.

//Arreglo1

var listaSupermercado = ["arroz", "frijoles", "lentejas", "pan"];

//Arreglo2

var gastos = [100, 142, 231];

//Arreglo3

var infoContacto = ["Diego", "Rivera", "Guanajuato", "México", 812345678];

var pintor = ["David Alfaro", "Siqueiros", "Camargo"];

//Agregar 

var pintor = ["David Alfaro", "Siqueiros", "Camargo"];

pintor.push("México");

console.log(pintor); //["David Alfaro", "Siqueiros", "Camargo", "México"]


//Eliminar
var pintor = ["David Alfaro", "Siqueiros", "Camargo"];

pintor.pop();

console.log(pintor); // ["David Alfaro", "Siqueiros"]

//Consultar/Actualizar
var pintor = ["David Alfaro", "Siqueiros", "Camargo"];

console.log(pintor[0]); //Leemos el valor en índice 0. Se imprime "David Alfaro"

pintor[1] = "Orozco"; //Actualizamos el valor en índice 1

console.log(pintor);//["David Alfaro", "Orozco", "Camargo"]


//Length (longitud)

var pintor = ["David Alfaro", "Siqueiros", "Camargo"];

console.log(pintor.length); //3

pintor.pop();

console.log(pintor.length); //2


var pintorNombre = "David Alfaro";
var pintorApellido = "Siqueiros";
var pintorCiudadNacimiento = "Camargo";

var pintor = ["David Alfaro", "Siqueiros", "Camargo"];

var pintor = ["David Alfaro", "Siqueiros", "Camargo"];
pintor.push("México");
console.log(pintor); //["David Alfaro", "Siqueiros", "Camargo", "México"]

var pintor = ["David Alfaro", "Siqueiros", "Camargo"];
pintor.pop();
console.log(pintor); // ["David Alfaro", "Siqueiros"]

var pintor = ["David Alfaro", "Siqueiros", "Camargo"];
console.log(pintor[0]); //Leemos el valor en índice 0. Se imprime "David Alfaro"
pintor[1] = "Orozco"; //Actualizamos el valor en índice 1
console.log(pintor);//["David Alfaro", "Orozco", "Camargo"]

//RETURN


function obtenerEdad() {

   var edad = 20;

   return edad;

}


function calculaAreaRectangulo(largo, ancho) {

   var area = largo * ancho;

   return area;

}

calculaAreaRectangulo(10, 20);


function crearArreglo() {

   var nuevoArreglo = ["a", "e", "i", "o", "u"];

   return nuevoArreglo; //Sentencia return

}

var vocales = crearArreglo(); //la variabla vocales invoca a crearArreglo

console.log(vocales)

//Bucles for

for(var i = 0; i <= 5; i++) {

   console.log(i);

}

//Bucles + Arreglos

var arreglo = [5, 10, 15, 20];

for(var indice = 0; indice < arreglo.length; indice++) {

   console.log(indice); //Imprime el indice

   console.log(arreglo[indice]); //Imprime el valor del arreglo en el índice

}

// bucles while
while(condicion) {

   //Código que se ejecuta mientras la condición se cumpla

}

//Sale del bucle cuando la condición deje de cumplirse


var numero = 0; //Valor inicial 0

while(numero <= 5) {

   console.log(numero); //Imprime el valor de numero

   numero++; //Incrementamos en 1 numero

}



var edadUsuario = 35;

function puedeObtenerLicencia() {

   if (edadUsuario> 17){
    console.log('Listo para obtener licencia de conducir');
   }else{
    console.log('Disculpa debes esperar más años para conseguir tu licencia')
   }
}

puedeObtenerLicencia();


function saluda() {

   return "¡Hola mundo!";

}

var frase = saluda();

console.log(frase); //Imprime aquí ¡Hola mundo!

//Módulo (%)

console.log(21 % 2); //Imprime 1
console.log(10 % 5); //Imprime 0
console.log(11 % 3); //Imprime 2

//Eliminación de decimales : Esta función nos permite redondear los decimales de la siguiente manera
//Math.round()
console.log(Math.round(3.5));  //Imprime 4
console.log(Math.round(3.25)); //Imprime 3
console.log(Math.round(-1.9)); //Imprime -2
console.log(Math.round(-1.2)); //Imprime -1
 
//Esta función redondea siempre un número más abajo.

//Math.floor() 

console.log(Math.floor(3.5));  //Imprime 3
console.log(Math.floor(3.25)); //Imprime 3
console.log(Math.floor(-1.9)); //Imprime -2
console.log(Math.floor(-1.2)); //Imprime -2


//Esta función redondea un número hacia arriba.
//Math.ceil()
console.log(Math.ceil(3.5));  //Imprime 4
console.log(Math.ceil(3.25)); //Imprime 4
console.log(Math.ceil(-1.9)); //Imprime -1
console.log(Math.ceil(-1.2)); //Imprime -1

//Math.trunc()
//Esta función trunca el número, es decir que simplemente eliminará el decimal independientemente de cuál sea.

console.log(Math.trunc(3.5));  //Imprime 3
console.log(Math.trunc(3.25)); //Imprime 2
console.log(Math.trunc(-1.9)); //Imprime -1
console.log(Math.trunc(-1.2)); //Imprime -1


//FORMAS CONCISAS DE ACORTAR CODIGO

// Estas dos líneas hacen lo mismo
contador = contador - 3
contador -= 3

// Estas dos líneas son equivalentes
puntos = puntos + 4
puntos += 4

// Los siguientes comandos son intercambiables
vida = vida - 1
vida -= 1
vida--

// Cualquiera de estos comandos aumentará el valor en uno
score = score + 1
score += 1
score++

//importante este ' ' vacio o espacio hace que concatener el resultado
var result = '';
for(var i = 5; i > 0; i--) {
    result += i + ' ';
    console.log(result);
}
console.log(result);

123546
var result = '';
for(var i = 5; i > 0; i--) {
    result += i + ' ';
    console.log(result);
}
console.log(result);
//5 
//5 4 
//5 4 3 
//5 4 3 2 
//5 4 3 2 1 
//5 4 3 2 1 

var total = 1;
for(var i = 1; i <= 4; i++) {
    total *= i;
}
console.log(total);

var x = [];
for(var i = 0; i < 5; i++) {
    if(i % 2 === 0) {
        x.push(i);
      //  console.log(x);
    }else {
     // console.log(i)
    }
}
console.log(x);
//console.log(x);

var x = [];
for(var i = 0; i < 5; i++) {
    if(i % 2 === 0) {
        x.push(i);
    }
}
console.log(x);


var matriz = [];
for(var i = 0; i < 2; i++) {
    matriz[i] = [];
    for(var j = 0; j < 2; j++) {
        matriz[i][j] = i + j;
    }
}
console.log(matriz);
//[[0,1],[1,2]]

var num = 0;
var result = ''; // representa una cadena vacía
while (num < 3) {
    result += num;
    num++;
}
console.log(result);
//012   


//directo cuando sea 5 sale e imp ese valor
var x = 10;
while (x > 0) {
    if (x === 5) {
        break;
    }
    x--;
}
console.log(x);