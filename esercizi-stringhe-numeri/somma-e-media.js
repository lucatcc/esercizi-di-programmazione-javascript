/*
  Somma e media
  Scrivi un programma che dati 5 numeri restituisca in output la somma e la media.

  Esempio:
    Input: a = 1, b = 2, c = 3, d = 4, e = 5
    Output: somma = 15, media = 3

  http://www.imparareaprogrammare.it
*/

var a = 12;
var b = 96;
var c = 78;
var d = 8;
var e = 67;
var numberData = 5;
var sum = a+b+c+d+e;
var average = Math.round(sum/numberData);

console.log(' la somma dei numeri è ' + sum + ' mentre la loro media è ' + average);
