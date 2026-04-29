const produse = [
  {
    id: "1",
    nume: "Ulei de In Presat la Rece",
    slug: "ulei-de-in",
    categorie: "Uleiuri",
    pret: 45.99,
    pretVechi: 52.99,
    imagine: "imagini/in.jpg",
    descriereScurta: "100% natural, presat la rece, bogat în Omega-3",
    descriere:
      "Uleiul nostru de in este extras prin presare la rece din semințe de in bio, păstrând toate proprietățile nutritive. Este o sursă excelentă de acizi grași Omega-3, esențiali pentru sănătatea cardiovasculară și funcționarea optimă a creierului.",
    beneficii: [
      "Bogat în acizi grași Omega-3 (ALA)",
      "Susține sănătatea cardiovasculară",
      "Îmbunătățește funcția cognitivă",
      "Proprietăți antiinflamatorii",
      "Fără aditivi sau conservanți",
    ],
    utilizare:
      "Consumați 1-2 linguri pe zi, adăugate la salate, smoothie-uri sau cereale. Nu încălziți. Păstrați la frigider după deschidere.",
    recomandat: true,
  },
  {
    id: "2",
    nume: "Ulei de Cocos Virgin",
    slug: "ulei-de-cocos",
    categorie: "Uleiuri",
    pret: 38.5,
    imagine: "imagini/cocos.jpg",
    descriereScurta: "Virgin, nerafinat, organic",
    descriere:
      "Ulei de cocos virgin premium, extras din pulpa proaspătă de nucă de cocos. Ideal atât pentru gătit cât și pentru îngrijirea pielii și a părului.",
    beneficii: [
      "Conține acizi grași cu lanț mediu (MCT)",
      "Susține metabolismul",
      "Efect antimicrobian natural",
      "Perfect pentru gătit la temperaturi ridicate",
      "Hidratează pielea și părul",
    ],
    utilizare: "Utilizați pentru gătit, prăjit sau în produse de patiserie.",
    recomandat: true,
  },
  {
    id: "3",
    nume: "Ulei de Măsline Extra Virgin",
    slug: "ulei-de-masline",
    categorie: "Uleiuri",
    pret: 55.0,
    imagine: "imagini/olive.jpg",
    descriereScurta: "Extra virgin, prima presare la rece",
    descriere:
      "Ulei de măsline extra virgin de cea mai înaltă calitate, obținut din prima presare la rece a măslinelor coapte.",
    beneficii: [
      "Bogat în antioxidanți",
      "Conține vitamina E și polifenoli",
      "Protejează sănătatea inimii",
      "Proprietăți antiinflamatorii",
      "Gust autentic mediteranean",
    ],
    utilizare: "Ideal pentru salate, sosuri, și finisarea preparatelor.",
    recomandat: true,
  },
  {
    id: "4",
    nume: "Ulei de Semințe de Cânepă",
    slug: "ulei-de-canepa",
    categorie: "Uleiuri",
    pret: 42.0,
    imagine: "imagini/cinepa.jpg",
    descriereScurta: "Echilibru perfect de Omega 3:6",
    descriere:
      "Ulei presat la rece din semințe de cânepă, cu un raport ideal de acizi grași Omega-3 și Omega-6.",
    beneficii: [
      "Raport ideal Omega-3:Omega-6 (1:3)",
      "Susține sistemul imunitar",
      "Promovează sănătatea pielii",
      "Proprietăți antiinflamatorii",
      "Sursa naturală de GLA",
    ],
    utilizare:
      "Adăugați în smoothie-uri, dressinguri sau direct peste preparate. Nu se încălzește.",
    recomandat: false,
  },
  {
    id: "5",
    nume: "Mix de Semințe Bio",
    slug: "mix-seminte",
    categorie: "Semințe",
    pret: 28.99,
    imagine: "imagini/mix-seminte.jpg",
    descriereScurta:
      "Amestec de semințe de in, chia, dovleac și floarea-soarelui",
    descriere:
      "Un mix bogat de semințe bio, perfect pentru a adăuga valoare nutritivă oricărui preparat.",
    beneficii: [
      "Sursă completă de proteine vegetale",
      "Bogat în fibre",
      "Conține minerale esențiale",
      "Energizant natural",
      "Versatil în utilizare",
    ],
    utilizare: "Presărați peste cereale, iaurt, salate.",
    recomandat: false,
  },
  {
    id: "6",
    nume: "Set Îngrijire Naturală",
    slug: "set-ingrijire",
    categorie: "Îngrijire",
    pret: 89.99,
    pretVechi: 110.0,
    imagine: "imagini/sirop.jpg",
    descriereScurta: "Set complet pentru îngrijirea pielii și părului",
    descriere:
      "Set premium de îngrijire naturală care include uleiuri și produse esențiale pentru o rutină completă de wellness.",
    beneficii: [
      "Produse 100% naturale",
      "Fără parabeni sau chimicale",
      "Hidratare profundă",
      "Potrivit pentru toate tipurile de piele",
      "Ambalaj eco-friendly",
    ],
    utilizare:
      "Utilizați produsele conform instrucțiunilor individuale pentru fiecare produs din set.",
    recomandat: true,
  },
];

