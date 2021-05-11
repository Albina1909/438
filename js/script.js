let num=100;

let kursDollara =74.8;
let kursEuro = 90.5;

let sumDollars= 0, sumEuro=0;

let rubles = prompt("Сумма в рублях");

if (!rubles && typeof rubels == "Object") {
  alert("Вы отменили!!!");}
 else{ 
  if (rubles =="") {alert("Вы ничего не ввели!!!");}

  // else {isNaN(+ rubels) ? alert("Это не число") : alert (`Сумма в $ = ${rubels/kursDollara},
  //   Сумма в евро = ${rubels/kursEuro}`);}}


  else 
  {if ( isNaN (+rubles)) { alert("Это не число");}
  else { sumDollars =(rubles/kursDollara).toFixed(2);
   sumEuro = (rubles/kursEuro).toFixed(2); 
alert(`Сумма в долларах  = ${sumDollars}$, сумма в евро = ${sumEuro}\u20AC` );}}}










// let number =prompt("введите число" ); //string или nul
// // "10"
// // string

// if(!number && typeof number == "Object") {
//   alert("Вы отменили!!!");}
//  else{ 
//    if( number =="") {alert("Вы ничего не ввели!!!");}
//    else{  isNaN (+ number) ? alert ("Это не число"): alert
// (`число ${number} в степени 3= ${number**3}`)}};
