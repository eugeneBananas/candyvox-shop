localStorage.removeItem("selectedProduct");

const button = document.querySelector(".button__inpt");
const nameq = document.querySelector(".name-inpt");
const password = document.querySelector(".pass-inpt");
const span = document.querySelector('.invis-inpt')
console.log(password);
button.addEventListener("click", (e) => {
  if (nameq.value === "Админ" && password.value === "123") {
    span.classList.add('invis-inpt')
    window.location.href = "./index.html";
  }
  else{
    span.classList.remove('invis-inpt')
  }
});
