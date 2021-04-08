let counterValue = 0;
document.querySelector('[data-action="decrement"]').addEventListener("click", ()=> {
  counterValue -= 1; document.querySelector("#value").textContent = counterValue});
document.querySelector('[data-action="increment"]').addEventListener("click", ()=> {
  counterValue += 1; document.querySelector("#value").textContent = counterValue});


































// let counterValue = 0;
// const valueEl = document.querySelector("#value");
// const decrementBtn = document.querySelector('button[data-action="decrement"]');
// const incrementBtn = document.querySelector('button[data-action="increment"]');

// const increment = () => {
//   counterValue += 1;
// };
// const decrement = () => {
//   counterValue -= 1;
// };
// const resetCounter = () => {
//   valueEl.textContent = counterValue;
// };

// decrementBtn.addEventListener("click", () => {
//   decrement();
//   resetCounter();
// });

// incrementBtn.addEventListener("click", () => {
//   increment();
//   resetCounter();
// });
