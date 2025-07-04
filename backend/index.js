import express from 'express';
import cors from 'cors';
import { headlines } from './headlines.js';

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// ✅ Root route
app.get('/', (req, res) => {
  res.send('Backend running.');
});

const getRandomHeadline = (name, location) => {
  const template = headlines[Math.floor(Math.random() * headlines.length)];
  return template.replace('{name}', name).replace('{location}', location);
};

// POST /business-data
app.post('/business-data', (req, res) => {
  const { name, location } = req.body;
  if (!name || !location) return res.status(400).json({ error: "Name and location are required." });

  const data = {
    rating: (Math.random() * (5 - 3.5) + 3.5).toFixed(1),
    reviews: Math.floor(Math.random() * 200 + 50),
    headline: getRandomHeadline(name, location)
  };

  res.json(data);
});

// GET /regenerate-headline
app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query;
  if (!name || !location) return res.status(400).json({ error: "Name and location are required." });

  const headline = getRandomHeadline(name, location);
  res.json({ headline });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
