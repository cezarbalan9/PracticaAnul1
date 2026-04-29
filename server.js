const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;
const USERS_FILE = path.join(__dirname, "users.json");

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// Function to read users from the JSON file
const getUsers = () => {
  try {
    if (!fs.existsSync(USERS_FILE)) {
      fs.writeFileSync(USERS_FILE, JSON.stringify([]));
    }
    const data = fs.readFileSync(USERS_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Eroare la citirea fișierului de utilizatori:", error);
    return [];
  }
};

// Function to save users to the JSON file
const saveUsers = (users) => {
  try {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
  } catch (error) {
    console.error("Eroare la scrierea în fișierul de utilizatori:", error);
  }
};

// --- Rute API ---

// Înregistrare
app.post("/api/inregistrare", (req, res) => {
  const { nume, email, telefon, parola } = req.body;

  if (!nume || !email || !parola) {
    return res
      .status(400)
      .json({
        succes: false,
        mesaj: "Numele, emailul și parola sunt obligatorii.",
      });
  }

  const users = getUsers();

  // Verifică dacă emailul există deja
  const userExistent = users.find((u) => u.email === email);
  if (userExistent) {
    return res
      .status(409)
      .json({ succes: false, mesaj: "Acest email este deja înregistrat." });
  }

  // Creare utilizator nou
  const utilizatorNou = {
    id: Date.now().toString(),
    nume,
    email,
    telefon: telefon || "",
    parola, // Într-o aplicație reală, parola ar trebui hash-uită (ex: bcrypt)
    dataInregistrare: new Date().toISOString(),
  };

  users.push(utilizatorNou);
  saveUsers(users);

  // Nu trimitem parola înapoi
  const userFaraParola = { ...utilizatorNou };
  delete userFaraParola.parola;

  res
    .status(201)
    .json({
      succes: true,
      mesaj: "Cont creat cu succes.",
      utilizator: userFaraParola,
    });
});

// Logare
app.post("/api/logare", (req, res) => {
  const { email, parola } = req.body;

  if (!email || !parola) {
    return res
      .status(400)
      .json({ succes: false, mesaj: "Emailul și parola sunt obligatorii." });
  }

  const users = getUsers();

  // Găsire utilizator
  const user = users.find((u) => u.email === email && u.parola === parola);

  if (!user) {
    return res
      .status(401)
      .json({ succes: false, mesaj: "Email sau parolă incorectă." });
  }

  // Nu trimitem parola înapoi
  const userFaraParola = { ...user };
  delete userFaraParola.parola;

  res
    .status(200)
    .json({
      succes: true,
      mesaj: "Logare reușită.",
      utilizator: userFaraParola,
    });
});

// Pornire server
app.listen(PORT, () => {
  console.log(`Serverul rulează pe http://localhost:${PORT}`);
  console.log(
    "Pentru a rula interfața, poți folosi extensia Live Server din VS Code, sau doar deschide index.html din browser.",
  );
});
