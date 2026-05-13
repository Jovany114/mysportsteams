import React from "react";
import { useTeams } from '../context/TeamsContext';
import TeamCard from "../components/TeamCard";

function NBA() {
  const { allTeams, teamsLoading } = useTeams();

  if (teamsLoading) return <p className="events-loading">Loading NBA teams...</p>;

  return (
    <div>
      <h2>🏀 NBA Teams</h2>
      <div className="teams-grid">
        {allTeams.NBA.map((team) => (
          <TeamCard key={team.id} team={team} league="NBA" />
        ))}
      </div>
    </div>
  );
}

export default NBA;