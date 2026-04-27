import React from "react";
import { TEAMS } from '../data/teams';
import TeamCard from "../components/TeamCard";

function NHL() {
  return (
    <div>
      <h2>🏈 NHL Teams</h2>
      <div className="teams-grid">
        {TEAMS.NHL.map((team) => (
          <TeamCard key={team.name} team={team} league="NHL" />
        ))}
      </div>
    </div>
  );
}

export default NHL;