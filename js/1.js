"use strict";

/*
 * У Sunny Coffee вартість доставки залежить від суми замовлення.
 * 1. Оголоси функцію getDeliveryPrice з параметром orderSum.
 * 2. За допомогою if...else if...else поверни з функції вартість доставки:
 *    - якщо orderSum не менше 500 — доставка безкоштовна, поверни 0;
 *    - якщо orderSum не менше 200 — поверни 30;
 *    - інакше — поверни 50.
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.
 */

// Твій код тут

function getDeliveryPrice(orderSum) {
  if (orderSum >= 500) {
    return 0;
    return getDeliveryPrice;
  } else if (orderSum >= 200) {
    return 30;
  } else {
    return 50;
  }
}

console.log(getDeliveryPrice(600)); // 0
console.log(getDeliveryPrice(300)); // 30
console.log(getDeliveryPrice(150)); // 50
