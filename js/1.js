"use strict";

// Задача: «Скидка в кино»
// Есть переменные:
let age = 19;
let isStudent = true;
let isWeekend = false;
let hasPromo = false;
/* Нужно определить, какую скидку получает человек.
Правила:
• Дети младше 12 лет получают скидку 50%.
• Подростки от 12 до 17 лет получают скидку 30%.
• Студенты от 18 до 25 лет получают скидку 20%.
• Если у человека есть промокод, он получает скидку 25%, но только 
если его обычная скидка меньше 25%.
• В выходные все скидки уменьшаются на 10 процентных пунктов.
• Но скидка никогда не может быть меньше 0.
• Люди старше 65 лет всегда получают скидку 40%, и выходные на эту скидку не влияют.
Нужно вывести, например:
"Скидка: 20%" */

// let price = 1;
// let priceTotal = price;
let discount = 0;

if (age < 12) {
  discount = 0.5;
}
if (age >= 12 && age <= 17) {
  discount = 0.3;
}
if (age >= 18 && age <= 25 && isStudent === true) {
  discount = 0.2;
}

if (hasPromo === true && discount < 0.25) {
  discount = 0.25;
}

if (isWeekend === true) {
  discount -= 0.1;
  if (discount < 0) {
    discount = 0;
  }
}

if (age > 65) {
  discount = 0.4;
}

// priceTotal = price * (1 - discount);

console.log("Скидка: ", discount * 100 + "%");
