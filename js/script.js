const km = prompt('quanti chilometri vuoi percorrere?');
const età = prompt('quanti anni hai?');
let costo_biglietto = 0 ;

if (età < 18){
  costo_biglietto=(0.21 * km * 0.8).toFixed(2)
}
else if (età >= 18 && età < 65) {
  costo_biglietto=(0.21 * km ).toFixed(2)
} 
else  (età >= 65) ;{
  costo_biglietto= (0.21 * km * 0.6 ).toFixed(2)
}

document.getElementById('prezzo').innerHTML = costo_biglietto