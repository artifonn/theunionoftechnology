document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.querySelector("#navbar-container");

  if (!navbarContainer) {
    console.warn("Contêiner #navbar-container não encontrado.");
    return;
  }

  fetch("/components/navbar.html")
    .then((response) => {
      if (!response.ok)
        throw new Error(`Erro ao carregar o Navbar: ${response.statusText}`);
      return response.text();
    })
    .then((html) => {
      navbarContainer.innerHTML = html;

      const links = navbarContainer.querySelectorAll(".nav a");
      const currentPath = window.location.pathname;

      links.forEach((link) => {
        if (link.getAttribute("href") === currentPath) {
          link.classList.add("active");
        }
      });
    })
    .catch((error) => {
      console.error("Erro ao carregar o Navbar:", error);
    });
});
