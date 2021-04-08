const mainLi = document.querySelectorAll(".item");
console.log(`В списке ${mainLi.length} категории:`);
mainLi.forEach((el,i) => {
  let text = el.querySelector("h2").outerHTML;
  console.log(i + 1 + ":");
  console.log(`Категория:    ${text.substr(0, text.length - 5).slice(4)}`);
  console.log(`Кол-во эл-ов: ${el.querySelectorAll("li").length}`);
}); 
