"use strict";

/*
 * Функція приводить рядок до потрібного регістру.
 * 1. Оголоси функцію normalizeInput з двома параметрами:
 *    input (рядок для перетворення) і to (режим: "upper" або "lower").
 * 2. Поверни з функції:
 *    - якщо to дорівнює "upper" — рядок input у верхньому регістрі;
 *    - інакше — рядок input у нижньому регістрі.
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.
 */

// Твій код тут
function normalizeInput(input, to) {
  if (to === "upper") {
    return input.toUpperCase();
  }
  return input.toLowerCase();
}

console.log(normalizeInput("Big SALE", "lower")); // big sale
console.log(normalizeInput("Big SALE", "upper")); // BIG SALE
console.log(normalizeInput("Hello World", "upper")); // HELLO WORLD
