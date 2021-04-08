const input = document.getElementById("validation-input");
input.addEventListener("blur", () => {
  if (input.value.length === +input.getAttribute("data-length")) {
    return input.classList.toggle("valid")}
  input.classList.remove("valid")});
 