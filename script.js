// // Створіть змінну, що симулює вибір варіанта зі списку. Виводьте повідомлення залежно 
// від обраного варіанта: "Кава", "Чай" або "Сік". Використайте switch

// let drink =  "fresh";
// let message;
// const tea ="Чай";
// const coffee ="Кава";
// const fresh ="Сік";


// switch(drink){
//     case "tea":
//         message = "Вибрано напій: Чай"
//     break;

//     case "coffee":
//     message = "Вибрано напій: Кава"
//     break
//     case "fresh":
//         message = "Вибрано напій: Сік";
//         break
//         default: 
//         message = "Напій не вибрано, спробуйте знову"
//         break
// }
// console.log(message)



// Створіть змінну для зберігання введеного рядка, який може бути днем тижня.
// Якщо це робочий день — виведіть повідомлення про робочий день, якщо вихідний — про вихідний.

// let dayOfWeek = "Четвер";
// let message;

// switch (dayOfWeek) {
//     case "Понеділок":
//         message = "Робочий день! Не проспи!"
//         break;

//     case "Вівторок":
//         message = "Робочий день! Не проспи!"
//         break
//     case "Середа":
//         message = "Робочий день! Не проспи!";
//         break
//     case "Четвер":
//         message = "Робочий день! Не проспи!";
//         break
//     case "П'ятниця":
//         message = "Робочий день! Не проспи!";
//         break
//     case "Субота":
//         message = "Вихідний, можна спати";
//         break
//         case "Неділя":
//             message = "Вихідний, можна спати";
//             break

// }
// console.log(message)


// // Створіть змінну для зберігання номера місяця. 
// За номером місяця визначайте пору року і виводьте відповідне повідомлення.

// let monthNum = "1";
// let message;

// switch (monthNum) {
//     case "3" || "4" ||"5":
//         message = "Весна"
//         break;

//     case "6" || "7" ||"8":
//         message = "Літо"
//         break
//     case "9" || "10" ||"11":
//         message = "Робочий день! Не проспи!";
//         break
//     case "12" || "1" ||"2":
//         message = "Робочий день! Не проспи!";
//         break
 

// }
// console.log(message)


// Створіть змінну для зберігання назви кольору. 
// Виводьте повідомлення відповідно до вибраного кольору: якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".


// let color = "red";
// let message;

// switch (color) {
//     case "red":
//         message = "Stop"
//         break;

//     case "green":
//         message = "Go"
//         break
//     case "yellow":
//         message = "Wait";
//         break

 

// }
// console.log(message)


// Створіть змінні для зберігання двох чисел та оператора (як у списку select). 
// Виконайте відповідну операцію та виведіть результат. У випадку ділення на нуль — виведіть попередження.

let num1 = 1;
let num2 = 0; 
let operator = '/'; 
let answer; 
if (num2 === 0 && operator ==='/') { 
    console.log("You can't do it"); 
} else { 
    switch (operator) { 
        case '/': 
            answer = num1 / num2 
            break; 
        case '*': 
            answer = num1 * num2 
            break; 
        case '+': 
            answer = num1 + num2 
            break; 
        case '-': 
            answer = num1 - num2 
            break; 
        default: 
            break; 
    } 
}