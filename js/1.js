"use strict";

/*
 * У Sunny Coffee пропозиція «Замовити ще» показується, лише коли
 * кав'ярня відкрита і це не перше замовлення клієнта.
 * 1. Оголоси функцію getReorderMessage з двома параметрами:
 *    isOpen (чи відкрита кав'ярня) і isFirstOrder (чи перше замовлення).
 * 2. За допомогою if...else поверни повідомлення:
 *    - якщо кав'ярня відкрита І замовлення НЕ перше — поверни "Order again?";
 *    - інакше — поверни "No offer".
 *    Для умови «не перше» використай оператор !.
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.
 */

// Твій код тут
function getReorderMessage(isOpen, isFirstOrder) {
  if (isOpen && !isFirstOrder) {
    return "Order again?";
  } else {
    return "No offer";
  }
}

console.log(getReorderMessage(true, false)); // Order again?
console.log(getReorderMessage(true, true)); // No offer
console.log(getReorderMessage(false, false)); // No offer
