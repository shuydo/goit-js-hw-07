const edgeInit = 30; // px - ребро квадрата
const ref = {
  box: document.querySelectorAll(".box"),
  boxes: document.getElementById("boxes"),
  input: document.querySelector("input"),
  rendBtn: document.querySelector('[data-action="render"]'),
  destBtn: document.querySelector('[data-action="destroy"]'),
};
ref.input.value = "";
boxes.remove(); // ! здесь и ч-з строку работает без ref ! не понятно почему
ref.destBtn.addEventListener("click", () => {
  boxes.innerHTML = "";
  ref.input.value = "";
  ref.box.forEach(el => el.remove());
});
ref.rendBtn.addEventListener("click", () => {
  for (let i = 0; i < ref.input.value; i++) {
    let color = Math.trunc(Math.random() * (Math.pow(2, 24) - 1));
    let recEl = document.createElement("div");
    recEl.style.width = edgeInit-2 + i * 10 + "px";
    recEl.style.height = edgeInit + i * 10 + "px";
    recEl.style.backgroundColor = "#" + color.toString(16);
    recEl.style.border = "1px dotted grey";
    ref.boxes.append(recEl);
  }
  document.body.append(ref.boxes);
});
 