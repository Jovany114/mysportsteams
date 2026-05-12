import axios from 'axios';

const API_KEY = process.env.SPORTS_API_KEY;

const BASE_URLS = {
    NFL: 'https://v1.american-football.api-sports.io',
    NBA: 'https://v1.basketball.api-sports.io',
    MLB: 'https://v1.baseball.api-sports.io',
    NHL: 'https://v1.hockey.api-sports.io', 
};

const LEAGUE_IDS = {
    NFL: 1,
    NBA: 12,
    MLB: 1,
    NHL: 57,
};

const SEASONS = {
    NFL: '2024',
    NBA: '2023-2024',
    MLB: '2024',
    NHL: '2024', 
};

const headers = {
    'x-apisorts-key': API_KEY,
}

export const getTeamsByLeague = async (league) => {
    try {
        const response = await axios.get(
            `${BASE_URLS[league]}/teams?league=${LEAGUE_IDS[league]}&season=${SEASONS[league]}`,
            { headers }
        );
        const teams = response.data.response;

        //api-sports.io also includes conferences in this return, so filtering those out here
        return teams.filter((team) => team.country !== null && team.country?.name !== undefined && team.id !== undefined);
    } catch (error) {
        cosnole.error(`Error fetching ${league} teams:`, error);
        return[];
    }
};

export const getTeamGames = async (league, teamId) => {
    try {
        const response = await axios.get(
            `${BASE_URLS[league]}/games?team=${teamId}&season=${SEASONS[league]}`,
            { headers }
        );
        return response.data.response || [];
    } catch (error) {
        console.error(`Error fetching games for team ${teamId}:`, error);
        return [];
    }
};