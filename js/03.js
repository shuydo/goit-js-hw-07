// Задание 3

// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>

// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

//     Все элементы галереи должны добавляться в DOM за одну операцию вставки.
//     Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

// const images = [
//   {
//     url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ulMain = document.querySelector("ul#gallery");
const ulDummy = document.createElement("ul");

ulMain.replaceWith(ulDummy);

const imgItem = [];
const imgEl = [];
for (let i = 0; i < images.length; i++) {
  imgItem[i] = document.createElement("li");
  imgEl[i] = document.createElement("img");
  imgEl[i].src = images[i].url;
  imgEl[i].alt = images[i].alt;
  imgEl[i].height = 300;
  imgItem[i].appendChild(imgEl[i]);
  ulMain.appendChild(imgItem[i]);
}
ulDummy.replaceWith(ulMain);

// console.log(ulMain);
// console.log(imgEl[0]);
// console.log(imgItem[0]);
