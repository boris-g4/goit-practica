"use strict";

/*
 * Функція рахує суму всіх цілих чисел від 1 до заданого числа включно.
 * Наприклад, для 3 це 1 + 2 + 3 = 6.
 * 1. Оголоси функцію sumUpTo з параметром number.
 * 2. Створи змінну count зі значенням 1 (поточне число)
 *    і змінну total зі значенням 0 (сума).
 * 3. За допомогою while, поки count не більше за number:
 *    - додай count до total;
 *    - збільш count на 1.
 * 4. Поверни total.
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.
 */

// Твій код тут

function sumUpTo(number) {
  let count = 1;
  let total = 0;
  while (count <= number) {
    total = total + count;
    count = count + 1;
  }
  return total;
}

console.log(sumUpTo(3)); // 6
console.log(sumUpTo(5)); // 15
console.log(sumUpTo(0)); // 0
