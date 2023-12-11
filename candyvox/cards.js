let selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

const headerBag = document.querySelector(".header__bag");
headerBag.addEventListener("click", () => {
  window.location.href = "./korzina.html";
});

let counter = document.querySelector(".header__counter").textContent;

const inside = document.querySelector(".product-container");
let currentElements = [];

let checkedEl = "all";
let minCurCost = 0;
let maxCurCost = 10000000;

const cards = [
  {
    image: "./images/keksi.jpg",
    type: "cupcake",
    title: "Волшебные кексы",
    description: "Вкусные кексы с загадочной начинкой, подходят для сладкоежек",
    cost: 123,
    kolvo: "Р 1шт.",
  },
  {
    image: "./images/konfeti.png",
    type: "candy",
    title: "Разноцветные конфеты",
    description: "Большая вкусовая палитра разнообразит ваш день",
    cost: 76,
    kolvo: "Р/100гр.",
  },
  {
    image: "./images/moti.jpg",
    type: "moti",
    title: "Моти",
    description: "Традиционный десерт, получивший популярность по всему миру",
    cost: 130,
    kolvo: "Р 1шт.",
  },
  {
    image: "./images/cards/cherepushki.jpg",
    type: "marmelad",
    title: "Черепушки",
    description: "Никогда не угадаешь, какой вкус внутри",
    cost: 210,
    kolvo: "Р/100гр.",
  },
  {
    image: "./images/cards/drazhe__serdechki.jpg",
    type: "drazhe",
    title: "Драже 'Сердечко'",
    description:
      "Драже 'Сердечко' — цельные орехи в оболочке — подарок для сердца и вдохновения.",
    cost: 80,
    kolvo: "Р/100гр.",
  },
  {
    image: "./images/cards/drazhe_s_oreshkami.jpg",
    type: "drazhe",
    title: "Драже с орешками",
    description:
      "Главное зуб не сломать от такой сладости. Орехи, покрытые вкусной глазурью",
    cost: 230,
    kolvo: "Р/100гр.",
  },
  {
    image: "./images/cards/golubika.jpg",
    type: "cupcake",
    title: "Кекс 'Голубика'",
    description: "Крупная голубика вместе с шоколадным кремом внутри",
    cost: 300,
    kolvo: "Р 1шт.",
  },
  {
    image: "./images/cards/keks__s_klubnikoy.jpeg",
    type: "cupcake",
    title: "Кекс с клубникой",
    description: "Свежая клубника вместе с ванильным кремом внутри",
    cost: 270,
    kolvo: "Р 1шт.",
  },
  {
    image: "./images/cards/keks_enodzi.jpg",
    type: "cupcake",
    title: "Кекс 'Эмоджи'",
    description:
      "Кекс 'Эмоджи' раскрашивает жизнь новыми красками и переживаниями.",
    cost: 250,
    kolvo: "Р 1шт.",
  },
  {
    image: "./images/cards/konfeta-apelsinka.webp",
    type: "candy",
    title: "Конфета 'Апельсинка'",
    description: "Мы делили апельсин - много нас, а он - один!",
    cost: 410,
    kolvo: "Р/100гр.",
  },
  {
    image: "./images/cards/konfeti__mix.jpg",
    type: "candy",
    title: "Микс конфет",
    description: "Конфеты самых разных вкусов",
    cost: 130,
    kolvo: "Р/100гр.",
  },
  {
    image: "./images/cards/konfeti_kanyiak.jpg",
    type: "candy",
    title: "Конфета 'Каняк'",
    description:
      "Изысканное варенье, сочные фрукты и ароматные цветы — приключение в каждом покусе.",
    cost: 150,
    kolvo: "Р/100гр.",
  },
  {
    image: "./images/cards/ledenci_busi.jpg",
    type: "other",
    title: "Леденцы с вкусом бузины",
    description:
      "Леденцы с бузиной — освежающее дыхание природы в каждом кусочке",
    cost: 500,
    kolvo: "Р 1шт.",
  },
  {
    image: "./images/cards/marmelad__frukti.jpg",
    type: "marmelad",
    title: "Мармелад 'Фрукты'",
    description: "Мармелад самых разных вкусов - найдите для себя свой",
    cost: 70,
    kolvo: "Р/100гр.",
  },
  {
    image: "./images/cards/marmelad__heart.jpg",
    type: "marmelad",
    title: "Мармелад 'Heart'",
    description:
      "Мармелад 'Heart' — нежнейший фруктовый десерт, который наполняет сердце любовью",
    cost: 200,
    kolvo: "Р/100гр.",
  },
  {
    image: "./images/cards/marmelad__klubnika.jpg",
    type: "marmelad",
    title: "Мармелад 'Клубника'",
    description: "Самые клубничные мармеладки в мире",
    cost: 305,
    kolvo: "Р/100гр.",
  },
  {
    image: "./images/cards/moti__fruktovie.jpg",
    type: "moti",
    title: "Моти 'Фруктовые'",
    description: "Традиционный десерт вместе с фруктовой начинкой",
    cost: 210,
    kolvo: "Р 1шт.",
  },

  {
    image: "./images/cards/moti__karamel.webp",
    type: "moti",
    title: "Карамельный моти",
    description: "Традиционный десерт вместе с карамельной начинкой",
    cost: 300,
    kolvo: "Р 1шт.",
  },
  {
    image: "./images/cards/moti__sushi.jpg",
    type: "moti",
    title: "Моти 'Суши'",
    description: "Традиционный десерт в мармеладной оболочке в виде рыбки",
    cost: 150,
    kolvo: "Р 1шт.",
  },
  {
    image: "./images/cards/pechenie__leopard.jpg",
    type: "cookie",
    title: "Печенье 'Леопард'",
    description: "Как раз к чаю",
    cost: 50,
    kolvo: "Р 1шт.",
  },
  {
    image: "./images/cards/pechenie__mishki.jpg",
    type: "cookie",
    title: "Печенье 'Мишки'",
    description: "Подари настроение родным вместе с печеньем 'Мишки'",
    cost: 60,
    kolvo: "Р 1шт.",
  },
  {
    image: "./images/cards/ponchiki__zhivotnie.jpg",
    type: "donut",
    title: "Пончики-животные",
    description: "Каждый пончик содержит в себе разный джем",
    cost: 110,
    kolvo: "Р 1шт.",
  },
  {
    image: "./images/cards/tortik.jpg",
    type: "other",
    title: "Тортик",
    description: "Тортики самых рахных вкусов только здесь",
    cost: 300,
    kolvo: "Р 1шт.",
  },
];

