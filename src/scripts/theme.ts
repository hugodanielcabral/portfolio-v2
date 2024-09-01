const themeController = document.querySelector(".theme-controller") as HTMLInputElement

const getLocalStorageTheme = () => {
  const localStorageTheme = localStorage.getItem("theme");
  return localStorageTheme;
};

const handleOnThemeChange = () => {
  const html = document.querySelector("html");

  const localStorageTheme = getLocalStorageTheme();

  if (!localStorageTheme || localStorageTheme === "light") {
    html?.classList.add("dark");
    themeController.checked = false;
  } else {
    html?.classList.remove("dark");
    themeController.checked = true;
  }
};

themeController.addEventListener("change", handleOnThemeChange);

document.addEventListener("DOMContentLoaded", () => {
  const html = document.querySelector("html");
  const localStorageTheme = getLocalStorageTheme();

  if (localStorageTheme === "dark") {
    html?.classList.add("dark");
    themeController.checked = false;
  } else {
    html?.classList.remove("dark");
    themeController.checked = true;
  }
});