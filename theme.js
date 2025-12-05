// Theme management
const DARK_THEME = "dark";
const LIGHT_THEME = "light";
let currentTheme = localStorage.getItem("theme") || LIGHT_THEME;

// Initialize theme
document.documentElement.setAttribute("data-theme", currentTheme);

// Create theme switcher HTML
function createThemeSwitcher() {
  const themeSwitcher = document.createElement("div");
  themeSwitcher.className = "theme-switcher";

  // Create toggle input
  const toggle = document.createElement("input");
  toggle.type = "checkbox";
  toggle.id = "theme-toggle";
  toggle.className = "theme-toggle";
  toggle.checked = currentTheme === DARK_THEME;

  // Create label with icons
  const label = document.createElement("label");
  label.htmlFor = "theme-toggle";
  label.className = "theme-label";

  // Add sun icon
  const sunIcon = document.createElement("i");
  sunIcon.className = "fas fa-sun theme-icon";
  label.appendChild(sunIcon);

  // Add moon icon
  const moonIcon = document.createElement("i");
  moonIcon.className = "fas fa-moon theme-icon";
  label.appendChild(moonIcon);

  // Add event listener
  toggle.addEventListener("change", (e) => {
    const newTheme = e.target.checked ? DARK_THEME : LIGHT_THEME;
    setTheme(newTheme);
  });

  // Append elements
  themeSwitcher.appendChild(toggle);
  themeSwitcher.appendChild(label);

  // Add to navigation
  const navMenu = document.querySelector(".nav-menu");
  const listItem = document.createElement("li");
  listItem.appendChild(themeSwitcher);
  navMenu.appendChild(listItem);
}

// Set theme
function setTheme(theme) {
  // Remove active class from all options
  document.querySelectorAll(".theme-option").forEach((option) => {
    option.classList.remove("active");
  });

  // Add active class to selected theme
  const selectedOption = document.querySelector(`[data-theme="${theme}"]`);
  if (selectedOption) {
    selectedOption.classList.add("active");
  }

  // Update theme
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  currentTheme = theme;

  // Add animation class
  document.documentElement.classList.add("theme-transition");
  setTimeout(() => {
    document.documentElement.classList.remove("theme-transition");
  }, 300);
}

// Initialize theme switcher when DOM is loaded
document.addEventListener("DOMContentLoaded", createThemeSwitcher);
