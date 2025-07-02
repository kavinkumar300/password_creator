const adjectives = [
  "Brindle", "Mellofy", "Crystilly", "Plumble", "Grivvly",
  "Kooma", "Puriyalada", "Marandhupochu"
];

const nouns = [
  "Spark", "Stone", "Mark", "Quest", "Peak",
  "PattiKuppan", "Tone"
];

const symbols = ["$", "#", "!", "%", "^", "&*", "*", "@"];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generatePassword() {
  const adjective = getRandomItem(adjectives);
  const noun = getRandomItem(nouns);
  const number = Math.floor(Math.random() * 900) + 100; // Random 3-digit number
  const symbol = getRandomItem(symbols);
  return `${adjective}${noun}${number}${symbol}`;
}

export default function handler(req, res) {
  try {
    const count = parseInt(req.query.count || "8");
    const passwords = Array.from({ length: count }, () => generatePassword());
    res.status(200).json({ passwords });
  } catch (err) {
    console.error("Error generating passwords:", err);
    res.status(500).json({ error: "Server error" });
  }
}
