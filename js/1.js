"use strict";

/*
 * У клініці SmileCare пацієнтів ділять на дорослих і дитячих за віком.
 * 1. Оголоси змінну age зі значенням віку пацієнта 25.
 * 2. Оголоси змінну category.
 * 3. За допомогою if...else перевір: якщо age >= 18,
 *    признач category значення "adult", інакше — "child".
 * 4. Виведи category у консоль.
 */

// Твій код тут
const age = 25;
let category;
if (age >= 18) {
  category = "adult";
} else {
  category = "child";
}

console.log(category);
