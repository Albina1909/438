
console.log($(JavaScript));


JavaScript.getElementByID("h1").innerHTML = "Hello world, edited"
$('#h1').html ("Hello world, edited")
          
          // ТИПЫ ДАННЫХ

// ПРИМИТИВНЫЕ
// string "текст
// number числа 1 2 3
// boolean правда/ложь
// СЛОЖНЫЕ
// Object ==> массивы, объекты,функции
// typeof
//   циклы: for, while , do- while (condition) {
//   методы: allert (всплывающее окошко), prompt (спросить можно вбивать какие-то данные), confirm(задать вопрос нельзя вбивать да или нет)

// итерация-это шаг
// let mas = [];
// for (let i=0; num =0, i < 10 ; i ++, num++) {
//   if (num % 2 == 0) { mas[i] = num;}
//  else{mas [i] =0 ;
//   continue;}

// console.log(`${i + 1}. ${mas[i]} `);}
// let num = 100 ; // 100=1*2*2*4
// let num = `ff`;
// console.log(parseInt(num, 24));

// let num = 100
// let str = "100"
// if (num ===str) { console.log ("Переменные равны")};

// let str = "Привет!";
// let mas = Array.from (str);

// console.log(typeof mas[0]);

// for (let sumbIndex in mas) {
//   console.log(sumbIndex);

// for (let sumb of str) {
//   console.log(sumb);}

// console.log(str.length);
// console.log(mas.length);


        //если
  //   if (условие) {// команды}
        //иначе, если
  // else if (условие) {// команды}
  //     //иначе, если
  // else if (условие) {// команды }
  //   //иначе, если
  // else if (условие) {// команды }
  // иначе
  //   else (условие) {// команды} 

//   switch (i) {
//     case 1: endWordYear = "год";
//       break;
//     case 2:
//     case 3:
//     case 4: endWordYear = "года";
//       break;

//     case 5:
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//     case 11: endWordYear = "лет";
//       break;
//   }
//   console.log(`Через ${i} ${endWordYear} сумма = ${sum.toFixed(2)}`); }

// switch(выражение) {
// case значение1: команды; 
//                   break;
// case значение2: команды;
//                   break;
// case значение3: команды;
//                   break;
// default: команды;
//                   break;                
//                 }

// 1, 21  все числа, кот заканчиваются на 1 (кроме 11) = слово год
// 2,3,4 года
// 5,6,7,8,9,10 лет, +11 лет

// //for( объявление и инициализация переменных цикла; условие; изменение счётчика){ тело цикла;}

 // ********ИНКРЕМЕНТ И ДЕКРЕМЕНТ  НАЧАЛО  ***
 
// //инкремент -увеличение значение переменнойна единицу
// i=i+1;  
// 1++; инкремент постфиксная
// ++1; инкремент префиксная

// //декремент -уменьшение значения на единицу
// i = i - 1;
// 1--; декремент постфиксная
// --1; дектемент префиксная

// // // сокращённая запись- i+=1
// // i = + 2
// // i = - 1
// // i = * 2
// // i = i / 2
// // // полная запись - i=i+1 Может быть плюс или минус или делить.люба математ операция. главное. что изменяет предыдущее число
// // i = i + 2
// // i = i - 1
// // i = i *2
// // i = i / 2

// постфиксная запись
// префиксная запись




 // ********ИНКРЕМЕНТ И ДЕКРЕМЕНТ  КОНЕЦ ***

                        // ********ПРИМЕР АССОЦИАТИВНОГО МАССИВА НАЧАЛО*******

// let assocMas = new Map([
//   ["number", 1000],
//   ["city", "Москва"],
//   ["flag", true],
// ]);

// assocMas.set("date", "28.04.2021"); // создать элемент и значение с ключем "date"

// console.log(assocMas.get("date")); // вернуть значение по ключу "date"
// console.log (assocMas.size); //длина массива
// assocMas.delete("number"); // удалить элемент и значение с ключем "date"

// assocMas.clear();//очищает массив(удаляет все его элементы)
// console.log(assocMas);
// console.log(assocMas.has("city"));

//    //цикл по всем ключам:
// for (let key of assocMas.keys()) {
//   console.log(key);}

     //Метод forEach для перебора всех элементов масива и применения функции к ним (неких действий):
