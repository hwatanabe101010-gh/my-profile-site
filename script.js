const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    themeToggle.textContent = "☀️ ライトモード";
  } else {
    themeToggle.textContent = "🌙 ダークモード";
  }
});