const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const dummyUser = {
  email: "saloni@example.com",
  password: "123456",
  name: "Saloni Mishra",
  referralCode: "saloni2025",
  totalDonations: 1750
};

const leaderboard = [
  { name: "Saloni Mishra", totalDonations: 1750 },
  { name: "Aryan Dwivedi", totalDonations: 1600 },
  { name: "John Doe", totalDonations: 1200 },
];

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if (email === dummyUser.email && password === dummyUser.password) {
    res.json({ success: true, user: dummyUser });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

app.get('/api/user', (req, res) => {
  res.json(dummyUser);
});

app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboard);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
