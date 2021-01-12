/*
Funkcija pavadinimu “tusciaFunkcija”:
a. nepriima jokių kintamųjų
b. neatlieka jokios vidinės logikos
c. gražina boolean tipo reikšmę “false”
d. TESTAS:
i. console.log( tusciaFunkcija() );
ii. rezultatas: false
*/

function tusciaFunkcija () {
    return(false);
}
console.log( tusciaFunkcija()); 

/*
Funkcija pavadinimu “daugyba”:
a. priima du skaičiaus tipo kintamuosius
b. atskirame kintamajame įsimena sandaugos reikšmę
c. gražina saudaugos rezultatą
d. TESTAI:
i. console.log( daugyba( skaicius1, skaicius2 ) );
ii. console.log( daugyba( skaicius3, skaicius2 ) );
iii. console.log( daugyba( skaicius1, skaicius3 ) );
iv. rezultatas: teisingos reikšmės;
*/

function daugyba (pirmasSkaicius, antrasSkaicius){
    const rez = pirmasSkaicius * antrasSkaicius;
    return rez
}