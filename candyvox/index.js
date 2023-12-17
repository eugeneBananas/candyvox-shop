//
console.log(JSON.parse(localStorage.getItem("counter")));
localStorage.removeItem("selectedProduct");
if (JSON.parse(localStorage.getItem("counter") === null)){
  const cnt = 0;
  localStorage.setItem("counter", JSON.stringify(cnt));
}
else {
document.querySelector(".header__counter").textContent = JSON.parse(
  localStorage.getItem("counter"));
}

const headerBag = document.querySelector(".header__bag");
headerBag.addEventListener("click", () => {
  window.location.href = "./korzina.html";
});

localStorage.removeItem ("selectedProduct")
// Инфа для всех страниц
const contacts = document.querySelector(".header__li-element_contacts");
const headerCheckbox = document.querySelector(".header__checkbox");
contacts.addEventListener("click", () => {
  headerCheckbox.checked = false;
}
)
const logoHeader = document.querySelector('.logo_header')
logoHeader.addEventListener('click', () => {
    window.location.href = "./index.html";
})
;

//
const cards = document.querySelectorAll(".gallery__card");
const arrItems = [
  "cookie",
  "drazhe",
  "candy",
  "donut",
  "moti",
  "cupcake",
  "marmelad",
  "other",
];

cards.forEach((card, i) => {
  const element = arrItems[i];
  console.log(element)
  card.addEventListener("click", function (i) {
    console.log(arrItems[i])
    localStorage.setItem("selectedProduct", JSON.stringify(element));
    window.location.href = "./cards.html";
  });
});
