"use strict";

/*
 * Функція шукає перше число в діапазоні від start до end включно,
 * яке ділиться на divisor без остачі. Оператор break не використовуй.
 * 1. Оголоси функцію findDivisible з параметрами start, end і divisor.
 * 2. Циклом for пройди числа від start до end включно.
 * 3. Якщо чергове число ділиться на divisor без остачі (i % divisor === 0),
 *    одразу поверни його через return — це завершить і цикл, і функцію.
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.
 */

// Твій код тут

function findDivisible(start, end, divisor) {
  let i;
  for (i = start; i <= end; i += 1) {
    if (i % divisor === 0) {
      return i;
    }
  }
}

console.log(findDivisible(2, 6, 5)); // 5
console.log(findDivisible(8, 17, 3)); // 9
console.log(findDivisible(16, 35, 7)); // 21
