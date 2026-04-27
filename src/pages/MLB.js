import React from "react";
import { TEAMS } from '../data/teams';
import TeamCard from "../components/TeamCard";

function MLB() {
  return (
    <div>
      <h2>🏈 MLB Teams</h2>
      <div className="teams-grid">
        {TEAMS.MLB.map((team) => (
          <TeamCard key={team.name} team={team} league="MLB" />
        ))}
      </div>
    </div>
  );
}

export default MLB;