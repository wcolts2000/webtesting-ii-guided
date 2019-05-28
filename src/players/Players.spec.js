import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";

import Players from "./Players";

describe("<Players />", () => {
  it('Should render "No players available" when no players provided', () => {
    const { getByText } = render(<Players />);

    getByText(/no players/i);
  });

  it('Should render "No players available" when no players provided', () => {
    const { queryByText } = render(<Players />);

    expect(queryByText(/no players/i)).not.toBeNull();

    expect(queryByText(/no players/i)).toBeInTheDocument();
  });

  it("should render the provided list of players", () => {
    const players = [
      { id: 1, name: "Sam" },
      { id: 2, name: "Bilbo" },
      { id: 3, name: "Frodo" }
    ];

    const { getAllByTestId } = render(<Players players={players} />);

    const playerNames = getAllByTestId("player-name").map(n => n.textContent);

    expect(playerNames).toHaveLength(players.length);

    const names = players.map(p => p.name);

    expect(playerNames).toEqual(names);
  });
});
