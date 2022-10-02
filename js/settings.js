const darkModeSwitch = document.querySelector('[data-js="dark-mode-switch"]');

darkModeSwitch.addEventListener("change", () => {
  if (darkModeSwitch.checked) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
});
