function dalyba(pirmasSkaicius, antrasSkaicius){
    // validation
    // ar "pirmasSkaicius" nera skaicius

    if (typeof pirmasSkaicius !== 'number') {
        return 'ERROR: pirmas parametras turi buti skaicius';
    }
    if(pirmasSkaicius === Infinity) {
        return 'ERROR: pirmas parametras negali buti begalybe';
    }
    if(isNaN(pirmasSkaicius)) {
        return 'ERROR: pirmas parametras negali buti NaN';
    }
    // ar "antrasSkaicius" nera skaicius

    if(typeof antrasSkaicius !== 'number') {
        return 'ERROR: antras parametras turi buti skaicius';
    }
    if(antrasSkaicius === Infinity) {
        return 'ERROR: antras parametras negali buti begalybe';
    }
    if(isNaN(antrasSkaicius)) {
        return 'ERROR: antras parametras negali buti NaN';
    }
    if(antrasSkaicius === 0) {
        return 'ERROR: dalyba is 0 negalima';
    }

    // logic
    const dalybosRezultatas = pirmasSkaicius / antrasSkaicius
    return dalybosRezultatas === 0 ? 0 : dalybosRezultatas;

}



console.log( dalyba('true', 2));
console.log( dalyba(Infinity, 2));
console.log( dalyba(NaN, 2));

console.log( dalyba(2, 'true'));
console.log( dalyba(2, Infinity));
console.log( dalyba(2, NaN));
console.log( dalyba(Infinity, Infinity));
console.log( dalyba(0, Infinity));
console.log( dalyba(Infinity, 0));
console.log( dalyba(4, 0)); 

console.log( dalyba(4, 2), '->', 2);
console.log( dalyba(-4, 2), '->', -2);
console.log( dalyba(-4, -2), '->', 2);
console.log( dalyba(4, 3), '->', 1.3333);
console.log( dalyba(0, 4), '->', 0);

