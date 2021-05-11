





let a,b; //стороны трапеции
let h; //высота трапеции
let s; //искомая площадь трапеции

let result = "";// строка с результатом

a=+prompt("Сторона а:");
b=+prompt("Сторона b:");
h=+prompt("Высота h:");

if (a > 0 && b > 0 && h > 0) { S = ((a + b) / 2) * h; result = `Площадь трапеции со сторонами a = ${a} , b = ${b}\n и высотой h = ${h} равна ${S}` }

else{result = `Неверные данные!!!Площадь невозможно посчитать`;}
alert(result);




















// let num=100;

// let kursDollara =74.8;
// let kursEuro = 90.5;

// let sumDollars= 0, sumEuro=0;

// let rubles = prompt("Сумма в рублях");

// if (!rubles && typeof rubels == "Object") {
//   alert("Вы отменили!!!");}
//  else{ 
//   if (rubles =="") {alert("Вы ничего не ввели!!!");}

//   // else {isNaN(+ rubels) ? alert("Это не число") : alert (`Сумма в $ = ${rubles/kursDollara},
//   //   Сумма в евро = ${rubles/kursEuro}`);}}


//   else 
//   {if ( isNaN (+rubles)) { alert("Это не число");}
//   else { sumDollars =(rubles/kursDollara).toFixed(2);
//    sumEuro = (rubles/kursEuro).toFixed(2); 
// alert(`Сумма в долларах  = ${sumDollars}$, сумма в евро = ${sumEuro}\u20AC` );}}}










// let number =prompt("введите число" ); //string или nul
// // "10"
// // string

// if(!number && typeof number == "Object") {
//   alert("Вы отменили!!!");}
//  else{ 
//    if( number =="") {alert("Вы ничего не ввели!!!");}
//    else{  isNaN (+ number) ? alert ("Это не число"): alert
// (`число ${number} в степени 3= ${number**3}`)}};
