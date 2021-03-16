// Задание 8 - дополнительное, выполнять не обязательно

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит
// количество элементов в input и нажимает кнопку Создать, после чего
// рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов
// очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount -
// число. Функция создает столько div, сколько указано в amount и добавляет
// их в div#boxes.

// Каждый созданный div:

//     Имеет случайный rgb цвет фона
//     Размеры самого первого div - 30px на 30px
//     Каждый следующий div после первого, должен быть шире и выше
// предыдущего на 10px

// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

const ref = {
  input: document.querySelector("input"),
  renBtn: document.querySelector('[data-action="render"]'),
  desBtn: document.querySelector('[data-action="destroy"]'),
  boxDiv: document.getElementById("boxes"),
  mainDiv: document.createElement("div"),
};

const recEl = document.createElement("div");
const edgeInit = 30;

ref.renBtn.addEventListener("click", createBtn);
ref.desBtn.addEventListener("click", destroyBoxes);

function createBtn(event) {
  createBoxes(ref.input.value);
}

function createBoxes(amount) {
  const mainDiv = document.createElement("div");

  for (let i = 0; i < ref.input.value; i++) {
    let color = Math.trunc(Math.random() * (Math.pow(2, 24) - 1));
    let recEl = document.createElement("div");

    recEl.style.width = [edgeInit + i * 10].toString() + "px";
    recEl.style.height = [edgeInit + i * 10].toString() + "px";
    recEl.style.backgroundColor = "#" + color.toString(16);
    recEl.style.outline = "1px solid black";
    // recEl.style.margin = "0 2px";
    ref.mainDiv.append(recEl);
  }

  ref.boxDiv.append(ref.mainDiv);
}

function destroyBoxes() {
  ref.boxDiv.removeChild(ref.mainDiv);
  while (ref.mainDiv.firstChild) {
    ref.mainDiv.removeChild(ref.mainDiv.lastChild);
  }
}
