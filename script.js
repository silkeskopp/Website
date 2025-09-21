// Simple client-side i18n dictionary
const M = {
  de: {
    lead: "Hinweis",
    desc: "Hier gibt es aktuell nicht sehr viel Inhalt.",
    note: "Diese Domain wird hauptsächlich genutzt, um Subdomains zu halten und bereitzustellen.",
    foot: "Wenn Sie versehentlich hier gelandet sind, prüfen Sie bitte die gewünschte Subdomain.",
    title: "silke-skopp.de"
  },
  en: {
    lead: "Notice",
    desc: "There isn't much here right now.",
    note: "This domain is mainly used to hold and serve subdomains.",
    foot: "If you arrived here by mistake, please check the intended subdomain.",
    title: "silke-skopp.de"
  },
  es: {
    lead: "Aviso",
    desc: "Aquí no hay mucho por ahora.",
    note: "Este dominio se usa principalmente para mantener y servir subdominios.",
    foot: "Si llegó aquí por error, verifique la subdominio prevista.",
    title: "silke-skopp.de"
  }
};

// Choose initial language based on browser, fallback to DE
function pickInitialLang() {
  const nav = navigator.languages ? navigator.languages[0] : navigator.language || "de";
  const base = nav.toLowerCase().split("-")[0];
  return (base in M) ? base : "de";
}

function setLang(lang) {
  const dict = M[lang] || M.de;
  document.documentElement.lang = lang;
  document.getElementById("title").textContent = dict.title;
  document.getElementById("lead").textContent = dict.lead;
  document.getElementById("desc").textContent = dict.desc;
  document.getElementById("note").textContent = dict.note;
  document.getElementById("foot").textContent = dict.foot;

  document.querySelectorAll('.lang button').forEach(btn => {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
  });
}

document.querySelectorAll('.lang button').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

setLang(pickInitialLang());
