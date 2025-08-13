// script.js:

/// ===== Dados alteráveis =====
const NOME = "Francis";
const HOBBY = "ler e viajar";

// ===== Elementos =====
const elMensagem = document.getElementById("mensagem");
const btnApresentar = document.getElementById("btnApresentar");
const btnGithub = document.getElementById("btnGithub");
const linkSobre = document.getElementById("linkSobre");

// ===== Funções =====
function meApresentar(){
  elMensagem.textContent = `Olá! Meu nome é ${NOME} e meu hobby é ${HOBBY}.`;
}

function abrirGithub(){
  // elMensagem.textContent = "Abrindo GitHub...";
  window.open("https://github.com/francislauriano", "_blank");
}


// ===== Eventos =====
if (btnApresentar) btnApresentar.addEventListener("click", meApresentar);
if (btnGithub) btnGithub.addEventListener("click", abrirGithub);
if (linkSobre) linkSobre.addEventListener("click", meApresentar);


// ===== Rolagem para o topo das seções =====
// Rolagem suave compensando a altura real da navbar
const nav = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    const navH = nav ? nav.offsetHeight : 0;
    const y = target.getBoundingClientRect().top + window.pageYOffset - (navH + 8);
    window.scrollTo({ top: y, behavior: "smooth" });
  });
});

