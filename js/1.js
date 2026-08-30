"use strict";

/*
 * У Sunny Coffee безкоштовна доставка лише для постійних клієнтів
 * з великим замовленням.
 * 1. Оголоси функцію getDeliveryPrice з двома параметрами:
 *    isMember (чи постійний клієнт) і orderSum (сума замовлення).
 * 2. За допомогою if...else поверни вартість доставки:
 *    - якщо клієнт постійний І сума замовлення не менша за 500 —
 *      доставка безкоштовна, поверни 0;
 *    - інакше — поверни 30.
 *    Обидві умови поєднай через &&.
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.
 */

// Твій код тут
function getDeliveryPrice(isMember, orderSum) {
  if (isMember && orderSum >= 500) {
    return 0;
  } else {
    return 30;
  }
}

console.log(getDeliveryPrice(true, 600)); // 0
console.log(getDeliveryPrice(true, 300)); // 30
console.log(getDeliveryPrice(false, 600)); // 30
