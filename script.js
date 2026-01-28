const quotes = [
  { text: "Consistency beats motivation.", author: "Unknown", tag: "Discipline" },
  { text: "Focus is deciding what not to do.", author: "Steve Jobs", tag: "Focus" },
  { text: "Small actions compound.", author: "James Clear", tag: "Habits" },
  { text: "Learning never exhausts the mind.", author: "Leonardo da Vinci", tag: "Learning" },
  { text: "Clarity precedes mastery.", author: "Robin Sharma", tag: "Focus" },
  { text: "Energy flows where attention goes.", author: "Tony Robbins", tag: "Mindset" }
];

const els = {
  quote: document.getElementById("quote"),
  author: document.getElementById("author"),
  reflection: document.getElementById("reflection"),
  action: document.getElementById("action"),
  intent: document.getElementById("intentInput"),
  stats: document.getElementById("stats"),
  streak: document.getElementById("streak"),
  count: document.getElementById("charCount")
};

let data = JSON.parse(localStorage.getItem("iq-data")) || {
  streak: 0,
  lastDate: "",
  reflections: [],
  favorites: []
};

function today() {
  return new Date().toDateString();
}

function updateStreak() {
  if (data.lastDate !== today()) {
    data.streak++;
    data.lastDate = today();
  }
  els.streak.textContent = `Streak: ${data.streak} days`;
}

function randomQuote() {
  const intent = els.intent.value.toLowerCase();
  let pool = quotes.filter(q => q.tag.toLowerCase().includes(intent)) || quotes;
  const q = pool[Math.floor(Math.random() * pool.length)];
  els.quote.textContent = `"${q.text}"`;
  els.author.textContent = `— ${q.author}`;
  document.documentElement.style.setProperty("--accent", `hsl(${Math.random()*360},70%,60%)`);
}

document.getElementById("new").onclick = () => {
  randomQuote();
};

document.getElementById("daily").onclick = () => {
  if (!localStorage.getItem("daily-quote")) {
    localStorage.setItem("daily-quote", JSON.stringify(quotes[Math.floor(Math.random()*quotes.length)]));
  }
  const q = JSON.parse(localStorage.getItem("daily-quote"));
  els.quote.textContent = `"${q.text}"`;
  els.author.textContent = `— ${q.author}`;
};

els.reflection.oninput = () => {
  els.count.textContent = `${els.reflection.value.length} / 200`;
};

document.getElementById("fav").onclick = () => {
  data.favorites.push({
    quote: els.quote.textContent,
    reflection: els.reflection.value,
    action: els.action.value
  });
  save();
};

document.getElementById("export").onclick = () => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "intentional-quotes-data.json";
  a.click();
};

function save() {
  localStorage.setItem("iq-data", JSON.stringify(data));
}

function updateStats() {
  els.stats.textContent =
    `Saved quotes: ${data.favorites.length} | Reflections written: ${data.reflections.length}`;
}

updateStreak();
randomQuote();
updateStats();
save();