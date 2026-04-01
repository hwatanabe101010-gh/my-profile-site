const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const bioEl = document.getElementById("bio");

async function loadBio() {
  try {
    const res = await fetch("bio.txt", {
      cache: "no-store"
    });
    if (!res.ok) {
      throw new Error(`bio.txt の読み込みに失敗しました: ${res.status}`);
    }
    const text = await res.text();
    bioEl.textContent = text;
  } catch (e) {
    console.error(e);
    bioEl.textContent = "自己紹介文を読み込めませんでした。後でもう一度試してください。";
  }
}

loadBio();

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    themeToggle.textContent = "☀️ ライトモード";
  } else {
    themeToggle.textContent = "🌙 ダークモード";
  }
});