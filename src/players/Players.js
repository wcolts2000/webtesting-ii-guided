import React from "react";

function Players(props) {
  const { players = [] } = props;

  if (!players || !players.length > 0) {
    return <h3>No PLayers Available</h3>;
  }

  return (
    <>
      <h3>Player List</h3>

      {players.map(p => (
        <div data-testid="player-name" key={p.id}>
          {p.name}
        </div>
      ))}
    </>
  );
}

export default Players;
