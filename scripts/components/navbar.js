document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.querySelector("#navbar");

  // Verifica se o contêiner existe
  if (navbarContainer) {
    fetch("/components/navbar.html")
    .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro ao carregar o Navbar: ${response.statusText}`);
        }
        return response.text();
      })
      .then((html) => {
        navbarContainer.innerHTML = html;

        // Código para adicionar a classe active ao link correspondente à página ativa
        const links = document.querySelectorAll(".navbar .nav a");
        const currentPath = window.location.pathname;

        // Ajuste para verificar a correspondência com a URL
        links.forEach((link) => {
          const linkPath = link.getAttribute("href");

          // Verifique se o href do link termina com o pathname da URL
          if (currentPath.endsWith(linkPath)) {
            link.classList.add("active");
          }
        });
      })
      .catch((error) => {
        console.error("Erro ao carregar o Navbar:", error);
      });
  } else {
    console.warn("Contêiner #navbar não encontrado.");
  }
});
