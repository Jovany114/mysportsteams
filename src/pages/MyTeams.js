import React from 'react' ;
import { useTeams } from '../context/TeamsContext';

function MyTeams() {
    const { followedTeams, unfollowTeam } = useTeams();

    if (followedTeams.length === 0){
        return (
            <div className="empty-state"> 
                <p>You're not following any teams yet.</p>
                <p>Head to a league tab to follow your teams!</p>
            </div>
        );
    } else {
        return(
            <div>
                <h2>⭐ My Teams</h2>
                <div className="teams-grid">
                    {followedTeams.map((team) => (
                        <div key={team.name} className="team-card followed">
                            <div className="team-abbreviation">{team.abbreviation}</div>
                            <p className="team-name">{team.name}</p>
                            <p className="team-league">{team.league}</p>
                            <button
                                className="follow-btn"
                                onClick={() => unfollowTeam(team.name)}
                            >
                                ✓
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default MyTeams;