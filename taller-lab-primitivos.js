// 1. Variables y Tipos de Datos

//Ejercicio 1

let nombre = "Mary";
let edad = 29
let esEstudiante = true

console.log("Mi nombre es ", nombre);
console.log("Tengo ",edad, " años");
console.log("¿Es estudiante?", esEstudiante);

//Ejercicio 2

let horaEntrega;
let comentarioEntrega = null;

console.log("Hora de entrega:", horaEntrega);
console.log("Comentario de entrega:",comentarioEntrega);


// 2. Ingreso de Datos por Teclado

//Ejercicio 1

const prompt = require("prompt-sync")();

let nacimiento = parseInt(prompt("Ingrese su año de nacimiento: "));

let edadActual = 2026 - nacimiento;

console.log ("Su edad es: ", edadActual);


//Ejercicio 2 

//tambien se puede hacer con parseInt(prompt(. En este caso utilizamos Number


let numero1 = Number(prompt("Digite un numero: "));
let numero2 =  Number(prompt ("Digite un segundo numero: "));

let suma = numero1 + numero2;

console.log("El resultado de la suma es:", suma);


// 3. Condicional if

//Ejercicio 1

let EdadUser = parseInt(prompt("Por favor ingrese su edad: "));
if (EdadUser >= 18 ){
    console.log("Puedes entrar");
} else {
    console.log("No puedes entrar");
}

//Ejercicio 2

let numeroUser = parseInt(prompt("Por favor ingrese un numero: "));
if (numeroUser >0){
    console.log("El numero es positivo");

} else if(numeroUser <0){
    console.log("El numero es negativo");

}else {
    console.log("El numero es cero");
}

// 4. Bucle While

//Ejercicio 1

let numero0 = parseInt(prompt("Digite un numero: "));
let iterador = 1;

while (iterador <= numero0){
    console.log("Numero:",iterador); iterador++;

}

//Ejercicio 2 

let contrasena = "";

while (contrasena !== 1234) {
    contrasena = parseInt(prompt ("Ingrese su contraseña: "));

}
console.log("contraseña correcta");

// 5. Bucle for

//Ejercicio 1

for(let iterador = 1; iterador <=10; iterador++){
    console.log(iterador);

}

//

let numeroX = parseInt(prompt("Digite un numero, por favor: "));
for (let iterador = 1; iterador <= 10; iterador++) {
    
    console.log( numeroX + " x " + iterador + " = " + (numeroX * iterador));
    
}