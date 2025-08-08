var edad= 19;
var nombre= "ricardo";
var estaLloviendo = false; 
var haceFrio = true;

//==  !=
//esta lloviendo == true  --> diferente no entra
// estaLloviendo != true  --> diferente entra
/*if(estalloviendo == true){
    console.log("Esta lloviendo, lleva tu paraguas");
}*/

if(estalloviendo != true){
    console.log(" Entro al if, Esta lloviendo, lleva tu paraguas");
}

//no se cumple esta condición, no ingresa
if(estalloviendo == true){
    console.log("Esta lloviendo, lleva tu paraguas");
}


if(estalloviendo != true && haceFrio== True){
    console.log("Esta lloviendo, lleva tu paraguas");
}

if(estalloviendo == true || haceFrio== True){
    console.log("Esta lloviendo, lleva tu paraguas");
}

//alt 124 ||
// == solo evalua el valor de por si
// === aparte de que evalua el valor y el tipo de dato. 
// Recomendacion utilizar los 3 === !== 
/*if ((estaLloviendo == true || haceFrio == false) && nombre == "ricardo"){
    console.log('Entro al if');
}
    */

/*
if (estaLloviendo == true && haceFrio === true){
    console.log('Entro al if');
} else {
    console.log("Entro al else");
}
*/

// evalúa numeros < > <= >=

//Ctrol + { para comentar bloque
// if (edad=== 35 ){
//     console.log("La persona no tiene 35");
// }

// if (edad <= 50 ){
//     console.log("La persona tiene menos de 50");
// }


if (edad > 50){
    //no se ejecuta
}else {
    console.log('Entro al Else');
}
edad = 51;
if (edad < 18){
    console.log('Es menor de edad');
}else if(edad >=18 && edad <=50){
    console.log('Es adulto');
}else {
    console.log('Es anciano');
}

if (estaLloviendo === true){
    console.log("Lleva paragua");
}
if (haceFrio === true){
    console.log("Lleva casaca");
}


var nota = 54;
// 0-40 reprobado
// 41-60 proficiente
// 61-90  <Excelente>
// 91 100 Sobresaliente 

//impotante si es un nro negativo
// EVALUA SI NO ES NUMERO
if (isNaN(nota)){
    console.log("No es numero");
}
if ( nota >=0 && nota<= 40){
  console.log("Reprobado");
} else if(nota <=41 && nota<= 60){
  console.log("proficiente");
} else if(nota<=61 && nota<= 90){
  console.log("excelente");
} else if(nota<=91 && nota<= 100){
  console.log("sobresaliente");
} else {
    console.log("Fuera del rango");
};

// shift alt a
//ctrol alt q

var nota = 21;
var grado = 'Secundaria';
//Primaria
// 0-40 reprobado
// 41-60 proficiente
// 61-90  <Excelente>
// 91 100 Sobresaliente

//Secundaria
// 0-20 reprobado
// 21-50 proficiente
// 51-80  <Excelente>
// 81-100 Sobresaliente
//impotante si es un nro negativo
// EVALUA SI NO ES NUMERO
if (isNaN(nota)) {
  console.log('No es numero');
}
if (grado == 'primaria') {
  if (nota >= 0 && nota <= 40) {
    console.log('Reprobado');
  } else if (nota <= 41 && nota <= 60) {
    console.log('proficiente');
  } else if (nota <= 61 && nota <= 90) {
    console.log('excelente');
  } else if (nota <= 91 && nota <= 100) {
    console.log('sobresaliente');
  } else {
    console.log('Fuera del rango');
  }
} else if (grado == 'secundaria') {
  if (nota >= 0 && nota <= 20) {
    console.log('Reprobado');
  } else if (nota <= 21 && nota <= 50) {
    console.log('proficiente');
  } else if (nota <= 51 && nota <= 80) {
    console.log('excelente');
  } else if (nota <= 81 && nota <= 100) {
    console.log('sobresaliente');
  } else {
    console.log('Fuera del rango');
  }
} else{
    console.log('Calificacion no valida');
};



tope=listaNombres.length;
console.log(listaNombre[tope-1]);



var listaNombres = ["Ricardo", "Juan","Maria"];
var listaEdades = [20,30.50];
var listaBoleanos =[true, false, true];
var esDeDia = true;
//cuenta con indice/ posicion
//metodos en base a un array
//agregar otro valor

if(esDeDia === true){
  listaNombres.push("Claudia");
}
//elimina ultimo elemento
if(esDeDia === true){
  listaNombres.pop();
}

if(esDeDia === true){
  listaNombres.unshift("Roberto");
}

if(esDeDia === true){
  listaNombres.shift();
}

//trabaja con tres valores

if(esDeDia == true){
  listaNombres.splice(1,0,"Tito");
 // listaNombre.splice(1,1);
}

//imprimir especifico variable Maria.
console.log(listaNombres);
console.log(listaNombres[2]);
console.log(listaNombres[3]);
console.log(listaNombres[4]);


console.log(listaNombres.length);

tope=listaNombres.length;
console.log(listaNombre[tope-1]);



console.log(listaNombres);
listaNombres.sort();
console.log(listaNombres);

//0,1,10,2,3,8
console.log(listaEdades); 
listaEdades.sort();
console.log(listaEdades);


console.log(listaNombres);
listaNombres.reverse();
console.log(listaNombres);

//0,1,10,2,3,8
console.log(listaEdades); 
listaEdades.reverse();
console.log(listaEdades);

varlistaforti= ["Ricardo,"Juan","Maria","Carlos",,"Victor", "Micchae"];




var listaNotas = [30,20,50,54];

if (isNaN(nota)){
    console.log("No es numero");
}
for(var indice=0; indice <=listaNombres.leng;indice++){
  console.log("Hola"+ listaNombres[indice]);
  console.log(`Hola'${listaNombres[indice]}!`);

    if ( listaNombres[indice] >=0 && listaNombres[indice]<= 40){
      console.log("Reprobado");
    } else if(listaNombres[indice] <=41 && listaNombres[indice]<= 60){
      console.log("proficiente");
    } else if(listaNombres[indice]<=61 && listaNombres[indice]<= 90){
      console.log("excelente");
    } else if(listaNombres[indice]<=91 && listaNombres[indice]<= 100){
      console.log("sobresaliente");
    } else {
        console.log("Fuera del rango");
    };

    

};

//como optimizar crear una variable var = 0 fuera
// y dentro del for asignar y de ahi utilizar.
