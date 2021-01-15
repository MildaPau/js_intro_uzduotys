// Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
// a. 0 - 0
// b. 0 - 4
// c. 0 - 100
// d. 574 - 815
// e. -50 - 50
// f. -70 - 30


function SkaiciuSuma(nuo,iki) {
    let SUMA = 0;
    for (let i = nuo; i <= iki; i++) {
        SUMA = SUMA + i;
    }   
    return 'Galutine suma:', SUMA;
}


console.log('-----------------');

const a = SkaiciuSuma(0, 0);
console.log(a);

const b = SkaiciuSuma(0, 4);
console.log(b);

const c = SkaiciuSuma(0, 100);
console.log(c);

const d = SkaiciuSuma(574, 815);
console.log(d);

const e = SkaiciuSuma(-50, 50);
console.log(e);

const f = SkaiciuSuma(-70, 30);
console.log(f);
