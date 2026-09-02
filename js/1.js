"use strict";

/*
 * Магазин має партнерську програму: знижка залежить від того,
 * скільки всього кредитів клієнт витратив за весь час.
 * Окремо: VIP-клієнти одразу отримують найбільшу знижку.
 * 1. Оголоси функцію getDiscount з двома параметрами:
 *    totalSpent (сума витрат) і isVip (чи клієнт VIP).
 * 2. За допомогою if...else if...else поверни знижку:
 *    - якщо totalSpent 50000 і більше АБО клієнт VIP — 0.1 (золотий партнер);
 *    - від 20000 до 50000 — 0.05 (срібний партнер);
 *    - від 5000 до 20000 — 0.02 (бронзовий партнер);
 *    - менше 5000 — 0 (базовий партнер).
 *    Для першої умови поєднай два випадки через ||.
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.
 */

// Твій код тут

function getDiscount(totalSpent, isVip) {
  if (totalSpent >= 50000 || isVip) {
    return 0.1;
  } else if (totalSpent >= 20000) {
    return 0.05;
  } else if (totalSpent >= 5000) {
    return 0.02;
  } else if (totalSpent < 5000) {
    return 0;
  }
}

console.log(getDiscount(137000, false)); // 0.1
console.log(getDiscount(1300, true)); // 0.1
console.log(getDiscount(46900, false)); // 0.05
console.log(getDiscount(8250, false)); // 0.02
console.log(getDiscount(1300, false)); // 0
