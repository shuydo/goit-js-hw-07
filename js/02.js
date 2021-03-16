// Задание 2
// В HTML есть пустой список ul#ingredients.
// <ul id="ingredients"></ul>

// В JS есть массив строк.
// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
/* Напиши скрипт, который для каждого элемента массива ingredients
создаст отдельный li, после чего вставит все li за одну операцию в
список ul.ingredients. Для создания DOM-узлов используй
document.createElement(). */

// можно ли иначе разобраться с одновременным добавлением элементов?

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ulMain = document.querySelector("ul#ingredients");
const ulDummy = document.createElement("ul");

ulMain.replaceWith(ulDummy);

const liEl = [];
for (let i = 0; i < ingredients.length; i++) {
  liEl[i] = document.createElement("li");
  liEl[i].textContent = ingredients[i];
  ulMain.appendChild(liEl[i]);
}

ulDummy.replaceWith(ulMain);

// console.log(ulMain);
// console.log("ingredients");
// console.dir(ingredients);
