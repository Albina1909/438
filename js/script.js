let num=100;

let number =prompt("введите число" ); //string или nul
// "10"
// string

if(!number && typeof number == "Object") {
  alert("Вы отменили!!!");}
 else{ 
   if( number =="") {alert("Вы ничего не ввели!!!");}
   else{  isNaN (+ number) ? alert ("Это не число"): alert
(`число ${number} в степени 3= ${number**3}`)}};
