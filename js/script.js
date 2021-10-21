const km = prompt('quanti chilometri vuoi percorrere?');
const età = prompt('quanti anni hai?');
let costo_biglietto = 0 ;
const codice_sconto = prompt('inserisci il codice sconto : "SCONTO20" se hai tra i 18 ed i 20 anni per avere diritto ad uno sconto del 20% sul costo del biglietto  ');

if ((età < 18 && età > 0) && km > 0) {
  costo_biglietto=(0.21 * km * 0.8).toFixed(2)
  document.getElementById('prezzo').innerHTML = `Il costo del biglietto è di ${costo_biglietto} € ` 
}
else if ((età >= 18 && età <= 20) && (km > 0 && codice_sconto == 'SCONTO20')) {
  costo_biglietto=(0.21 * km * 0.8 ).toFixed(2)
  document.getElementById('prezzo').innerHTML = `Il costo del biglietto è di ${costo_biglietto} € ` 
} 
else if ((età >= 18 && età < 65)&& (km > 0 && codice_sconto !=='SCONTO20')) {
  costo_biglietto=(0.21 * km ).toFixed(2)
  document.getElementById('prezzo').innerHTML = `Il costo del biglietto è di ${costo_biglietto} € ` 
} 
else if ((età >= 21 && età < 65 ) && (km > 0 && codice_sconto == 'SCONTO20')) {
  costo_biglietto=(0.21 * km ).toFixed(2)
  document.getElementById('prezzo').innerHTML = `Il costo del biglietto è di ${costo_biglietto} € ` 
  document.getElementById('codicenonvalido').innerHTML = `non hai diritto al codice sconto ` 
} 
else if (età >= 65 && km > 0) {
  costo_biglietto= (0.21 * km * 0.6 ).toFixed(2)
  document.getElementById('prezzo').innerHTML = `Il costo del biglietto è di ${costo_biglietto} € ` 
  if(codice_sconto == 'SCONTO20'){
    document.getElementById('codicenonvalido').innerHTML = `essendo over 65 il tuo sconto è maggiore del codice sconto :"SCONTO20" per cui verrà applicato quello . `
  }
}
else{
  document.getElementById('prezzo').innerHTML = `i dati inseriri non sono corretti ` 
}

if (codice_sconto !== 'SCONTO20' && codice_sconto !== ''){
  document.getElementById('codicenonvalido').innerHTML = `Il codice digitato è errato `
}
else if (codice_sconto == ''){
  document.getElementById('codicenonvalido').innerHTML = `Non hai digitato nessun codice sconto `
}

