import React from 'react';
import p1 from '../assets/user_1p.svg';
import p2 from '../assets/user_2p.svg';

const GameCard = (props) => {
  return (
    <div className={props.gameInfo.player_count === "0P" ? "card-container-outer disabled" : "card-container-outer"} key={props.index}>
      <div className="card-container-inner">
        <p className="card-title">{props.gameInfo.name}</p>
        <p className="play-message">Play?</p>
        <div className="card-player-container">
          <p>{props.gameInfo.player_count}</p>
          <img 
            src={parseInt(props.gameInfo.player_count) > 1 ? p2 : p1} 
            alt="" 
            className={"card-player-icon " + "c" + props.gameInfo.player_count }
          />
        </div>
      </div>
    </div>
  )
}

export default GameCard;