// localStorage.removeItem("items");
// localStorage.removeItem("counter");

if (!localStorage.getItem("items")) {
  localStorage.setItem("items", JSON.stringify([{}]));

  cards.forEach((card) => {
    let items = JSON.parse(localStorage.getItem("items"));
    console.log(items);
    items.push({ name: card.title, quantity: 0, image: card.image, title: card.title, cost: card.cost });
    localStorage.setItem("items", JSON.stringify(items));
    console.log(card.title, card.cost)
  });
}

cards.forEach((cardEl, i) => {
  const container = document.querySelector(".product-template").content;
  const card = container.querySelector(".product-card").cloneNode(true);
  const image = card.querySelector(".product-image");
  image.src = cardEl.image;
  image.alt = cardEl.type;
  const title = card.querySelector(".product-title");
  title.textContent = cardEl.title;
  const text = card.querySelector(".product-text");
  text.textContent = cardEl.description;
  const cost = card.querySelector(".product-cost");
  cost.textContent = cardEl.cost;
  const kolvo = card.querySelector(".product-kolvo");
  kolvo.textContent = cardEl.kolvo;
  const button = card.querySelector(".product-button");
  button.addEventListener("click", () => {
    if (localStorage.getItem("items")) {
      let items = JSON.parse(localStorage.getItem("items"));
      let cnt = JSON.parse(localStorage.getItem("counter"));
      items.forEach((item) => {
        if (title.textContent == item.name) {
          item.quantity = item.quantity + 1;
          cnt = cnt + 1;
          document.querySelector(".header__counter").textContent = cnt;
          console.log(document.querySelector(".header__counter").textContent);
          console.log(cnt)
        }
      });
      localStorage.setItem("items", JSON.stringify(items));
      localStorage.setItem("counter", JSON.stringify(cnt)); // Сохраняем информацию о покупке в localStorage
    }
  });

  console.log(card);

  inside.append(card);
  currentElements.push(card);
});

