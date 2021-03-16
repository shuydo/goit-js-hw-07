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

const input = document.getElementById("validation-input");

input.addEventListener("focus", onInputFocus);
input.addEventListener("blur", onInputBlur);


function colorizeInputBox(){
    if (input.textLength >= Number(input.getAttribute("data-length")))
      input.className = "valid";
    else input.className = "invalid";}

colorizeInputBox();

function onInputFocus() {
  colorizeInputBox();
}
function onInputBlur() {
  colorizeInputBox();
}
// input.addEventListener("input", onInputChange);
// function onInputChange(event) {
//     console.log(event.currentTarget.value);
//   }

