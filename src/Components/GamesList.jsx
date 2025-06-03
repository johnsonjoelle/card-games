import React, { useState } from 'react';
import GameCard from './GameCard';
import games from './allgames.json';
import './GamesList.css';
import deco from '../assets/deco-page-arrow.svg';

const GamesList = () => {
  const [gamesArray] = useState(() => [
    ...(games?.games || []),
    {name: "Coming Soon", player_count: "0P"}
  ]);

  return (
    <div className='page-container games-page'>
      <img src={deco} alt="" className='games-page-bg' />
      <section className="gamelist-container">
        <h1 className='page-header'>All Card Games</h1>
        <div className="gamelist">
          {gamesArray.map((game, index) => (
            <GameCard key={game.name || index} gameInfo={game} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default GamesList;