const postariBlog = [
  {
    id: 1,
    titlu: "Beneficiile Uleiului de In pentru Sănătatea Cardiovasculară",
    extras:
      "Descoperă cum acizii grași Omega-3 din uleiul de in pot îmbunătăți sănătatea inimii tale.",
    imagine: "imagini/in.jpg",
    categorie: "Nutritie",
    autor: "Dr. Maria Ionescu",
    data: "15 mar 2026",
    timpCitire: "5 min",
  },
  {
    id: 2,
    titlu: "Cum să Integrezi Uleiurile Naturale în Dieta Ta",
    extras:
      "Ghid complet cu rețete simple și delicioase pentru a adăuga uleiuri presate la rece în alimentație.",
    imagine:
      "https://images.unsplash.com/photo-1758874960045-199a38f721f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByZXBhcmluZyUyMGhlYWx0aHklMjBzYWxhZCUyMGtpdGNoZW58ZW58MXx8fHwxNzc2MDIyNjAzfDA&ixlib=rb-4.1.0&q=80&w=600",
    categorie: "Retete",
    autor: "Ana Popescu",
    data: "10 mar 2026",
    timpCitire: "7 min",
  },
  {
    id: 3,
    titlu: "Diferența Dintre Presarea la Rece și Rafinare",
    extras:
      "Înțelege de ce metoda de presare la rece păstrează toate proprietățile nutritive ale uleiurilor.",
    imagine:
      "https://images.unsplash.com/photo-1677146329971-fbef3e847b2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xkJTIwcHJlc3NlZCUyMG9pbCUyMHByb2R1Y3Rpb24lMjBhcnRpc2FufGVufDF8fHx8MTc3NjAyMjYwMXww&ixlib=rb-4.1.0&q=80&w=600",
    categorie: "Educatie",
    autor: "Prof. Ion Vasile",
    data: "5 mar 2026",
    timpCitire: "6 min",
  },
  {
    id: 4,
    titlu: "10 Sfaturi pentru un Stil de Viață Natural",
    extras:
      "Schimbări simple pe care le poți face astăzi pentru a trăi mai sănătos și mai echilibrat.",
    imagine:
      "https://images.unsplash.com/photo-1760712629836-f3e18ac1242f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwYnJlYWtmYXN0JTIwYm93bCUyMHNlZWRzJTIwZnJ1aXRzfGVufDF8fHx8MTc3NjAyMjYwMnww&ixlib=rb-4.1.0&q=80&w=600",
    categorie: "Lifestyle",
    autor: "Elena Dumitrescu",
    data: "1 mar 2026",
    timpCitire: "8 min",
  },
  {
    id: 5,
    titlu: "Uleiul de Cocos: Beneficii pentru Piele și Păr",
    extras:
      "Descoperă cum să folosești uleiul de cocos virgin pentru o îngrijire naturală.",
    imagine:
      "https://images.unsplash.com/photo-1617855007712-bc2a2debb32a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwaGFsdmVzJTIwdHJvcGljYWwlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzc2MDIyNjA1fDA&ixlib=rb-4.1.0&q=80&w=600",
    categorie: "Ingrijire",
    autor: "Cosmina Radu",
    data: "25 feb 2026",
    timpCitire: "5 min",
  },
  {
    id: 6,
    titlu: "Importanța Omega-3 în Alimentația Modernă",
    extras:
      "De ce corpul tău are nevoie de acizi grași Omega-3 și cum să obții suficient din surse naturale.",
    imagine:
      "https://images.unsplash.com/photo-1766336041971-52f9b44c25fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwb3JnYW5pYyUyMHNlZWRzJTIwd29vZGVuJTIwYm93bHxlbnwxfHx8fDE3NzYwMjI2MDB8MA&ixlib=rb-4.1.0&q=80&w=600",
    categorie: "Nutritie",
    autor: "Dr. Mihai Popescu",
    data: "20 feb 2026",
    timpCitire: "6 min",
  },
];

