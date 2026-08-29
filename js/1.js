"use strict";

/*
 * Функція перевіряє пароль користувача й повідомляє про результат.
 * Правильний пароль уже збережено у змінній correctPassword.
 * 1. Оголоси функцію checkPassword з параметром password.
 * 2. За допомогою тернарного оператора поверни з функції:
 *    - "Access granted", якщо password збігається з correctPassword;
 *    - "Access denied, wrong password!" — в іншому випадку.
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.
 */

const correctPassword = "jqueryismyjam";

// Твій код тут

/*function checkPassword(password) {
  return correctPassword === password
    ? "Access granted"
    : "Access denied, wrong password!";
}
*/

const checkPassword = (password) =>
  correctPassword === password
    ? "Access granted"
    : "Access denied, wrong password!";

console.log(checkPassword("jqueryismyjam")); // Access granted
console.log(checkPassword("angul4r1sl1f3")); // Access denied, wrong password!
console.log(checkPassword("r3actsux")); // Access denied, wrong password!
