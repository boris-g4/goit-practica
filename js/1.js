"use strict";

/*
 * Функція змінює розширення файлу.
 * fileName — ім'я файлу з розширенням (наприклад "app.js"),
 * ext — потрібне розширення (наприклад ".css").
 * 1. Оголоси функцію changeFileExtension з параметрами fileName і ext.
 * 2. Якщо fileName уже закінчується на ext — поверни fileName без змін.
 * 3. Інакше заміни розширення на ext:
 *    - циклом for знайди позицію крапки (символ ".") у fileName;
 *    - через slice візьми частину рядка до крапки — це ім'я без розширення;
 *    - додай до нього ext і поверни результат.
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.
 */

// Твій код тут

/* function changeFileExtension(fileName, ext) {
  if (fileName.endsWith(ext)) {
    return fileName;
  }
  for (let i = fileName.length - 1; i >= 0; i -= 1) {
    if (fileName[i] === ".") {
      return fileName.slice(0, i) + ext;
    }
  }
}
  */

function changeFileExtension(fileName, ext) {
  if (fileName.endsWith(ext)) {
    return fileName;
  }

  const dotIndex = fileName.lastIndexOf(".");

  if (dotIndex === -1) {
    return fileName + ext;
  }

  return fileName.slice(0, dotIndex) + ext;
}

console.log(changeFileExtension("app.css", ".js")); // app.js
console.log(changeFileExtension("styles.css", ".css")); // styles.css
console.log(changeFileExtension("index.js", ".html")); // index.html
