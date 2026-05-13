import React from "react";
import { useTeams } from '../context/TeamsContext';
import TeamCard from "../components/TeamCard";

function NHL() {
  const { allTeams, teamsLoading } = useTeams();

  if (teamsLoading) return <p className="events-loading">Loading NHL teams...</p>;

  return (
    <div>
      <h2>🏒 NHL Teams</h2>
      <div className="teams-grid">
        {allTeams.NHL.map((team) => (
          <TeamCard key={team.id} team={team} league="NHL" />
        ))}
      </div>
    </div>
  );
}

export default NHL;