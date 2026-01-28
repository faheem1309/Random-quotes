const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Learning never exhausts the mind.", author: "Leonardo da Vinci" },
  { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "Discipline is the bridge between goals and accomplishment.", author: "Jim Rohn" },
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  { text: "Dream big. Start small. Act now.", author: "Robin Sharma" },
  { text: "Your time is limited.", author: "Steve Jobs" },
  { text: "Great things are done by small things together.", author: "Van Gogh" },
  { text: "First solve the problem. Then write the code.", author: "John Johnson" },
  { text: "Knowledge pays the best interest.", author: "Benjamin Franklin" },
  { text: "Consistency beats motivation.", author: "Unknown" },
  { text: "The future belongs to those who prepare today.", author: "Malcolm X" },
  { text: "Turn wounds into wisdom.", author: "Oprah Winfrey" }
];

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const container = document.querySelector(".quote-container");
const historyEl = document.getElementById("history");
const ring = document.querySelector(".progress-ring__circle");
const shortOnly = document.getElementById("shortOnly");

let history = [];
let favorites = JSON.parse(localStorage.getItem("favs")) || [];
let timer = 0;

function randomQuote() {
  let pool = shortOnly.checked
    ? quotes.filter(q => q.text.length < 60)
    : quotes;

  const q = pool[Math.floor(Math.random() * pool.length)];

  container.classList.remove("fade");
  setTimeout(() => {
    quoteEl.textContent = `"${q.text}"`;
    authorEl.textContent = `— ${q.author}`;
    container.classList.add("fade");

    document.documentElement.style.setProperty(
      "--accent",
      `hsl(${Math.random() * 360}, 80%, 60%)`
    );

    history.unshift(q.text);
    history = history.slice(0, 6);
    renderHistory();
  }, 150);
}

function renderHistory() {
  historyEl.innerHTML = history.map(h => `<div>• ${h}</div>`).join("");
}

document.getElementById("new-quote").onclick = randomQuote;

document.getElementById("copy").onclick = () => {
  navigator.clipboard.writeText(quoteEl.textContent);
};

document.getElementById("fav").onclick = () => {
  favorites.push(quoteEl.textContent);
  localStorage.setItem("favs", JSON.stringify(favorites));
};

setInterval(() => {
  timer++;
  ring.style.strokeDashoffset = 226 - (timer / 10) * 226;
  if (timer >= 10) {
    timer = 0;
    randomQuote();
  }
}, 1000);

document.addEventListener("keydown", e => {
  if (e.code === "Space") randomQuote();
});

randomQuote();