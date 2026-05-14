const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3001;
const API_KEY = process.env.SPORTS_API_KEY;

const BASE_URLS = {
    NFL: 'https://v1.american-football.api-sports.io',
    NBA: 'https://v1.basketball.api-sports.io',
    MLB: 'https://v1.baseball.api-sports.io',
    NHL: 'https://v1.hockey.api-sports.io', 
};

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.get('/api/:league/teams', async (req, res) => {
    const { league } = req.params;
    const { league_id, season } = req.query;
    try {
        const response = await fetch(
            `${BASE_URLS[league.toUpperCase()]}/teams?league=${league_id}&season=${season}`,
            { headers: { 'x-apisports-key': API_KEY } }
        );
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching teams:', error);
        res.status(500).json({ error: 'Failed to fetch teams' });
    }
});

app.get('/api/:league/games', async (req, res) => {
    const { league } = req.params;
    const { team, season } = req.query;
    try {
        const response = await fetch(
            `${BASE_URLS[league.toUpperCase()]}/games?team=${team}&season=${season}`,
            { headers: { 'x-apisports-key': API_KEY } }
        );
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching games:', error);
        res.status(500).json({ error: 'Failed to fetch games' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});