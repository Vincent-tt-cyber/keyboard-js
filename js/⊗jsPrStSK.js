const input = document.querySelector(".input-field");
const keyboard = document.querySelector(".keyboard");
const keys = document.querySelectorAll(".key");

let isCapsActive = false;
let isShiftActive = false;

// Обработка кликов по клавишам
keyboard.addEventListener("click", (e) => {
  // Если клик по клавишам
  if (e.target.classList.contains("key")) {
    const key = e.target;

    // Стили для клавиатуры
    key.classList.add("active");
    setTimeout(() => {
      key.classList.remove("active");
    }, 300);

    // Обработка клавиш
    if (key.dataset.action) {
      handleSpecialKeys(key.dataset.action);
    } else {
      enterChar(key.dataset.char);
    }
  }
});

function handleSpecialKeys(action) {
  // Если нажата клавиша CAPS
  if (action === "caps") {
    isCapsActive = !isCapsActive;
    const capsKey = document.querySelector(".key.caps");
    capsKey.classList.toggle("active-caps", isCapsActive);

    keys.forEach((key) => {
      if (key.dataset.char && key.dataset.char !== " ") {
        key.textContent = isCapsActive
          ? key.dataset.char.toUpperCase()
          : key.dataset.char;
      }
    });
  }
}

// Вывод текста
function enterChar(text) {
  input.focus();
  //   Если нажата клавиша CAPS
  const charToEnter =
    isCapsActive || isShiftActive ? text.toUpperCase() : text.toLowerCase();

  input.value += charToEnter;
}
