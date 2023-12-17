localStorage.removeItem("selectedProduct");

const contacts = document.querySelector(".header__li-element_contacts");
const headerCheckbox = document.querySelector(".header__checkbox");
contacts.addEventListener("click", () => {
  headerCheckbox.checked = false;
});
const logoHeader = document.querySelector(".logo_header");
logoHeader.addEventListener("click", () => {
  window.location.href = "./index.html";
});

if (JSON.parse(localStorage.getItem("counter") === null)){
  const cnt = 0;
  localStorage.setItem("counter", JSON.stringify(cnt));
}
else {
document.querySelector(".header__counter").textContent = JSON.parse(
  localStorage.getItem("counter"));
}

const inside = document.querySelector(".purchase__container");
document.querySelector(".purchase__kolvo").textContent = 0;
const deleteCard = document.querySelector(".purchase__delete-card");
const purchaseButton = document.querySelector(".purchase__button")

const func = () => {
  const elements = inside.querySelectorAll(".purchase__card");
  for (let i = 0; i < elements.length; i++) {
    elements[i].parentNode.removeChild(elements[i]); // удаление объекта
  }

  if (localStorage.getItem("items")) {
    let items = JSON.parse(localStorage.getItem("items"));
    let cnt = JSON.parse(localStorage.getItem("counter"));
    console.log(1);
    items.forEach((cardEl) => {
      if (cardEl.quantity != 0 && Object.entries(cardEl).length != 0) {
        console.log(cardEl);
        const container = document.querySelector(".purchase__template").content;
        const card = container.querySelector(".purchase__card").cloneNode(true);
        const image = card.querySelector(".purchase__image");
        image.src = cardEl.image;
        const title = card.querySelector(".purchase__name");
        title.textContent = cardEl.title;
        const cost = card.querySelector(".purchase__cost");
        cost.textContent = cardEl.cost;
        const kolvo = card.querySelector(".purchase__count");
        let kolichestvo = card.querySelector(".purchase__count");
        console.log(kolvo, kolichestvo)
        if (cardEl.kolvo === "Р/100гр.") {
          kolichestvo.textContent = "" + (cardEl.quantity * 100) + 'гр.';
        }
        else{
          kolichestvo.textContent = "" + cardEl.quantity + 'шт ';
        }
        const total = card.querySelector(".purchase__total");
        total.textContent =
          parseInt(cardEl.quantity) * parseInt(cost.textContent);
        document.querySelector(".purchase__kolvo").textContent =
          parseInt(total.textContent) +
          parseInt(document.querySelector(".purchase__kolvo").textContent);
        const deleteA = card.querySelector(".purchase__delete");

        deleteA.addEventListener("click", () => {
          card.parentNode.removeChild(card);
          let cnt = JSON.parse(localStorage.getItem("counter"));
          const items = JSON.parse(localStorage.getItem("items"));
          items.forEach((item) => {
            if (item.title == title.textContent) {
              item.quantity = 0;
              console.log(item.quantity);
              console.log(item);
              cnt = cnt - parseInt(cardEl.quantity);
              card.querySelector(".purchase__total").textContent =
                parseInt(card.querySelector(".purchase__total").textContent) -
                parseInt(item.cost);
                console.log(cardEl.quantity)
              document.querySelector(".purchase__kolvo").textContent =
                parseInt(
                  document.querySelector(".purchase__kolvo").textContent
                ) -
                parseInt(cost.textContent) *  parseInt(cardEl.quantity)
            }
          });
          localStorage.setItem("items", JSON.stringify(items));
          document.querySelector(".header__counter").textContent = cnt;
          localStorage.setItem("counter", JSON.stringify(cnt));
        });

        inside.append(card);
      }
    });
  }
};

func();

deleteCard.addEventListener("click", () => {
  localStorage.removeItem("items");
  localStorage.removeItem("counter");
  document.querySelector(".header__counter").textContent = 0;
  document.querySelector(".purchase__kolvo").textContent = 0;
  func();
});

purchaseButton.addEventListener("click", () => {
  alert("Вы приобрели товары на сумму " + document.querySelector(".purchase__kolvo").textContent + " рублей")
  localStorage.removeItem("items");
  localStorage.removeItem("counter");
  document.querySelector(".header__counter").textContent = 0;
  document.querySelector(".purchase__kolvo").textContent = 0;
  func();
})