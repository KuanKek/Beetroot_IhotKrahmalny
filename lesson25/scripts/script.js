// Норма

//1. Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;

const userName = prompt("Enter your name");

alert("Привіт," + userName);

//2. Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;

let userYear= +prompt("Введіть свій рік народження");
const year = 2023;

let userAge = year - userYear;

alert("Вам " + userAge + " років");

//3. Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата

let sideSquare = +prompt("Введіть довжину сторони квадрату");

let perimeterSquare = 4 * sideSquare;

alert("Периметр квадрату: " + perimeterSquare);