// Just a fun little script for animation
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header h1");
  header.style.opacity = 0;

  setTimeout(() => {
    header.style.transition = "opacity 2s ease";
    header.style.opacity = 1;
  }, 500);
});
