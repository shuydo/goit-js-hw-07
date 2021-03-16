// Задание 7

// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

{/* <input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span> */}
// Задание 7

// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет инлайн - стиль
// span#text обновляя свойство font - size.В результате при перетаскивании
// ползунка будет меняться размер текста.

const input = document.getElementById("font-size-control");
const span = document.getElementById("text");

input.addEventListener("input", handleInputRange);
function handleInputRange(event) {
  span.style.fontSize = 12+event.currentTarget.value/10 + "px";
  // console.log(12+event.currentTarget.value/10 + "px");
}
