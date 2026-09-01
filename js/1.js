"use strict";

/*
 * Функція шукає перше число в проміжку від start до end,
 * яке ділиться на 5 без залишку.
 * 1. Оголоси функцію findMultiple з параметрами start і end.
 * 2. Створи змінну number — сюди запишемо результат.
 * 3. Циклом for пройди числа від start до end. Якщо чергове число
 *    ділиться на 5 без залишку (i % 5 === 0) — збережи його в number
 *    і перерви цикл оператором break.
 * 4. Поверни number.
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.
 */

// твій код
function findMultiple(start, end) {
  let number;
  let i;
  for (i = start; i <= end; i += 1) {
    if (i % 5 === 0) {
      number = i;
      break;
    }
  }
  return number;
}

console.log(findMultiple(6, 17)); // 10
console.log(findMultiple(17, 25)); // 20
console.log(findMultiple(2, 11)); // 5
