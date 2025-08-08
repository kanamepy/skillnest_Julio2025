var nombre = 'Ricardo';
let apellido = "Gomez";
const edad= 35;

console.log(nombre);

function saludar(){
    var nombre = 'Vanesa';
    let apellido = "Saldivar";
    const edad= 35; 
}
var saludar= 'hola ${nombre}';
console.log(saludar);
var peso =60; //si o si declarar
peso = peso+5;
peso += 5;

console.log(peso);
if (5 == 5){
    console.log('Se ejecuto el if');
}//true
var edad = (nombre == "Carlos") ? 25 : 30;