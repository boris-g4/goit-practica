"use strict";

/*
 * SmileCare тримає чергу записів на сьогодні — масив імен пацієнтів.
 * Функція checkQueue(queue) перевіряє її через довжину масиву.
 * 1. Оголоси функцію checkQueue(queue).
 * 2. Якщо queue.length === 0 — поверни 'Записів немає'.
 * 3. Інакше — поверни рядок 'Записів у черзі: N', де N — кількість записів.
 */

// Твій код тут
function checkQueue(queue) {
  if (queue.length === 0) {
    return "Записів немає";
  } else {
    return `Записів у черзі: ${queue.length}`;
  }
}
console.log(checkQueue(["Alex", "Sam", "Kim"])); // Записів у черзі: 3
console.log(checkQueue(["Max"])); // Записів у черзі: 1
console.log(checkQueue([])); // Записів немає
console.log(checkQueue(["Alex", "Sam", "Kim", "Max", "Lee"])); // Записів у черзі: 5
