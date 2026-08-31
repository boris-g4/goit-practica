"use strict";

/*
 * Функція перевіряє, чи має файл потрібне розширення.
 * 1. Оголоси функцію checkFileExtension з двома параметрами:
 *    fileName (ім'я файлу з розширенням) і extension (розширення для перевірки).
 * 2. За допомогою if...else поверни повідомлення:
 *    - якщо fileName закінчується на extension — "File extension matches";
 *    - інакше — "File extension does not match".
 *    Для перевірки закінчення використай endsWith().
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.
 */

// Твій код тут

function checkFileExtension(fileName, extension) {
  const fileNameLowCase = fileName.toLowerCase();
  const extensionLowCase = extension.toLowerCase();
  if (fileNameLowCase.endsWith(extensionLowCase)) {
    return "File extension matches";
  }
  return "File extension does not match";
}

console.log(checkFileExtension("styles.css", ".css")); // File extension matches
console.log(checkFileExtension("styles.css", ".js")); // File extension does not match
console.log(checkFileExtension("app.js", ".js")); // File extension matches
