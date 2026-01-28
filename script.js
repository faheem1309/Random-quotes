const quotes = [
  { text: "Consistency beats motivation.", author: "Unknown" },
  { text: "Focus is deciding what not to do.", author: "Steve Jobs" },
  { text: "Small actions compound over time.", author: "James Clear" },
  { text: "Learning never exhausts the mind.", author: "Leonardo da Vinci" },
  { text: "Clarity precedes mastery.", author: "Robin Sharma" },
  { text: "Energy flows where attention goes.", author: "Tony Robbins" },
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  { text: "Discipline creates freedom.", author: "Jocko Willink" },
  { text: "Do less, but do it better.", author: "Unknown" },
  { text: "Progress, not perfection.", author: "Unknown" },
  { text: "Calm is a superpower.", author: "Naval Ravikant" },
  { text: "Your habits shape your future.", author: "James Clear" },
  { text: "Attention is your most valuable asset.", author: "Unknown" },
  { text: "Slow down to speed up.", author: "Unknown" },
  { text: "What you repeat, you become.", author: "Unknown" }
];

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const reflectionEl = document.getElementById("reflection");
const card = document.querySelector(".card");

function showQuote() {
  card.classList.remove("fade");

  setTimeout(() => {
    const q = quotes[Math.floor(Math.random() * quotes.length)];
    quoteEl.textContent = `"${q.text}"`;
    authorEl.textContent = `— ${q.author}`;
    reflectionEl.value = "";
    card.classList.add("fade");
  }, 150);
}

document.getElementById("newQuote").onclick = showQuote;

showQuote();