let paginaCurenta = "acasa";
let produsCurent = null;
let cosCumparaturi = JSON.parse(localStorage.getItem("strop_cos")) || [];
let filtruMagazin = "toate";
let filtruBlog = "Toate";

function navigheaza(pagina, date) {
  paginaCurenta = pagina;
  produsCurent = date || null;

  document
    .querySelectorAll(".pagina")
    .forEach((p) => p.classList.remove("activ"));
  const tinta = document.getElementById("pagina-" + pagina);
  if (tinta) tinta.classList.add("activ");

  document.querySelectorAll(".linkuri-nav a, .nav-mobil a").forEach((a) => {
    a.classList.remove("activ");
    const pag = a.getAttribute("data-pagina");
    if (pag === pagina) a.classList.add("activ");
  });

  window.scrollTo({ top: 0, behavior: "smooth" });

  if (pagina === "magazin") afiseazaMagazin();
  if (pagina === "blog") afiseazaBlog();
  if (pagina === "produs") afiseazaProdus();

  inchideNavMobil();
  initializeazaAnimatii();
}

function inchideNavMobil() {
  document.getElementById("nav-mobil").classList.remove("deschis");
}

function comutaNavMobil() {
  document.getElementById("nav-mobil").classList.toggle("deschis");
}

function afiseazaProduseRecomandate() {
  const recomandate = produse.filter((p) => p.recomandat).slice(0, 4);
  const grila = document.getElementById("produse-recomandate");
  if (!grila) return;
  grila.innerHTML = recomandate.map((p) => cardProdusHTML(p)).join("");
}

function cardProdusHTML(p) {
  const reducere = p.pretVechi
    ? Math.round((1 - p.pret / p.pretVechi) * 100)
    : null;
  return `
    <div class="card-produs dezvaluire" onclick="navigheaza('produs', '${p.id}')">
      <div class="container-imagine-produs">
        <img src="${p.imagine}" alt="${p.nume}" loading="lazy">
        ${reducere ? `<div class="insigna-reducere">-${reducere}%</div>` : ""}
      </div>
      <div class="categorie-produs">${p.categorie}</div>
      <div class="nume-produs">${p.nume}</div>
      <div class="preturi-produs">
        <span class="pret-produs">${p.pret.toFixed(2)} RON</span>
        ${p.pretVechi ? `<span class="pret-vechi-produs">${p.pretVechi.toFixed(2)} RON</span>` : ""}
      </div>
    </div>
  `;
}

function afiseazaMagazin() {
  afiseazaFiltreMagazin();
  afiseazaProduseMagazin();
}

function afiseazaFiltreMagazin() {
  const categorii = ["toate", ...new Set(produse.map((p) => p.categorie))];
  const container = document.getElementById("filtre-magazin");
  if (!container) return;
  container.innerHTML = categorii
    .map(
      (cat) => `
    <button class="buton-filtru ${filtruMagazin === cat ? "activ" : ""}"
      onclick="seteazaFiltruMagazin('${cat}')">
      ${cat === "toate" ? "Toate" : cat}
    </button>
  `,
    )
    .join("");
}

function seteazaFiltruMagazin(cat) {
  filtruMagazin = cat;
  afiseazaFiltreMagazin();
  afiseazaProduseMagazin();
}

function afiseazaProduseMagazin() {
  const filtrate =
    filtruMagazin === "toate"
      ? produse
      : produse.filter((p) => p.categorie === filtruMagazin);
  const grila = document.getElementById("produse-magazin");
  const numar = document.getElementById("numar-produse-magazin");
  if (!grila) return;
  if (numar)
    numar.textContent = `${filtrate.length} ${filtrate.length === 1 ? "produs" : "produse"}`;
  grila.innerHTML = filtrate
    .map((p) => {
      const reducere = p.pretVechi
        ? Math.round((1 - p.pret / p.pretVechi) * 100)
        : null;
      return `
      <div class="card-produs-magazin dezvaluire" onclick="navigheaza('produs', '${p.id}')">
        <div class="container-imagine-produs">
          <img src="${p.imagine}" alt="${p.nume}" loading="lazy">
          ${reducere ? `<div class="insigna-reducere">-${reducere}%</div>` : ""}
          ${p.recomandat ? `<div class="insigna-popular">Popular</div>` : ""}
          <div class="suprapunere-hover">
            <span class="buton-suprapunere">Vezi detalii →</span>
          </div>
        </div>
        <div class="categorie-produs">${p.categorie}</div>
        <div class="nume-produs">${p.nume}</div>
        <div class="descriere-scurta-produs">${p.descriereScurta}</div>
        <div class="preturi-produs">
          <span class="pret-produs">${p.pret.toFixed(2)} RON</span>
          ${p.pretVechi ? `<span class="pret-vechi-produs">${p.pretVechi.toFixed(2)} RON</span>` : ""}
        </div>
      </div>
    `;
    })
    .join("");
  initializeazaAnimatii();
}

