"use strict";

/*
 * У клініці SmileCare огляд безкоштовний для дітей і пенсіонерів.
 * 1. Оголоси функцію getCheckupPrice з параметром age (вік пацієнта).
 * 2. За допомогою if...else поверни вартість огляду:
 *    - якщо вік менший за 18 АБО більший за 65 — огляд безкоштовний, поверни 0;
 *    - інакше — поверни 300.
 *    Обидві умови поєднай через ||.
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.
 */

// Твій код тут

function getCheckupPrice(age) {
  if (age < 18 || age > 65) {
    return 0;
  } else {
    return 300;
  }
}

console.log(getCheckupPrice(12)); // 0
console.log(getCheckupPrice(70)); // 0
console.log(getCheckupPrice(35)); // 300
