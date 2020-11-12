/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/
var seconds = 849165181;
var modMin = seconds%60;
var hours = Math.trunc(seconds/3600);
var secsRes = Math.trunc(seconds-(hours*3600));
var minutes = Math.trunc(secsRes/60);

console.log(hours + ' ore, ' + minutes + ' minuti e ' + modMin + ' secondi ');
