document.querySelector("#burger-pic").addEventListener("click", () => {
  document.querySelectorAll(".burger-menu-item").forEach((item) => {
    item.classList.toggle("show-menu-item");
  });
});
