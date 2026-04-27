import axios from 'axios';

const BASE_URL = 'https://www.thesportsdb.com/api/v1/json/123';

const logoCache = {};

export const getTeamLogo = async (teamName, searchName = null, searchIndex = 0) => {
    if (logoCache[teamName]) return logoCache[teamName];
    try{
        const query = searchName || teamName;
        const url = `${BASE_URL}/searchteams.php?t=${encodeURIComponent(query)}`;
        const response = await axios.get(url);
        const teams = response.data.teams;
        if(teams && teams.length > searchIndex){
            const logo = teams[searchIndex].strBadge;
            logoCache[teamName] = logo;
            return logo;
        }
        return null;
    } catch (error) {
        console.error(`Error fetching logo for ${teamName}:`, error);
        return null;
    }
};