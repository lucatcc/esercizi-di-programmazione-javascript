/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/
var bornDate = 1994;
var currDate = 2020;
var diffDate = currDate-bornDate;
var hundDate = 100;
var missDate = hundDate-(currDate-bornDate);

console.log(' Luca ha ' + diffDate + ' anni e gliene mancano ' + missDate + ' per arrivare a 100 ');
