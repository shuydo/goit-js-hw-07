const ingrids = ["Картошка","Грибы","Чеснок","Помидоры","Зелень","Приправы"];
const ulMain = document.querySelector("ul#ingredients");
const liEl = [];
ulMain.remove();
ingrids.forEach((el,i) => {
  liEl[i] = document.createElement("li");
  liEl[i].textContent = el;
  ulMain.appendChild(liEl[i])});
document.body.insertBefore(ulMain,null);
 