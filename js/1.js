"use strict";

/*
 * Сервіс має три типи передплати, у кожного своя ціна в кредитах.
 * 1. Оголоси функцію getSubscriptionPrice з параметром type.
 * 2. За допомогою switch поверни з функції ціну залежно від type:
 *    - "starter" — 0;
 *    - "professional" — 20;
 *    - "organization" — 50;
 *    - будь-яке інше значення — "Invalid subscription type!".
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.
 */

// Твій код тут

function getSubscriptionPrice(type) {
  switch (type) {
    case "starter":
      return 0;
    case "professional":
      return 20;
    case "organization":
      return 50;
    default:
      return "Invalid subscription type!";
  }
}

console.log(getSubscriptionPrice("starter")); // 0
console.log(getSubscriptionPrice("professional")); // 20
console.log(getSubscriptionPrice("organization")); // 50
console.log(getSubscriptionPrice("premium")); // Invalid subscription type!
