"use strict";

/*
 * Магазину потрібно перевіряти замовлення перед оформленням.
 * Є два значення: скільки товару доступно на складі й скільки замовлено.
 * 1. Оголоси змінну available зі значенням 100 (доступно на складі).
 * 2. Оголоси змінну ordered зі значенням 130 (кількість у замовленні).
 * 3. Оголоси змінну message.
 * 4. За допомогою if...else if...else признач message:
 *    - якщо ordered дорівнює 0 — "There are no products in the order!";
 *    - якщо ordered більше за available —
 *      "Your order is too large, there are not enough items in stock!";
 *    - інакше — "The order is accepted, our manager will contact you".
 * 5. Виведи message у консоль.
 */

// Твій код тут
const available = 100;
const ordered = 130;
let message;

if (ordered === 0) {
  message = "There are no products in the order!";
} else if (ordered > available) {
  message = "Your order is too large, there are not enough items in stock!";
} else {
  message = "The order is accepted, our manager will contact you";
}

console.log(message);
