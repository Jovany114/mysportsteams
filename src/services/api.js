import axios from 'axios';

const SERVER_URL = 'http://localhost:3001/api';

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

export const getTeamsByLeague = async (league) => {
    try {
        const response = await axios.get(`${SERVER_URL}/${league}/teams`, {
            params: {
                league_id: LEAGUE_IDS[league],
                season: SEASONS[league],
            },
        });
        const teams = response.data.response;

        //api-sports.io also includes conferences in this return, so filtering those out here
        return teams.filter((team) => team.country !== null && team.country?.name !== undefined && team.id !== undefined);
    } catch (error) {
        console.error(`Error fetching ${league} teams:`, error);
        return[];
    }
};

export const getTeamGames = async (league, teamId) => {
    try {
        const response = await axios.get(`${SERVER_URL}/${league}/games`, {
            params: {
                team: teamId,
                season: SEASONS[league],
            },
        });
        return response.data.response || [];
    } catch (error) {
        console.error(`Error fetching games for team ${teamId}:`, error);
        return [];
    }
};