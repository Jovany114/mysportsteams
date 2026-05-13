import React from "react";
import { useTeams } from '../context/TeamsContext';
import TeamCard from "../components/TeamCard";

function MLB() {
  const { allTeams, teamsLoading } = useTeams();

  if (teamsLoading) return <p className="events-loading">Loading MLB teams...</p>;

  return (
    <div>
      <h2>⚾ MLB Teams</h2>
      <div className="teams-grid">
        {allTeams.MLB.map((team) => (
          <TeamCard key={team.id} team={team} league="MLB" />
        ))}
      </div>
    </div>
  );
}

export default MLB;