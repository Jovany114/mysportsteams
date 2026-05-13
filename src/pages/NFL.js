import React from "react";
import { useTeams } from '../context/TeamsContext';
import TeamCard from "../components/TeamCard";

function NFL() {
  const { allTeams, teamsLoading } = useTeams();

  if (teamsLoading) return <p className="events-loading">Loading NFL teams...</p>;

  return (
    <div>
      <h2>🏈 NFL Teams</h2>
      <div className="teams-grid">
        {allTeams.NFL.map((team) => (
          <TeamCard key={team.id} team={team} league="NFL" />
        ))}
      </div>
    </div>
  );
}

export default NFL;