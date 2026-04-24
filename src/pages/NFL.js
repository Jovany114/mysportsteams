import React from 'react';
import { TEAMS } from '../data/teams';
import { useTeams } from '../context/TeamsContext';

function NFL() {
  const { followTeam, unfollowTeam, isFollowed } = useTeams();

  const handleFollow = (team) => {
    if (isFollowed(team.name)) {
      unfollowTeam(team.name);
    } else {
      followTeam({ ...team, league: 'NFL'});
    }
  };

  return (
    <div>
      <h2>🏈 NFL Teams</h2>
      <div className="teams-grid">
        {TEAMS.NFL.map((team) => (
          <div 
            key={team.name} 
            className={`team-card ${isFollowed(team.name) ? 'followed' : ''}`}
          >
            <div className="team-abbreviation">{team.abbreviation}</div>
            <p className="team-name">{team.name}</p>
            <button
              className="follow-btn"
              onClick={() => handleFollow(team)}
            >
              {isFollowed(team.name) ? '✓' : '+'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NFL;