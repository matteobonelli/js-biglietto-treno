let testoDiv = document.getElementById('testo');
let oddEven = prompt('pari o dispari?');
let numberChosen = parseInt(prompt('scegli un numero da 1 a 9'));
let numberGenerated = getRandomIntInclusive(1, 9);
let numberChosenReminder = numberChosen % 2;
let numberGeneratedReminder = numberGenerated % 2;

console.log(numberChosenReminder, numberGeneratedReminder)
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

if(oddEven === 'pari' && numberChosenReminder === 0 && numberGeneratedReminder === 1){
    testoDiv.innerHTML = 'hai vinto';
} else if(oddEven === 'pari' && numberGeneratedReminder === 0 && numberChosenReminder === 1){
    testoDiv.innerHTML = 'vince il computer';
} else if(oddEven === 'pari' && numberGeneratedReminder === 0 && numberChosenReminder === 0){
    testoDiv.innerHTML = 'pareggio';
} else if(oddEven === 'pari' && numberGeneratedReminder === 1 && numberChosenReminder === 1){
    testoDiv.innerHTML = 'avete perso';
}

if(oddEven === 'dispari' && numberChosenReminder === 1 && numberGeneratedReminder === 0){
    testoDiv.innerHTML = 'hai vinto';
} else if(oddEven === 'dispari' && numberGeneratedReminder === 1 && numberChosenReminder === 0){
    testoDiv.innerHTML = 'vince il computer';
} else if(oddEven === 'dispari' && numberGeneratedReminder === 1 && numberChosenReminder === 1){
    testoDiv.innerHTML = 'pareggio';
}
else if(oddEven === 'dispari' && numberGeneratedReminder === 0 && numberChosenReminder === 0){
    testoDiv.innerHTML = 'avete perso';
}

if(oddEven !== 'pari' && oddEven !== 'dispari'){
    testoDiv.innerHTML = 'devi scrivere pari o dispari';
}

if (isNaN(numberChosen)){
    testoDiv.innerHTML = 'devi scrivere un numero';
}