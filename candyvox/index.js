//

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
  card.addEventListener("click", function (i) {
    window.location.href = "./cards.html";
  });
});
