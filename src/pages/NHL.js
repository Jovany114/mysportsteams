import React from 'react';
import { TEAMS } from '../data/teams';

function NHL() {
  return (
    <div>
      <h2>🏈 NHL Teams</h2>
      <div className="teams-grid">
        {TEAMS.NHL.map((team) => (
          <div key={team.id} className="team-card">
            <div className="team-abbreviation">{team.abbreviation}</div>
            <p className="team-name">{team.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NHL;