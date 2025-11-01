function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  const modeText = document.querySelector("#mode-text")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    modeText.textContent = "Modo Claro"
    localStorage.setItem("theme", "light")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    modeText.textContent = "Modo Escuro"
    localStorage.setItem("theme", "dark")
  }
}

// 🔁 Mantém o tema escolhido ao recarregar a página
const savedTheme = localStorage.getItem("theme")
if (savedTheme === "light") {
  document.documentElement.classList.add("light")
  document
    .querySelector("#profile img")
    .setAttribute("src", "./assets/avatar-light.png")
  document.querySelector("#mode-text").textContent = "Modo Claro"
}
