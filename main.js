// Importa la librería prompt-sync correctamente

import promptSync from 'prompt-sync';

// Inicializa la función prompt

const prompt = promptSync();

// Solicita dos números al usuario

let num1 = parseFloat(prompt("Ingrese el primer número: "));

let num2 = parseFloat(prompt("Ingrese el segundo número: "));

// Suma los dos números

let resultado = num1 + num2;

// Muestra el resultado

console.log("La suma de los dos números es: " + resultado);
