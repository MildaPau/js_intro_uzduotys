function daugyba(pirmasSkaicius, antrasSkaicius){
    // validation
    // ar "pirmasSkaicius" nera skaicius
    if (typeof pirmasSkaicius !== 'number') {
        return 'ERROR: pirmas parametras turi buti skaicius';
    }
    if (pirmasSkaicius === Infinity) {
        return 'ERROR: pirmas parametras negali buti begalybe';
    }
    if (isNaN(pirmasSkaicius)) {
        return 'ERROR: pirmas parametras negali buti NaN';
    }

    // ar "antrasSkaicius" nera skaicius
    if (typeof antrasSkaicius !== 'number') {
        return 'ERROR: antras parametras turi buti skaicius';
    }
    if (antrasSkaicius === Infinity) {
        return 'ERROR: antras parametras negali buti begalybe';
    }
    if (isNaN(antrasSkaicius)) {
        return 'ERROR: antras parametras negali buti NaN';
    }

    // logic
    const sandaugosRezultatas = pirmasSkaicius * antrasSkaicius;
    return sandaugosRezultatas === 0 ? 0 : sandaugosRezultatas;
}

const skaicius1 = 3;
const skaicius2 = 7;
const skaicius3 = -5;

console.log( daugyba( skaicius1, skaicius2 ), '->', 21);
console.log( daugyba( skaicius3, skaicius2 ), '->', -35);
console.log( daugyba( skaicius1, skaicius3 ), '->', -15);

// skaiciai: teigiami, nulis, neigiami
// skaiciai: sveikieji, desimtainiai, Infinity, NaN
// reiksmiu tipai: kai nieko neduodam, skaiciai, simboliai (tekstas), boolean

console.log( daugyba(2, -2.5), '->', -5);
console.log(daugyba(2, 0), '->', 0);
console.log(daugyba(-2, -8), '->', 16);
console.log(daugyba(0, 0), '->', 0);
console.log(daugyba(0, -5), '->', 0);

console.log(daugyba(1, 'rytas'));
console.log(daugyba('labas', 2));
console.log(daugyba('labas', 'rytas'));
console.log(daugyba(1, true));
console.log(daugyba(true, 2));
console.log(daugyba(true, true));
console.log(daugyba(1, false));
console.log(daugyba(false, 2));
console.log(daugyba(false, false));
console.log(daugyba(false, true));
console.log(daugyba(true, false));
console.log(daugyba());
console.log(daugyba(Infinity, 2));
console.log(daugyba(Infinity, Infinity));
console.log(daugyba(Infinity, -Infinity));
console.log(daugyba(2, Infinity));
console.log(daugyba(0, Infinity));
console.log(daugyba(NaN, 5));
console.log(daugyba(5, NaN));
console.log(daugyba(NaN, NaN));