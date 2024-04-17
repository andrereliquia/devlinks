function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  //pegar imagem
  const img = document.querySelector("#profile img")

  if (html.classList.contains('light')) {
    //se tiver light-mode, adiciona a imagem light
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    //se tiver sem light-mode, retorna a imagem padrão
    img.setAttribute("src", "./assets/assets/andre-avatar.png")
  }
}