function afiseazaBlog() {
  afiseazaFiltreBlog();
  afiseazaPostariBlog();
}

const categoriiBlog = [
  "Toate",
  "Nutritie",
  "Retete",
  "Educatie",
  "Lifestyle",
  "Ingrijire",
];

function afiseazaFiltreBlog() {
  const container = document.getElementById("filtre-blog");
  if (!container) return;
  container.innerHTML = categoriiBlog
    .map(
      (cat) => `
    <button class="buton-filtru ${filtruBlog === cat ? "activ" : ""}"
      onclick="seteazaFiltruBlog('${cat}')">
      ${cat}
    </button>
  `,
    )
    .join("");
}

function seteazaFiltruBlog(cat) {
  filtruBlog = cat;
  afiseazaFiltreBlog();
  afiseazaPostariBlog();
}

function afiseazaPostariBlog() {
  const filtrate =
    filtruBlog === "Toate"
      ? postariBlog
      : postariBlog.filter((p) => p.categorie === filtruBlog);
  const grila = document.getElementById("postari-blog");
  if (!grila) return;
  grila.innerHTML = filtrate
    .map(
      (p) => `
    <div class="card-blog dezvaluire">
      <div class="imagine-blog">
        <img src="${p.imagine}" alt="${p.titlu}" loading="lazy">
      </div>
      <div class="meta-blog">
        <span class="categorie-blog">${p.categorie}</span>
        <span class="data-blog">${p.data}</span>
        <span class="citire-blog">· ${p.timpCitire} citire</span>
      </div>
      <div class="titlu-blog">${p.titlu}</div>
      <div class="extras-blog">${p.extras}</div>
      <div class="autor-blog">${p.autor}</div>
    </div>
  `,
    )
    .join("");
  initializeazaAnimatii();
}

function afiseazaProdus() {
  const produs = produse.find((p) => p.id === produsCurent);
  if (!produs) {
    navigheaza("magazin");
    return;
  }

  const container = document.getElementById("container-detaliu-produs");
  if (!container) return;

  const reducere = produs.pretVechi
    ? Math.round((1 - produs.pret / produs.pretVechi) * 100)
    : null;

  container.innerHTML = `
    <div class="inapoi-detaliu" onclick="navigheaza('magazin')">
      ← Înapoi la Magazin
    </div>
    <div class="grila-detaliu-produs">
      <div class="imagine-detaliu-produs">
        <img src="${produs.imagine}" alt="${produs.nume}">
      </div>
      <div class="info-detaliu-produs">
        <div class="categorie-detaliu-produs">${produs.categorie}</div>
        <h1 class="nume-detaliu-produs">${produs.nume}</h1>
        <p class="scurt-detaliu-produs">${produs.descriereScurta}</p>
        <div class="pret-detaliu-produs">
          <span class="pret">${produs.pret.toFixed(2)} RON</span>
          ${produs.pretVechi ? `<span class="pret-vechi">${produs.pretVechi.toFixed(2)} RON</span>` : ""}
          ${reducere ? `<span class="insigna-reducere" style="position:static">-${reducere}%</span>` : ""}
        </div>
        <p class="descriere-detaliu-produs">${produs.descriere}</p>
        <div class="beneficii-detaliu-produs">
          <h4>Beneficii</h4>
          <ul>
            ${produs.beneficii
              .map(
                (b) => `
              <li><span class="punct-beneficiu"></span>${b}</li>
            `,
              )
              .join("")}
          </ul>
        </div>
        <div class="actiuni-detaliu-produs">
          <button class="buton buton-principal buton-mare" onclick="adaugaInCos('${produs.id}')">
            Adaugă în Coș
          </button>
          <button class="buton buton-contur-inchis buton-mare" onclick="navigheaza('magazin')">
            ← Înapoi
          </button>
        </div>
        <p style="margin-top:1.5rem; font-size:0.875rem; color: var(--neutral-500);">
          <strong style="color:var(--neutral-700)">Mod de utilizare:</strong> ${produs.utilizare}
        </p>
      </div>
    </div>
  `;
}

