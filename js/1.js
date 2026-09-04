"use strict";

/*
 * SmileCare зберігає розклад прийомів лікаря на сьогодні —
 * масив годин, коли призначені пацієнти.
 * 1. Оголоси масив appointments зі значеннями: '09:00', '11:30', '14:00', '16:30'.
 * 2. Дістань перший прийом (перший елемент) і збережи у змінну firstAppointment.
 * 3. Дістань останній прийом через appointments.length - 1
 *    і збережи у змінну lastAppointment.
 * 4. Виведи повідомлення у форматі:
 *    Перший прийом: 09:00, останній: 16:30
 * 5. Останній пацієнт перепризначився на 17:00 — заміни останній
 *    елемент масиву на '17:00' і виведи оновлений масив.
 * 6. Якщо прийомів більше ніж 3 — виведи 'Щільний день',
 *    інакше — виведи 'День вільний'.
 */

// Твій код тут
const appointments = ["09:00", "11:30", "14:00", "16:30"];
const firstAppointment = appointments[0];
const lastAppointment = appointments[appointments.length - 1];
console.log(`Перший прийом: ${firstAppointment}, останній: ${lastAppointment}`);
appointments[appointments.length - 1] = "17:00";
console.log(appointments);
if (appointments.length > 3) {
  console.log("Щільний день");
} else {
  console.log("День вільний");
}
