import React from "react";
import { TEAMS } from '../data/teams';
import TeamCard from "../components/TeamCard";

function NFL() {
  return (
    <div>
      <h2>🏈 NFL Teams</h2>
      <div className="teams-grid">
        {TEAMS.NFL.map((team) => (
          <TeamCard key={team.name} team={team} league="NFL" />
        ))}
      </div>
    </div>
  );
}

export default NFL;