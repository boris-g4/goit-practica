"use strict";

/*
 * Дата народження зберігається у форматі "РРРР-ММ-ДД", наприклад "2024-03-15".
 * Рік — це перші чотири символи рядка.
 * 1. Оголоси функцію getBirthYearMessage з параметром birthDate.
 * 2. За допомогою slice() візьми рік — перші чотири символи birthDate —
 *    і збережи його у змінну year.
 * 3. Поверни рядок виду "You were born in <рік>".
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.
 */

// Твій код тут
function getBirthYearMessage(birthDate) {
  const year = birthDate.slice(0, 5);
  return "You were born in " + year;
}

console.log(getBirthYearMessage("2024-03-15")); // You were born in 2024
console.log(getBirthYearMessage("1998-12-01")); // You were born in 1998
console.log(getBirthYearMessage("2010-07-20")); // You were born in 2010
