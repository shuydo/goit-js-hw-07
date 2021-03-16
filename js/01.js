/*Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в ul#categories,
то есть элементов li.item. Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, найдет и выведет
в консоль текст заголовка элемента (тега h2) и количество элементов в 
категории (всех вложенных в него элементов li).

Например для первой категории получится:

    Категория: Животные
    Количество элементов: 4
*/

const mainLi = document.querySelectorAll(".item");

const h2_1text = mainLi[0].querySelector("h2").outerHTML;
const h2_1 = h2_1text.substr(0, h2_1text.length - 5).slice(4);
const catLi_1 = mainLi[0].querySelectorAll("li");

// ========================
// h2_1.textContent='Shuydo';
// ========================

const h2_2text = mainLi[1].querySelector("h2").outerHTML;
const h2_2 = h2_2text.substr(0, h2_2text.length - 5).slice(4);
const catLi_2 = mainLi[1].querySelectorAll("li");

const h2_3text = mainLi[2].querySelector("h2").outerHTML;
const h2_3 = h2_3text.substr(0, h2_3text.length - 5).slice(4);
const catLi_3 = mainLi[2].querySelectorAll("li");

console.log(`В списке следующее количество категорий: ${mainLi.length}.`);
console.log("1:");
console.log(`Категория: ${h2_1}`);
console.log(`Количество элементов: ${catLi_1.length}`);
console.log("2:");
console.log(`Категория: ${h2_2}`);
console.log(`Количество элементов: ${catLi_2.length}`);
console.log("3:");
console.log(`Категория: ${h2_3}`);
console.log(`Количество элементов: ${catLi_3.length}`);
