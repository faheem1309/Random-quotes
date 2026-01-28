const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Learning never exhausts the mind.", author: "Leonardo da Vinci" },
  { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "Discipline is the bridge between goals and accomplishment.", author: "Jim Rohn" },
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  { text: "Dream big. Start small. Act now.", author: "Robin Sharma" },
  { text: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { text: "Great things are done by a series of small things brought together.", author: "Vincent Van Gogh" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin" },
  { text: "Consistency beats motivation every time.", author: "Unknown" },
  { text: "The future belongs to those who prepare for it today.", author: "Malcolm X" },
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" }
];

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const button = document.getElementById("new-quote");
const container = document.querySelector(".quote-container");

button.addEventListener("click", () => {
  container.classList.remove("fade");

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = `"${quotes[randomIndex].text}"`;
    authorText.textContent = `— ${quotes[randomIndex].author}`;
    container.classList.add("fade");
  }, 150);
});