const render = (id) => {
    const elements = inside.querySelectorAll(".product-card");
    for (let i = 0; i < elements.length; i++) {
      elements[i].parentNode.removeChild(elements[i]); // удаление объекта
    }
  currentElements.length = 0;

  cards.forEach((cardEl) => {
    if (
      (id === cardEl.type || id === "all") &&
      cardEl.cost >= minCurCost &&
      cardEl.cost <= maxCurCost
    ) {
      console.log(cardEl.cost);
      const container = document.querySelector(".product-template").content;
      const card = container.querySelector(".product-card").cloneNode(true);
      const image = card.querySelector(".product-image");
      image.src = cardEl.image;
      image.alt = cardEl.type;
      const title = card.querySelector(".product-title");
      title.textContent = cardEl.title;
      const text = card.querySelector(".product-text");
      text.textContent = cardEl.description;
      const cost = card.querySelector(".product-cost");
      cost.textContent = cardEl.cost;
      const kolvo = card.querySelector(".product-kolvo");
      kolvo.textContent = cardEl.kolvo;
      const button = card.querySelector(".product-button");
      button.addEventListener("click", () => {
        if (localStorage.getItem("items")) {
          let items = JSON.parse(localStorage.getItem("items"));
          let cnt = JSON.parse(localStorage.getItem("counter"));
          items.forEach((item) => {
            if (title.textContent == item.name) {
              item.quantity = item.quantity + 1;
              cnt = cnt + 1;
              document.querySelector(".header__counter").textContent = cnt;
              console.log(counter);
            }
          });
          localStorage.setItem("items", JSON.stringify(items));
          localStorage.setItem("counter", JSON.stringify(cnt)); // Сохраняем информацию о покупке в localStorage
        }
      });

      console.log(card);

      inside.append(card);

      checkedEl = id;
      currentElements.push(card);
    }
  });
};

console.log(selectedProduct);

if (selectedProduct) {
  const form = document.querySelector(".radio-group");
  const radio = document.querySelector(`#${selectedProduct}`);
  radio.checked = true;
}

const checkboxes = document.querySelectorAll(".panel-ch");
checkboxes.forEach((checkbox) => {
  const check = checkbox.id;
  checkbox.addEventListener("click", () => render(check));
});

console.log(currentElements);

const minPriceInput = document.querySelector("#min-price");
const maxPriceInput = document.querySelector("#max-price");

