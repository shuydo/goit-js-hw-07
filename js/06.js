// Задание 6

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его
// содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />

//     Сколько символов должно быть в инпуте, указывается в его атрибуте
// data-length.
//     Если введено подходящее количество, то border инпута становится
// зеленым, если неправильное - красным.

// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// ====================================
const input = document.getElementById("validation-input");
const colorizeInputBox = () => {
  if (input.textLength === Number(input.getAttribute("data-length")))
    input.className = "valid"; else input.className = "invalid"};
input.addEventListener("blur", colorizeInputBox);
colorizeInputBox();
// ====================================
// const inputRef = document.getElementById("validation-input");
// const inputLength = inputRef.getAttribute("data-length");
// console.log(inputRef);
// console.log(inputLength);
// inputRef.addEventListener("blur", onInputBlur);
// function onInputBlur() {
//   console.log(typeof inputRef.value.length,typeof inputLength,typeof Number(inputLength),'blur func');
//   if (inputRef.value.length === Number(inputLength)) {
//     console.log(inputRef.value.length,'valid');
//     inputRef.classList.add("valid");
//     inputRef.classList.remove("invalid");
//   }
//   if (inputRef.value.length !== Number(inputLength)) {
//     inputRef.classList.add("invalid");
//     inputRef.classList.remove("valid");
//   }
//   if (inputRef.value.length === 0) {
//     inputRef.classList.remove("valid");
//     inputRef.classList.remove("invalid");
//   }
// }
// ====================================

// input.addEventListener("focus", colorizeInputBox);

// function colorizeInputBox(){
//     if (input.textLength >= Number(input.getAttribute("data-length")))
//       input.className = "valid";
//     else input.className = "invalid";}

// function onInputFocus() {
//   colorizeInputBox();
// }
// function onInputBlur() {
//   colorizeInputBox();
// }
// input.addEventListener("input", onInputChange);
// function onInputChange(event) {
//     console.log(event.currentTarget.value);
//   }
