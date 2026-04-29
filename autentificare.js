const API_URL = "http://localhost:3000/api";

// Gestionează schimbarea tab-urilor
function schimbaTab(tab) {
  // Ascunde panoul utilizatorului și mesajele de succes când se schimbă tab-urile
  document.getElementById("panou-utilizator").classList.remove("vizibil");
  document.getElementById("mesaj-succes").classList.remove("vizibil");

  document.querySelectorAll(".tab-autentificare").forEach((btn) => {
    btn.classList.remove("activ");
  });
  document.querySelectorAll(".formular-autentificare").forEach((form) => {
    form.classList.remove("activ");
    form.style.display = "none"; // reset
  });

  const btnActiv = document.querySelector(`[data-tab="${tab}"]`);
  const formActiv = document.getElementById(`formular-${tab}`);

  if (btnActiv && formActiv) {
    btnActiv.classList.add("activ");
    formActiv.style.display = "block";
    // Mică întârziere pentru animație
    setTimeout(() => {
      formActiv.classList.add("activ");
    }, 10);
  }
}

// Funcție pentru a arăta/ascunde mesaje de eroare specifice unui câmp
function arataEroareCamp(idCamp, mesaj) {
  const camp = document.getElementById(idCamp);
  const elementEroare = document.getElementById(`eroare-${idCamp}`);

  if (camp && elementEroare) {
    camp.classList.add("eroare");
    elementEroare.textContent = mesaj;
    elementEroare.classList.add("vizibil");
  }
}

function ascundeErori() {
  document.querySelectorAll(".grup-auth input").forEach((input) => {
    input.classList.remove("eroare");
  });
  document.querySelectorAll(".mesaj-eroare-camp").forEach((err) => {
    err.classList.remove("vizibil");
    err.textContent = "";
  });
}

// Indicator putere parolă
function verificaPutereParola(parola) {
  const bara1 = document.getElementById("bara-1");
  const bara2 = document.getElementById("bara-2");
  const bara3 = document.getElementById("bara-3");
  const bara4 = document.getElementById("bara-4");
  const textPutere = document.getElementById("text-putere");

  // Resetare culori
  [bara1, bara2, bara3, bara4].forEach((b) => {
    b.className = "bara-putere";
  });

  if (!parola) {
    textPutere.textContent = "";
    return;
  }

  let putere = 0;
  if (parola.length >= 6) putere += 1;
  if (parola.match(/[A-Z]/)) putere += 1;
  if (parola.match(/[0-9]/)) putere += 1;
  if (parola.match(/[^A-Za-z0-9]/)) putere += 1;

  if (putere <= 1) {
    bara1.classList.add("slab");
    textPutere.textContent = "Parolă slabă";
    textPutere.style.color = "var(--red-500)";
  } else if (putere === 2) {
    bara1.classList.add("mediu");
    bara2.classList.add("mediu");
    textPutere.textContent = "Parolă medie";
    textPutere.style.color = "var(--amber-400)";
  } else if (putere >= 3) {
    bara1.classList.add("puternic");
    bara2.classList.add("puternic");
    bara3.classList.add("puternic");
    if (putere === 4) bara4.classList.add("puternic");
    textPutere.textContent = "Parolă puternică";
    textPutere.style.color = "var(--emerald-500)";
  }
}

// Logare
async function logare(event) {
  event.preventDefault();
  ascundeErori();

  const email = document.getElementById("logare-email").value;
  const parola = document.getElementById("logare-parola").value;
  const tineMinte = document.getElementById("tine-minte").checked;

  try {
    const raspuns = await fetch(`${API_URL}/logare`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, parola }),
    });

    const date = await raspuns.json();

    if (raspuns.ok && date.succes) {
      // Salvează datele utilizatorului
      const storage = tineMinte ? localStorage : sessionStorage;
      storage.setItem(
        "utilizatorStropDeViata",
        JSON.stringify(date.utilizator),
      );

      afiseazaNotificare("Te-ai conectat cu succes!", "succes");
      afiseazaPanouUtilizator(date.utilizator);
    } else {
      afiseazaNotificare(date.mesaj || "Eroare la conectare.", "eroare");
      arataEroareCamp("logare-email", "Verifică datele introduse.");
      arataEroareCamp("logare-parola", "");
    }
  } catch (eroare) {
    console.error("Eroare:", eroare);
    afiseazaNotificare("Eroare de conexiune cu serverul.", "eroare");
  }
}

