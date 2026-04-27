import React, { useEffect, useState } from 'react';
import { useTeams } from '../context/TeamsContext';
import { getTeamLogo } from '../services/api';

function TeamCard({ team, league }) {
    const { followTeam, unfollowTeam, isFollowed } = useTeams();
    const [logo, setLogo] = useState(null);

    useEffect(() => {
        const fetchLogo = async () => {
            const url = await getTeamLogo(team.name, team.searchName || null, team.searchIndex || 0);
            setLogo(url);
        };
        fetchLogo();
    }, [team.name]);

    const handleFollow = () => {
        if (isFollowed(team.name)) {
            unfollowTeam(team.name);
        } else {
            followTeam({ ...team, league });
        }
    };

    return (
        <div className={`team-card ${isFollowed(team.name) ? 'followed' : ''}`}>
            {logo ? (
                <img src={logo} alt={team.name} className="team-logo-img" />
            ) : (
                <div className="team-abbreviation">{team.abbreviation}</div>
            )}
            <p className="team-name">{team.name}</p>
            <button className="follow-btn" onClick={handleFollow}>
                {isFollowed(team.name) ? '✓' : '+'}
            </button>
        </div>
    );
}

export default TeamCard;