// assocMas.forEach(function (value , key) {
//   console.log( ' Имя:' + key + '\nЗначение:' + value)
// });
// function nameFunc() {}

  // ********ПРИМЕР АССОЦИАТИВНОГО МАССИВА КОНЕЦ*******

        /***ПРИМЕР ЗАДАЧИ С ДВУМЕРНЫМ МАССИВОМ НАЧАЛО***
// let matrix = [

//   [100, 200, 300],
//   ["Москва", "Красноярск", "Волгоргад", "Питер"],

//   [true, false]];

// for (let i in matrix) {
//   if (i == 1) {
//     // 1-ый способ
//     for (let j in matrix[1]) { console.log(`${j + 1}. ${matrix[1][j]}`); }

//     // 2- ой способ
//     // for(let j = 0; j< matrix[1].length; j++)
//     //    { console.log(`${j + 1}. ${matrix[i] [j]}`);}}
//   }
// }
***ПРИМЕР ЗАДАЧИ С ДВУМЕРНЫМ МАССИВОМ КОНЕЦ***


// /      МЕТОДЫ РАБОТЫ С МАССИВОМ:
// // 1 Push добавить эл - ты в конце массива,
// // 2 unshift добавить эл - ты в начале массива,
// // 3 pop удалять последнего эл - та из массива,
// // 4 shift удалять 1 - го эл - та из массива,
// // 5 slice копия массива полная 
// //               без параметров
// //               копия документа выбирает элементы с 0-го до номера или кроме последних двух
// // 6 splice  удаляет элементы

// let mas = [100, 200, 300, 400, 500];
// // let copiMas = mas; ссылка на объект (массив)

// let copiMas = mas.slice(0. - 3);  // копия массива (новый массив)
// console.log(`${i + 1}. ${mas[i]} `);

// for (let i = 0; i < mas.length; i++) {
//   console.log(`${i + 1}. ${mas[i]}`);
// }
// console.log("******");
// for (let i in mas) {
//   console.log(`${i + 1}. ${mas[i]}`);
// }


// *****Мини-калькулятор НАЧАЛО****

// // сложение 2-х чисел
// // разность 2-х чисел
// // произведение 2-х чисел
// // частное 2-х чисел
// // возведение числа в энную степень
// // корень энной степени вычислить
// let cancel = true;
// let menu = ` Ваш выбор (0-6)": 
// 1. Сложение 2-х чисел
// 2. Разность 2-х чисел
// 3. Произведение 2-х чисел
// 4. Деление 2-х чисел
// 5. Возведение числа в n-степень
// 6. Вычисление корня n-степени
// 0. Отмена `;
// let num1, num2;
// let result;

// do {
//   let operation = prompt(menu, "0");
//   switch(operation){
//     case "1" :
//       num1 = +prompt("Первое число:");
//       num2 = +prompt("Второе число:");
//                       result = num1 + num2;
//       alert(`Сумма чисел = ${result}`);
//               break;
//     case "2": 
//       num1 = prompt("Первое число:");
//       num2 = prompt("Второе число:");
//       result = num1 - num2;
//       alert(`Разность чисел = ${result}`);

//               break; 
//     case "3":
//       num1 = prompt("Первое число:");
//       num2 = prompt("Второе число:");
//       result = num1 * num2;
//       alert(`Произведение чисел = ${result}`);
//               break;
//     case "4":
//       num1 = prompt("Первое число:");
//       num2 = prompt("Второе число:");
//       if (num2 != 0) {
//       result = num1 / num2;
//       alert(`Частное 2-х чисел = ${result .toFixed(2)}`);}
//       else { alert(`Делить на 0 нельзя}`);}

//               break;
//     case "5": 
//       num1 = prompt("Число:");
//       num2 = prompt("Степень:");

//       if (num2 < 0) { result = Math.pow(num1, num2).toFixed (2);}
//       else{
//       // result = num1 ** num2;
//       result = Math.pow(num1, num2);}
//       alert(`Число ${ num1} в степени ${num2} = ${result}`);

//               break;
//     case "6": num1 = prompt("Число:");
//       num2 = prompt("Степень корня:");
//       result = Math.pow(num1, 1 / num2 );
//       alert(`Корень степени ${num2} из числа ${num1} = ${result}`);
  
//       // if (num2 < 0) { result = Math.pow(num1, num2).toFixed(2); }
//       // else {
//       //   // result = num1 ** num2;
//       //   result = Math.pow(num1, num2);
//       // }
//       // alert(`Число ${num1} в степени ${num2} = ${result}`);

//               break;
//     case "0": 
//     case null: cancel = false;
//                break;
//     default: alert("Ошибка! Неверный выбор!!!");
        
//               break;
//   }
// } while (cancel);
  // *****Мини-калькулятор КОНЕЦ****



// Задача5 
// let i = 0 ;
// // цикл с предусловием
// while (i<=50){ i ++;
//   // if (i ==25){break;}
//   if (i == 25) { continue; }
//   console.log(i+ `\n`);}

// for (let i = 1; i <= 50; i++) {
//   if (i == 25) { continue; }
//   console.log(i + `\n`);}
// цикл с постусловием
// do {
//   console.log(i + `\n`);
//   i++;}
 
// while (i <= 50);
// while можно замнить на for (let i = 51 ;i <= 50; i ++){}



                //***Задача №3 НАЧАЛО***/

// let sum; // сумма вклада
// let percent; // годовой %
// let countYears; // количество лет
// let result; // итоговая строка с выводом

// let endWordYears = " "; // строка, содержащая "год(а)","лет"

// sum = Number(prompt("Сумма вклада:"));
// percent = Number(prompt("Годовой %:"));
// countYears = Number(prompt("Период вклада(лет)"));

// for (let i = 1; i <= countYears; i++) {
//   sum += sum * percent / 100;

// if (i != 11 && i % 10 == 1) {endWordYears = "год";}

//   else if ((i >= 5 && i <= 20) ||( i % 10 >= 5 && i % 10 <=9) || (i % 10) ==0)
//   { endWordYears = "лет";}

// else { endWordYears = "года";}
// result += `через ${i} ${endWordYears} сумма = ${sum.toFixed (2)}\n`;

// console.log(`через ${i} ${endWordYears} сумма = ${sum.toFixed (2)}`);}

// alert(result);

//***Задача № 3 КОНЕЦ***/

 


//***Задача  2 НАЧАЛО***/
// let a,b; //стороны трапеции
// let h; //высота трапеции
// let s; //искомая площадь трапеции

// let result = "";// строка с результатом

// a=+prompt("Сторона а:");
// b=+prompt("Сторона b:");
// h=+prompt("Высота h:");

// if (a > 0 && b > 0 && h > 0) { S = ((a + b) / 2) * h; result = `Площадь трапеции со сторонами a = ${a} , b = ${b}\n и высотой h = ${h} равна ${S}` }

// else{result = `Неверные данные!!!Площадь невозможно посчитать`;}
// alert(result);
             //***Задача №2 КОНЕЦ***/

             //***Задача №1 НАЧАЛО***/

//let num=100;
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
