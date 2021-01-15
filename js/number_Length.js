  
function numberLength(number) {
    if (typeof number !== 'number') {
        return 'ERROR: reikia skaiciaus tipo reiksmes';
    }
    if (isNaN(number) ||
        !isFinite(number)) {
        return 'ERROR: reikai normalaus/tikro skaicias';
    }

    const numberAsString = '' + number;
    let length = numberAsString.length;

    // jei desimtainis skaicius, tai turi kazka po kablelio
    // dalinant is 1, toks skaicius turi liekana - tai kas po kablelio
    if (number % 1 !== 0) {
        length--;
    }

    if (number < 0) {
        length--;
    }

    return length;
}

console.log(numberLength('asd'));
console.log(numberLength(true));
console.log(numberLength(NaN));
console.log(numberLength(Infinity));

console.log(numberLength(5), '->', 1);
console.log(numberLength(781), '->', 3);
console.log(numberLength(37060123456), '->', 11);
console.log(numberLength(3.5), '->', 2);
console.log(numberLength(3.1415), '->', 5);
console.log(numberLength(-1), '->', 1);
console.log(numberLength(-9), '->', 1);
console.log(numberLength(-123), '->', 3);
console.log(numberLength(-3.14), '->', 3);