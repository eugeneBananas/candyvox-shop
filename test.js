const form = document.getElementById("quizForm");
const result = document.getElementById("result");
const resultText = document.getElementById("resultText");
const checkButton = document.querySelector(".quiz__check");
localStorage.removeItem("selectedProduct");
console.log(checkButton);
checkButton.addEventListener("click", () => {
  submitQuiz();
});

const headerBag = document.querySelector(".header__bag");
headerBag.addEventListener("click", () => {
  window.location.href = "./korzina.html";
});

if (JSON.parse(localStorage.getItem("counter") === null)){
  const cnt = 0;
  localStorage.setItem("counter", JSON.stringify(cnt));
}
else {
document.querySelector(".header__counter").textContent = JSON.parse(
  localStorage.getItem("counter"));
}

let sweetnessType = "";

const submitQuiz = () => {
  const answers = {
    q1: form.q1.value,
    q2: form.q2.value,
    q3: form.q3.value,
  };

  console.log(answers)

  if (!(answers.q1 === "" || answers.q2 === "" || answers.q3 === "")) {
    if (answers.q1 === "a" && answers.q2 === "a" && answers.q3 === "a") {
      sweetnessType =
        "Вы шоколадный любитель: в вашем темпераменте есть что-то необычное!";
    } else if (answers.q1 === "b" && answers.q2 === "b" && answers.q3 === "b") {
      sweetnessType =
        "Кажется вы любитель леденцов: вы всегда готовы к новым приключениям!";
    } else if (answers.q1 === "c" && answers.q2 === "c" && answers.q3 === "c") {
      sweetnessType = "Вы любитель кексиков: любите дом и уют!";
    } else {
      sweetnessType = "Вы любите разные сладости, у вас смешенный характер";
    }

    resultText.textContent = sweetnessType;
    result.style.display = "block";
  }
};
const contacts = document.querySelector(".header__li-element_contacts");
const headerCheckbox = document.querySelector(".header__checkbox");
contacts.addEventListener("click", () => {
  headerCheckbox.checked = false;
});
const logoHeader = document.querySelector(".logo_header");
console.log(logoHeader);
logoHeader.addEventListener("click", () => {
  window.location.href = "./index.html";
});
