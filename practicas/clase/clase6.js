var edad= 18;
var isTeacher = false;

if(edad <18 ){
    console.log("Entro al IF");
} ELSE if(edad == 18){
    console.log("Entro al ELSE IF 18");
}else if(edad == 19){
    console.log("Entro al else if 19");
} else {
    console.log("Entro al ELSE");
}

if( isTeacher== true){
    console.log("Entro al IF DEL BOOLEAN")
}


let edad = 12;
let dinero= 600;
let esVip = false;

if (edad > 13){
    if(dinero >= 300){
        console.log("Puede ingresar a la sala vip");
    }
}else if (esVip === true){
         console.log("Puede ingresar a la sala vip por ser vip");
} else {
     console.log("No Puede ingresar a la sala vip");
}



//let edad = 12;
//let dinero= 600;
//let esVip = false;

//edad > 13 ;
//dinero >=300;
//esVip = false; 

if (edad > 13) && (dinero >= 300) {

        console.log("Puede ingresar a la sala vip");
}else if (esVip === true){
         console.log("Puede ingresar a la sala vip por ser vip");
} else {
     console.log("No Puede ingresar a la sala vip");
}
 

/* arrays */ 

var listaEstudiantes= ["Juan","Maria", "Pedro", "Ana"];
var listaNumeros


var cant_trampa=0;
var cant_tesoros=0;

var cofres = ["tesoro", "vacío", "trampa", "tesoro", "vacío", "tesoro", "trampa", "vacío", "tesoro", "vacío"];
var trampas = [];
for(var i = 0; i < cofres.length; i++ ){
    if(cofres[i] == "trampa"){
        trampas.push(1);
        cant_trampa+=i;

    } else {
        trampas.push(0);
        cant_tesoros+=i;
}
}
console.log(trampas);
console.log('Hay', cant_trampa")

