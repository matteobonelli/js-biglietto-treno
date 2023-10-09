let testoDiv = document.getElementById('testo');
let data = new Date();
let ora = data.getHours();
let minuti = data.getMinutes();
console.log(ora , minuti);

testoDiv.innerHTML = 'mancano ' + (60 - minuti) + ' minuti alle ' + (ora + 1);