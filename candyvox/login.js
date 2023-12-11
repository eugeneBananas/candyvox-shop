const button = document.querySelector(".button__inpt");
const nameq = document.querySelector(".name__inpt");
const password = document.querySelector(".pass__inpt");
console.log(button);
button.addEventListener("click", (e) => {
  if (nameq.value === "Админ" && password.value === "123") {
    window.location.href = "./index.html";
  }
});
