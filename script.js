/*
    Expresión regular que coincida con números cuyos digitos no se repiten
*/

function distinct_digit ( num ) {
    const regularExpression = /^((\d)(?!\d*\2))+$/g;

    let result = regularExpression.test(num);
    return result;
}

let response = distinct_digit(1234567); // false porque se repite un digito
console.log("🚀 ~ file: script.js:13 ~ response:", response)
