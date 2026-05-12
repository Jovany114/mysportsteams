import React, { createContext, useContext, useState, useEffect } from 'react';
import { getTeamsByLeague } from '../services/api';

const TeamsContext = createContext();

export function TeamsProvider({ children }) {
    const [followedTeams, setFollowedTeams] = useState([]);
    const [allTeams, setAllTeams] = useState({
        NFL: [],
        NBA: [],
        MLB: [],
        NHL: [],
    });
    const [teamsLoading, setTeamsLoading] = useState(true);

    useEffect(() => {
        const fetchAllTeams = async () => {
            setTeamsLoading(true);
            const [NFL, NBA, MLB, NHL] = await Promise.all([
                getTeamsByLeague('NFL'),
                getTeamsByLeague('NBA'),
                getTeamsByLeague('MLB'),
                getTeamsByLeague('NHL'),
            ]);
            setAllTeams({ NFL, NBA, MLB, NHL });
            setTeamsLoading(false);
        };
        fetchAllTeams();
    }, []);
    
    const followTeam = (team) => {
        setFollowedTeams((prev) => [...prev, team]);
    };

    const unfollowTeam = (teamId) => {
        setFollowedTeams((prev) => prev.filter((t) => t.id !== teamId));
    };

    const isFollowed = (teamId) => {
        return followedTeams.some((t) => t.id === teamId);
    };

    return (
        <TeamsContext.Provider value={{
            followedTeams,
            allTeams,
            teamsLoading,
            followTeam,
            unfollowTeam,
            isFollowed,
        }}>
            {children}
        </TeamsContext.Provider>
    );
}

export function useTeams() {
    return useContext(TeamsContext);
}