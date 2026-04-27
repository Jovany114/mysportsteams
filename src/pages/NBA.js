import React from "react";
import { TEAMS } from '../data/teams';
import TeamCard from "../components/TeamCard";

function NBA() {
  return (
    <div>
      <h2>🏈 NBA Teams</h2>
      <div className="teams-grid">
        {TEAMS.NBA.map((team) => (
          <TeamCard key={team.name} team={team} league="NBA" />
        ))}
      </div>
    </div>
  );
}

export default NBA;