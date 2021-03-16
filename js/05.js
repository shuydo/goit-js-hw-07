// Напиши скрипт который, при наборе текста в инпуте input#name-input
// (событие input), подставляет его текущее значение в span#name-output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

// Работает лишь после обновления страницы. А как сделать более динамично?

const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
// if (input.value === "") span.textContent = "незнакомец";
// else span.textContent = input.value;

// input.addEventListener("input", onInputChange);

// function onInputChange(event) {
//     console.log(event.currentTarget.value);
//       span.textContent =
//       input.value === ""
//         ? (span.textContent = "незнакомец")
//         : (span.textContent = event.currentTarget.value);
// }
input.addEventListener("input", onInputChange);
function onInputChange(event) {
    // console.log(event.currentTarget.value);
    span.textContent =
      input.value === ""
        ? (span.textContent = "незнакомец")
        : (span.textContent = event.currentTarget.value);
  }
