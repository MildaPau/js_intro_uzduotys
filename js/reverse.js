const pradinisTekstas = 'labas';
const tekstoIlgis = pradinisTekstas.length;
let atbulasTekstas = '';

console.log(tekstoIlgis);

for (let i = 0; i < tekstoIlgis; i++) {
    const raide = pradinisTekstas[i];
    console.log(pradinisTekstas[i])
    atbulasTekstas = raide + atbulasTekstas;
}

console.log(pradinisTekstas, '-->', atbulasTekstas);

