if (JSON.parse(localStorage.getItem("counter") != 0))
  document.querySelector(".header__counter").textContent = JSON.parse(
    localStorage.getItem("counter")
  );
else {
  document.querySelector(".header__counter").textContent = 0;
}
const inside = document.querySelector(".purchase__container");
document.querySelector(".purchase__kolvo").textContent = 0;
const deleteCard = document.querySelector(".purchase__delete-card");

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
        console.log(cardEl.cost);
        const container = document.querySelector(".purchase__template").content;
        const card = container.querySelector(".purchase__card").cloneNode(true);
        const image = card.querySelector(".purchase__image");
        image.src = cardEl.image;
        const title = card.querySelector(".purchase__name");
        title.textContent = cardEl.title;
        const cost = card.querySelector(".purchase__cost");
        cost.textContent = cardEl.cost;
        const kolvo = card.querySelector(".purchase__count");
        kolvo.textContent = cardEl.quantity;
        const total = card.querySelector(".purchase__total");
        total.textContent =
          parseInt(kolvo.textContent) * parseInt(cost.textContent);
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
              cnt = cnt - parseInt(kolvo.textContent);
              card.querySelector(".purchase__total").textContent =
                parseInt(card.querySelector(".purchase__total").textContent) -
                parseInt(item.cost);
              document.querySelector(".purchase__kolvo").textContent =
                parseInt(
                  document.querySelector(".purchase__kolvo").textContent
                ) - parseInt(kolvo.textContent) * parseInt(cost.textContent);
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
