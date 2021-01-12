/*
Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7
atskirai:
a. 0 - 11
b. 8 - 31
c. -18 - 18
d. rezultatą pateikti tokiu formatu:
i. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
ii. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
iii. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.
*/

function liekana(nuo, iki, daliklis) {
    let suma = 0;

    for (let i = nuo; i <= iki; i++) {
        if (i % daliklis === 0) {
            suma++;
        }
        console.log(i,suma);
    }

    return 'Skaičių intervale tarp ' + nuo + ' ir ' + iki + ', besidalijančių be liekanos iš ' + daliklis + ' yra ' + suma + ' vienetai.';
}

const tekstas = liekana(0, 11, 3);
console.log(tekstas);

const tekstas2 = liekana(0, 11, 5);
console.log(tekstas2);

const tekstas3 = liekana(0, 11, 7);
console.log(tekstas3);

console.log('-----------------'); 

const tekstas4 = liekana(8, 31, 3);
console.log(tekstas4);

const tekstas5 = liekana(8, 31, 5);
console.log(tekstas5);

const tekstas6 = liekana(8, 31, 7);
console.log(tekstas6);

console.log('-----------------'); 

const tekstas7 = liekana(-18, 18, 3);
console.log(tekstas7);

const tekstas8 = liekana(-18, 18, 5);
console.log(tekstas8);

const tekstas9 = liekana(-18, 18, 7);
console.log(tekstas9);

