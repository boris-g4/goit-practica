"use strict";

/*
 * У програмі лояльності Sunny Coffee за 1-ше замовлення клієнт отримує
 * 1 бал, за 2-ге — 2 бали, за 3-тє — 3, і так далі.
 * 1. Оголоси функцію getLoyaltyPoints з параметром orders
 *    (кількість замовлень клієнта).
 * 2. Створи змінну total зі значенням 0 (сума балів).
 * 3. Циклом for пройди номери замовлень від 1 до orders включно
 *    і додай кожен номер до total.
 * 4. Поверни total.
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.
 */

// Твій код тут
function getLoyaltyPoints(orders) {
  let total = 0;
  for (let i = orders; i > 0; i -= 1) {
    total += i;
  }
  return total;
}

console.log(getLoyaltyPoints(3)); // 6
console.log(getLoyaltyPoints(5)); // 15
console.log(getLoyaltyPoints(6)); // 0
