const stories = document.querySelectorAll(".story");
document.querySelectorAll(".story-btn").forEach((btn, i) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("change");
    stories.classList.toggle("change");
  });
});
