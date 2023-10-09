function scrollSuave(){
document.addEventListener('DOMContentLoaded', function() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')
    function scrollToSection(event) {
  
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href')
      const section = document.querySelector(href)
      const topo = section.offsetTop
      window.scrollTo({
        top: topo,
        behavior: 'smooth'
      })
    }
    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection)
    })
  }
)}
scrollSuave()

const menuBars = document.getElementById("menu-bars");
const navigation = document.querySelector(".navegação1 ul");
const menuIcon = document.querySelector(".menu-icon");

menuBars.addEventListener("click", () => {
  navigation.classList.toggle("active");
  menuIcon.classList.toggle("active"); // Adicione esta linha

  // Verifique se a classe "active" está presente no ícone e atualize seu conteúdo
  if (menuIcon.classList.contains("active")) {
    menuIcon.innerHTML = "&#10005;"; // Código HTML para o ícone "X"
  } else {
    menuIcon.innerHTML = "&#9776;"; // Código HTML para o ícone do menu
  }
});