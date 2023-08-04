// Норма

// 1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.


const userNumber = prompt("Введіть п'ятирозрядне число:");

const userNumberReversed = userNumber.split("").reverse().join("");

if (userNumber === userNumberReversed) {
    alert("Це число є паліндромом.");
} else {
    alert("Це число не є паліндромом.");
}




// 2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

let userSpended = +prompt("Введіть суму покупки");

if (userSpended >= 200 && userSpended <= 300) {
    let discont = (userSpended * 3) / 100;
    userSpended = userSpended - discont
    alert("До сплати " + userSpended);
} else if (userSpended > 300 && userSpended <= 500) {
    let discont = (userSpended * 5) / 100;
    userSpended = userSpended - discont
    alert("До сплати " + userSpended);
} else if (userSpended > 500) {
    let discont = (userSpended * 7) / 100;
    userSpended = userSpended - discont
    alert("До сплати " + userSpended);
} else {
    alert("Знишки немає");
}




// 3. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. 
// При цьому також порахуй, скільки з них парних і непарних. 
// Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.


let inputNumbers = prompt("Введіть 10 чисел, розділені комою (наприклад: 1,-2,0,5,6,7,-8,-9,10,0)");
let numbersArray = inputNumbers.split(",").map(Number);

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;


for (let i = 0; i < numbersArray.length; i++) {
  const number = numbersArray[i];

  if (number > 0) {
    positiveCount++;
  } else if (number < 0) {
    negativeCount++;
  } else {
    zeroCount++;
  }

  if (number % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}

console.log(`Додатні: ${positiveCount}`);
console.log(`Від'ємні: ${negativeCount}`);
console.log(`Нулів: ${zeroCount}`);
console.log(`Парні: ${evenCount}`);
console.log(`Непарні: ${oddCount}`);



// 4. Зацикли відображення днів тижня таким чином: «День тижня. 
// Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

const daysOfWeek = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
let dayCounter = 0;

while (confirm(`${daysOfWeek[dayCounter]}. Хочеш побачити наступний день?`)) {
  dayCounter = (dayCounter + 1) % daysOfWeek.length;
}
