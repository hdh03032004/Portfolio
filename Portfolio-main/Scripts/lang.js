let currentLang = localStorage.getItem("lang") || "vi";

async function loadLanguage(lang) {
  const res = await fetch(`i18n/${lang}.json`);
  const translations = await res.json();

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[key]) {
      el.innerText = translations[key];
    }
  });

  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  currentLang = currentLang === "vi" ? "en" : "vi";
  loadLanguage(currentLang);
});

// Load khi mở trang
loadLanguage(currentLang);
