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
  const number = Math.floor(Math.random() * 999);
  const symbol = getRandomItem(symbols);
  return `${adjective}${noun}${number}${symbol}`;
}

export default function handler(req, res) {
  const count = parseInt(req.query.count || "8");
  const passwords = Array.from({ length: count }, generatePassword);
  res.status(200).json({ passwords });
}
