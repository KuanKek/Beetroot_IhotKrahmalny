// Норма

// 1. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки 
// шоколадок може купити користувач і скільки здачі у нього залишиться.
let userCash = +prompt("Скількі у вас грошей");

let priceForOneChocolate = +prompt("Скільки коштує одна шоколадка");

let counter = 0;

while (userCash >= priceForOneChocolate) {
    counter++;
    userCash = userCash - priceForOneChocolate;
}

alert("Ви можете купити " + counter + " шоколадок" + " У вас залишиться " + userCash + "грн");

// 2. Запитай у користувача тризначне число і виведи його задом наперед. 
let userNumber = +prompt("Введіть тризначне число");

let firstNumber = Math.floor(userNumber / 100);
let secondNumber = Math.floor((userNumber / 10) % 10);
let thirdNumber = userNumber % 10;

alert(`${thirdNumber}${secondNumber}${firstNumber}`);