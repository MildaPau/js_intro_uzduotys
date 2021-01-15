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

console.log('-----------------');

function zodis(x) {
        const xIlgis = x.length;
        let xAtbulai = ''; 
    for (let i = 0; i < xIlgis; i++) {
        const raide = zodis[i];
        console.log(zodis[i]);
        xAtbulai = raide + xAtbulai;
    }
    
   return x, '-->', xAtbulai;
    
}

const atbulai = zodis(labas);
console.log(atbulai);