// Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
// a. 0 - 0
// b. 0 - 4
// c. 0 - 100
// d. 574 - 815
// e. -50 - 50
// f. -70 - 30


/*a 
console.log('-------- a ---------'); 

for (let i = 0; i === 0; i++) {
    console.log(i)
}
*/

/*b
console.log('-------- b ---------');

const skaiciai = [0, 1, 2, 3, 4];
let SUMA = 0;
const skaiciuKIEKIS = skaiciai.length;

console.log(skaiciuKIEKIS);

for (let i = 0; i < skaiciuKIEKIS; i++) {
    console.log(suma += skaiciai[i])
}
*/


console.log('-------- c ---------');

const nuo = 0;
const iki = 100;
let SUMA = 0;

for (let i = nuo; i <= iki; i++) {
    SUMA = SUMA + i;
    console.log(i, SUMA);
}   
console.log('Galutine suma:', SUMA); // 5050


/*d
console.log('-------- d ---------');

const nuo = 574;
const iki = 815;
let SUMA = 0;

for (let i = nuo; i <= iki; i++) {
    SUMA = SUMA + i;
    console.log(i, SUMA);
}   
console.log('Galutine suma:', SUMA); //168069
*/

/*e
console.log('-------- e ---------');

const nuo = -50;
const iki = 50;
let SUMA = 0;

for (let i = nuo; i <= iki; i++) {
    SUMA = SUMA + i;
    console.log(i, SUMA);
}   
console.log('Galutine suma:', SUMA); // 0
*/

/*f
console.log('-------- f ---------');

const nuo = -70;
const iki = 30;
let SUMA = 0;

for (let i = nuo; i <= iki; i++) {
    SUMA = SUMA + i;
    console.log(i, SUMA);
}   
console.log('Galutine suma:', SUMA); // -2020
*/

