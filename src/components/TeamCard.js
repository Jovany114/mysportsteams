import React, { useState } from 'react';
import { useTeams } from '../context/TeamsContext';
import { getTeamGames } from '../services/api';

function TeamCard({ team, league }) {
    const { followTeam, unfollowTeam, isFollowed } = useTeams();
    const [expanded, setExpanded] = useState(false);
    const [games, setGames] = useState([]);
    const [gamesLoading, setGamesLoading] = useState(false);
    const [gamesFetched, setGamesFetched] = useState(false);

    const handleExpand = async () => {
        if (expanded) {
            setExpanded(false);
            return;
        }
        setExpanded(true);
        if(!gamesFetched) {
            setGamesLoading(true);
            const data = await getTeamGames(league, team.id);
            setGames(data);
            setGamesLoading(false);
            setGamesFetched(true);
        }
    };

    const handleFollow = (e) => {
        e.stopPropagation();
        if (isFollowed(team.id)) {
            unfollowTeam(team.id);
        } else {
            followTeam({ ...team, league });
        }
    };

    const formatDate = (dateStr) => {
        if (!dateStr) return 'TBD';
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric' });
    };

    const formatScore = (game) => {
        const home = game.scores?.home?.total ?? game.score?.home ?? '-';
        const away = game.scores?.away?.total ?? game.score?.away ?? '-';
        return `${away} - ${home}`;
    };

    const formatGame = (game) => {
        const home = game.teams?.home?.name ?? 'Home';
        const away = game.teams?.away?.name ?? 'Away';
        return `${away} @ ${home}`;
    };

    return (
        <div 
            className={`team-card ${isFollowed(team.id) ? 'followed' : ''} ${expanded ? 'expanded' : ''}`}
            onClick={handleExpand}
        >
            <img src={team.logo} alt={team.name} className="team-logo-img" />
            <p className="team-name">{team.name}</p>
            <button className="follow-btn" onClick={handleFollow}>
                {isFollowed(team.id) ? '✓' : '+'}
            </button>

            {expanded && (
                <div className="events-container" onClick={(e) => e.stopPropagation()}>
                    <h4 className="events-title">2024 Season Games</h4>
                    {gamesLoading ? (
                        <p className="events-loading">Loading games...</p>
                    ) : games.length > 0 ? (
                        <div className="games-scroll">
                            {games.map((game, index) => (
                                <div key={game.id ?? index} className="event-row">
                                    <span className="event-date">{formatDate(game.date)}</span>
                                    <span className="event-name">{formatGame(game)}</span>
                                    <span className="event-score">{formatScore(game)}</span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="no-events"> No games found for this season</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default TeamCard;