"use strict";

/*
 * Sunny Coffee показує позиції замовлення одним рядком у чеку,
 * а в дужках — їхню кількість.
 * Функція buildReceiptLine(order) приймає масив назв напоїв.
 * 1. Оголоси функцію buildReceiptLine(order).
 * 2. З'єднай назви напоїв у рядок методом join() з роздільником ', '.
 * 3. Поверни рядок виду `Latte, Espresso, Cappuccino (3)` — склеєні напої,
 *    а в дужках кількість позицій (order.length).
 */

// Твій код тут

function buildReceiptLine(order) {
  return `${order.join(", ")} (${order.length})`;
}

console.log(buildReceiptLine(["Latte", "Espresso", "Cappuccino"])); // Latte, Espresso, Cappuccino (3)
console.log(buildReceiptLine(["Americano", "Raf"])); // Americano, Raf (2)
console.log(buildReceiptLine(["Mocha"])); // Mocha (1)
