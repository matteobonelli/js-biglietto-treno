let testoDiv = document.getElementById('testo');
let kilometers = parseInt(prompt('Numero di chilometri da percorrere'));
let age = parseInt(prompt('Età del passeggero'));
const priceKm = 0.21;
let priceTotal = kilometers * priceKm;

console.log('chilometri ' + kilometers, 'età ' + age, 'prezzo ' + priceTotal);

if(age < 18){
    testoDiv.innerHTML = 'Il prezzo è ' + (priceTotal - (priceTotal * 0.2)).toFixed(2) + ' €';
} else if(age > 65){
    testoDiv.innerHTML = 'Il prezzo è ' + (priceTotal - (priceTotal * 0.4)).toFixed(2) + ' €';
} else{
    testoDiv.innerHTML = 'Il prezzo è ' + (priceTotal).toFixed(2) + ' €';
}

if(isNaN(kilometers) || isNaN(age)){
    setTimeout(function(){ window. location. reload(); }, 2000);
    testoDiv.innerHTML = 'Inserisci dei numeri!';
}