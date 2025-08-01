const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

const userData = {
  name: "Disharth Soni",
  referralCode: "disharth2025",
  donationsRaised: 1500,
  rewards: ["Intern Badge", "T-shirt", "Certificate"]
};

const leaderboardData = [
  { name: "Disharth", donations: 1500 },
  { name: "Dakshita", donations: 1200 },
  { name: "Deepali", donations: 950 }
];

app.get('/api/user', (req, res) => {
  res.json(userData);
});

app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboardData);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});