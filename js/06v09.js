// Задание 6

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />

//     Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//     Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;

const input = document.querySelector("input");
// const lengthStr = Number(input.getAttribute("data-length"));

// console.log(input);
// console.log(lengthStr);
// console.log(input.id);

// const lengthStr = input[0];
// input.id = "validation-input.valid";
// console.log(input.id);
// console.log(input.textLength);
// if (input.textLength >= lengthStr) input.id = "valid-input";
// else input.id = "invalid-input";
// alert(input.textLength);
if (input.textLength >= Number(input.getAttribute("data-length")))
  input.className = "valid";
else input.className = "invalid";