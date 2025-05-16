// فعال کردن AOS
AOS.init({
  duration: 800,
  once: true,
  easing: "ease-in-out",
});

// تغییر تم
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  const isDark = body.classList.contains("dark-mode");
  themeToggle.innerHTML = isDark
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';

  // ذخیره ترجیح کاربر
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// بررسی ترجیح ذخیره شده کاربر
const savedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  body.classList.remove("light-mode");
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// انیمیشن hover برای کارت‌ها
document.querySelectorAll(".skill-card, .project-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });
});
