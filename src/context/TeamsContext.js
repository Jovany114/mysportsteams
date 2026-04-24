import React, { createContext, useContext, useState } from 'react';

const TeamsContext = createContext();

export function TeamsProvider({ children }) {
    const [followedTeams, setFollowedTeams] = useState([]);
    
    const followTeam = (team) => {
        setFollowedTeams((prev) => [...prev, team]);
    };

    const unfollowTeam = (teamName) => {
        setFollowedTeams((prev) => prev.filter((t) => t.name !== teamName));
    };

    const isFollowed = (teamName) => {
        return followedTeams.some((t) => t.name ===teamName);
    };

    return (
        <TeamsContext.Provider value={{ followedTeams, followTeam, unfollowTeam, isFollowed }}>
            {children}
        </TeamsContext.Provider>
    );
}

export function useTeams() {
    return useContext(TeamsContext);
}