function adaugaInCos(idProdus) {
  const produsGasit = produse.find((p) => p.id === idProdus);
  if (!produsGasit) return;

  const elementCos = cosCumparaturi.find((el) => el.produs.id === idProdus);
  if (elementCos) {
    elementCos.cantitate++;
  } else {
    cosCumparaturi.push({ produs: produsGasit, cantitate: 1 });
  }

  salveazaCos();
  actualizeazaInsignaCos();
  arataNotificare("Produs adăugat în coș! 🛒");
  deschideCos();
}

function salveazaCos() {
  localStorage.setItem("strop_cos", JSON.stringify(cosCumparaturi));
}

function actualizeazaInsignaCos() {
  const cantitateTotala = cosCumparaturi.reduce(
    (total, el) => total + el.cantitate,
    0,
  );
  document
    .querySelectorAll(".insigna-cos")
    .forEach((b) => (b.textContent = cantitateTotala));
}

function deschideCos() {
  document.getElementById("panou-cos").classList.add("deschis");
  document.getElementById("cos-suprapunere").classList.add("activ");
  document.body.style.overflow = "hidden";
  randeazaCos();
}

function inchideCos() {
  document.getElementById("panou-cos").classList.remove("deschis");
  document.getElementById("cos-suprapunere").classList.remove("activ");
  document.body.style.overflow = "";
}

function modificaCantitateCos(idProdus, delta) {
  const elementCos = cosCumparaturi.find((el) => el.produs.id === idProdus);
  if (!elementCos) return;

  elementCos.cantitate += delta;
  if (elementCos.cantitate <= 0) {
    cosCumparaturi = cosCumparaturi.filter((el) => el.produs.id !== idProdus);
  }

  salveazaCos();
  actualizeazaInsignaCos();
  randeazaCos();
}

function stergeDinCos(idProdus) {
  cosCumparaturi = cosCumparaturi.filter((el) => el.produs.id !== idProdus);
  salveazaCos();
  actualizeazaInsignaCos();
  randeazaCos();
}

function randeazaCos() {
  const container = document.getElementById("continut-cos");
  const totalEl = document.getElementById("total-pret-cos");

  if (cosCumparaturi.length === 0) {
    container.innerHTML = `
      <div class="cos-gol">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <p>Coșul tău este gol.</p>
        <button class="buton buton-contur-inchis" style="margin-top: 1rem" onclick="inchideCos(); navigheaza('magazin')">Cumpără Produse</button>
      </div>
    `;
    totalEl.textContent = "0.00 RON";
    return;
  }

  let total = 0;
  container.innerHTML = cosCumparaturi
    .map((el) => {
      const p = el.produs;
      total += p.pret * el.cantitate;
      return `
      <div class="element-cos">
        <div class="imagine-element-cos">
          <img src="${p.imagine}" alt="${p.nume}">
        </div>
        <div class="detalii-element-cos">
          <div class="nume-element-cos">${p.nume}</div>
          <div class="pret-element-cos">${p.pret.toFixed(2)} RON</div>
          <div class="actiuni-element-cos">
            <div class="control-cantitate">
              <button class="buton-cantitate" onclick="modificaCantitateCos('${p.id}', -1)">-</button>
              <span class="valoare-cantitate">${el.cantitate}</span>
              <button class="buton-cantitate" onclick="modificaCantitateCos('${p.id}', 1)">+</button>
            </div>
            <button class="buton-sterge-cos" onclick="stergeDinCos('${p.id}')">Șterge</button>
          </div>
        </div>
      </div>
    `;
    })
    .join("");

  totalEl.textContent = total.toFixed(2) + " RON";
}

function arataNotificare(mesaj) {
  const notificare = document.getElementById("notificare");
  notificare.textContent = mesaj;
  notificare.classList.add("arata");
  setTimeout(() => notificare.classList.remove("arata"), 3000);
}

function trimitereFormularContact(e) {
  e.preventDefault();
  arataNotificare("Mesajul a fost trimis cu succes! ✓");
  e.target.reset();
}

function initializeazaAnimatii() {
  const observator = new IntersectionObserver(
    (intrari) => {
      intrari.forEach((intrare) => {
        if (intrare.isIntersecting) {
          intrare.target.classList.add("vizibil");
          observator.unobserve(intrare.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll(".dezvaluire").forEach((el) => {
    observator.observe(el);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  afiseazaProduseRecomandate();
  initializeazaAnimatii();
  actualizeazaInsignaCos();

  const formular = document.getElementById("formular-contact");
  if (formular) formular.addEventListener("submit", trimitereFormularContact);
});
