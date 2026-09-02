"use strict";

/*
 * Sunny Coffee показує меню, лише якщо в ньому є напої.
 * 1. Оголоси масив menu з назвами напоїв:
 *    'Espresso', 'Latte', 'Cappuccino', 'Americano', 'Raf'.
 * 2. Виведи в консоль кількість напоїв у форматі: Напоїв у меню: 5
 * 3. Якщо в меню є хоча б один напій — виведи 'Меню доступне',
 *    інакше — виведи 'Меню порожнє'.
 */

// Твій код тут
const name = ["Espresso", "Latte", "Cappuccino", "Americano", "Raf"];
if (name.length >= 1) {
  console.log("Меню доступне");
} else {
  console.log("Меню порожнє");
}
console.log("Напоїв у меню:", name.length);