// Înregistrare
async function inregistrare(event) {
  event.preventDefault();
  ascundeErori();

  const nume = document.getElementById("inregistrare-nume").value;
  const email = document.getElementById("inregistrare-email").value;
  const telefon = document.getElementById("inregistrare-telefon").value;
  const parola = document.getElementById("inregistrare-parola").value;
  const confirmare = document.getElementById("inregistrare-confirmare").value;

  // Validare frontend suplimentară
  if (parola.length < 6) {
    arataEroareCamp(
      "inregistrare-parola",
      "Parola trebuie să aibă minim 6 caractere.",
    );
    return;
  }

  if (parola !== confirmare) {
    arataEroareCamp("inregistrare-confirmare", "Parolele nu se potrivesc.");
    return;
  }

  try {
    const raspuns = await fetch(`${API_URL}/inregistrare`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nume, email, telefon, parola }),
    });

    const date = await raspuns.json();
    if (raspuns.ok && date.succes) {
      document.getElementById("formular-inregistrare").reset();
      document.getElementById("formular-inregistrare").style.display = "none";
      document
        .getElementById("formular-inregistrare")
        .classList.remove("activ");

      const mesajSucces = document.getElementById("mesaj-succes");
      mesajSucces.style.display = "block";
      setTimeout(() => {
        mesajSucces.classList.add("vizibil");
      }, 10);

      afiseazaNotificare("Cont creat cu succes!", "succes");

      // ✅ Pregătește formularul de logare să fie interactabil pentru Katalon
      const formLogare = document.getElementById("formular-logare");
      formLogare.style.display = "block";
      formLogare.style.visibility = "hidden";
      formLogare.classList.add("activ");
    } else {
      afiseazaNotificare(date.mesaj || "Eroare la crearea contului.", "eroare");
      if (date.mesaj && date.mesaj.includes("email")) {
        arataEroareCamp("inregistrare-email", date.mesaj);
      }
    }
  } catch (eroare) {
    console.error("Eroare:", eroare);
    afiseazaNotificare("Eroare de conexiune cu serverul.", "eroare");
  }
}

// Afișează panoul când utilizatorul este logat
function afiseazaPanouUtilizator(utilizator) {
  document
    .querySelectorAll(".formular-autentificare")
    .forEach((form) => (form.style.display = "none"));
  document.getElementById("tab-uri").style.display = "none";
  document.querySelector(".autentificare-brand p").textContent =
    "Ești conectat în contul tău";

  const panou = document.getElementById("panou-utilizator");
  panou.style.display = "block";
  setTimeout(() => panou.classList.add("vizibil"), 10);

  document.getElementById("nume-utilizator").textContent = utilizator.nume;
  document.getElementById("email-utilizator").textContent = utilizator.email;

  // Inițiale pentru avatar
  const initiale = utilizator.nume
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();
  document.getElementById("avatar-utilizator").textContent = initiale;

  document.getElementById("telefon-utilizator").textContent =
    utilizator.telefon || "Nespecificat";

  if (utilizator.dataInregistrare) {
    const data = new Date(utilizator.dataInregistrare);
    document.getElementById("data-utilizator").textContent =
      data.toLocaleDateString("ro-RO", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
  }
}

// Deconectare
function deconectare() {
  localStorage.removeItem("utilizatorStropDeViata");
  sessionStorage.removeItem("utilizatorStropDeViata");

  document.getElementById("panou-utilizator").style.display = "none";
  document.getElementById("panou-utilizator").classList.remove("vizibil");
  document.getElementById("tab-uri").style.display = "flex";
  document.querySelector(".autentificare-brand p").textContent =
    "Bine ai venit în comunitatea noastră";

  schimbaTab("logare");
  afiseazaNotificare("Te-ai deconectat cu succes.", "succes");
}

// Verificare sesiune la încărcarea paginii
document.addEventListener("DOMContentLoaded", () => {
  const utilizatorSalvat =
    localStorage.getItem("utilizatorStropDeViata") ||
    sessionStorage.getItem("utilizatorStropDeViata");

  if (utilizatorSalvat) {
    try {
      const utilizator = JSON.parse(utilizatorSalvat);
      afiseazaPanouUtilizator(utilizator);
    } catch (e) {
      console.error("Eroare la citirea datelor din sesiune:", e);
      localStorage.removeItem("utilizatorStropDeViata");
      sessionStorage.removeItem("utilizatorStropDeViata");
    }
  }
});

// Sistem simplu de notificări
function afiseazaNotificare(mesaj, tip = "info") {
  let notificareEl = document.getElementById("notificare-sistem");

  if (!notificareEl) {
    notificareEl = document.createElement("div");
    notificareEl.id = "notificare-sistem";
    document.body.appendChild(notificareEl);

    // Stilizare notificare
    Object.assign(notificareEl.style, {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      padding: "1rem 1.5rem",
      borderRadius: "8px",
      color: "white",
      fontFamily: "var(--font-sans)",
      fontSize: "0.9375rem",
      zIndex: "9999",
      transition: "all 0.3s ease",
      transform: "translateY(100px)",
      opacity: "0",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    });
  }

  // Setare culori în funcție de tip
  if (tip === "succes") {
    notificareEl.style.background = "var(--emerald-500)";
  } else if (tip === "eroare") {
    notificareEl.style.background = "var(--red-500)";
  } else {
    notificareEl.style.background = "var(--neutral-800)";
  }

  notificareEl.textContent = mesaj;

  // Animație apariție
  setTimeout(() => {
    notificareEl.style.transform = "translateY(0)";
    notificareEl.style.opacity = "1";
  }, 10);

  // Ascundere automată
  setTimeout(() => {
    notificareEl.style.transform = "translateY(100px)";
    notificareEl.style.opacity = "0";
  }, 3000);
}