minPriceInput.addEventListener("keyup", () => {
  const elements = inside.querySelectorAll(".product-card");
  for (let i = 0; i < elements.length; i++) {
    elements[i].parentNode.removeChild(elements[i]); // удаление объекта
  }
  currentElements.length = 0;

  cards.forEach((cardEl) => {
    console.log(
      (cardEl.type == checkedEl || checkedEl == "all") &&
        cardEl.cost >= parseInt(minPriceInput.value) &&
        cardEl.cost <= maxCurCost
    );
    if (
      ((cardEl.type == checkedEl || checkedEl == "all") &&
        cardEl.cost >= parseInt(minPriceInput.value) &&
        cardEl.cost <= maxCurCost) ||
      (minPriceInput.value == "" &&
        maxPriceInput.value == "" &&
        checkedEl == cardEl.type)
    ) {
      console.log(maxCurCost);
      const container = document.querySelector(".product-template").content;
      const card = container.querySelector(".product-card").cloneNode(true);
      const image = card.querySelector(".product-image");
      image.src = cardEl.image;
      image.alt = cardEl.type;
      const title = card.querySelector(".product-title");
      title.textContent = cardEl.title;
      const text = card.querySelector(".product-text");
      text.textContent = cardEl.description;
      const cost = card.querySelector(".product-cost");
      cost.textContent = cardEl.cost;
      const kolvo = card.querySelector(".product-kolvo");
      kolvo.textContent = cardEl.kolvo;
      const button = card.querySelector(".product-button");
      button.addEventListener("click", () => {
        if (localStorage.getItem("items")) {
          let items = JSON.parse(localStorage.getItem("items"));
          let cnt = JSON.parse(localStorage.getItem("counter"));
          items.forEach((item) => {
            if (title.textContent == item.name) {
              item.quantity = item.quantity + 1;
              cnt = cnt + 1;
              document.querySelector(".header__counter").textContent = cnt;
              console.log(counter);
            }
          });
          localStorage.setItem("items", JSON.stringify(items));
          localStorage.setItem("counter", JSON.stringify(cnt)); // Сохраняем информацию о покупке в localStorage
        }
      });

      console.log(card);

      inside.append(card);
      currentElements.push(card);
    }

    minCurCost = minPriceInput.value;

    if (!minPriceInput.value) {
      minCurCost = 0;
    }
  });

  //   let cena = minPriceInput.value;
  //   console.log(cena)
  //   const clonedArray = currentElements.slice();
  //   for (let i = 0; i < currentElements.length; i++) {
  //     clonedArray[i].parentNode.removeChild(clonedArray[i]); // удаление объекта
  //   }
  //   currentElements.forEach((card) => {
  //     const cost = card.querySelector(".product-cost");
  //     // console.log(parseInt(cena) <= parseInt(cost.textContent) )
  //     // console.log(cena, cost.textContent )
  //     // console.log(cena)
  //     if (parseInt(cena) <= parseInt(cost.textContent)) {
  //       inside.append(card);
  //     }
  //   });
});

maxPriceInput.addEventListener("keyup", () => {
  const elements = inside.querySelectorAll(".product-card");
  for (let i = 0; i < elements.length; i++) {
    elements[i].parentNode.removeChild(elements[i]); // удаление объекта
  }
  currentElements.length = 0;

  cards.forEach((cardEl) => {
    console.log(checkedEl);
    console.log(maxCurCost);
    if (
      ((cardEl.type == checkedEl || checkedEl == "all") &&
        cardEl.cost <= parseInt(maxPriceInput.value) &&
        cardEl.cost >= minCurCost) ||
      (maxPriceInput.value == "" &&
        minPriceInput.value == "" &&
        checkedEl == cardEl.type)
    ) {
      const container = document.querySelector(".product-template").content;
      const card = container.querySelector(".product-card").cloneNode(true);
      const image = card.querySelector(".product-image");
      image.src = cardEl.image;
      image.alt = cardEl.type;
      const title = card.querySelector(".product-title");
      title.textContent = cardEl.title;
      const text = card.querySelector(".product-text");
      text.textContent = cardEl.description;
      const cost = card.querySelector(".product-cost");
      cost.textContent = cardEl.cost;
      const kolvo = card.querySelector(".product-kolvo");
      kolvo.textContent = cardEl.kolvo;
      const button = card.querySelector(".product-button");
      button.addEventListener("click", () => {
        if (localStorage.getItem("items")) {
          let items = JSON.parse(localStorage.getItem("items"));
          let cnt = JSON.parse(localStorage.getItem("counter"));
          items.forEach((item) => {
            if (title.textContent == item.name) {
              item.quantity = item.quantity + 1;
              cnt = cnt + 1;
              document.querySelector(".header__counter").textContent = cnt;
              console.log(counter);
            }
          });
          localStorage.setItem("items", JSON.stringify(items));
          localStorage.setItem("counter", JSON.stringify(cnt)); // Сохраняем информацию о покупке в localStorage
        }
      });

      console.log(card);

      inside.append(card);

      currentElements.push(card);
    }

    maxCurCost = maxPriceInput.value;
    console.log(maxCurCost);
    if (maxPriceInput.value == "") {
      maxCurCost = 9999999;
    }
  });
});
