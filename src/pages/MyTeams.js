import React from 'react' ;
import { useTeams } from '../context/TeamsContext';
import TeamCard from '../components/TeamCard';

function MyTeams() {
    const { followedTeams } = useTeams();

    if (followedTeams.length === 0){
        return (
            <div className="empty-state"> 
                <p>You're not following any teams yet.</p>
                <p>Head to a league tab to follow your teams!</p>
            </div>
        );
    } 

    return(
        <div>
            <h2>⭐ My Teams</h2>
            <div className="teams-grid">
                {followedTeams.map((team) => (
                    <TeamCard key={team.id} team={team} league={team.league} />
                ))}
            </div>
        </div>
    );
    
}

export default MyTeams;