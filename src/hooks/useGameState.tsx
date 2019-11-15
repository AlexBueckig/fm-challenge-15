import { useContext } from "react";
import GameStateContext from "../context/GameStateContext";

const useGameState = () => {
  const gameState = useContext(GameStateContext);

  if (gameState === undefined) {
    throw new Error(
      "This component needs to be wrapped inside a GameStateProvider!"
    );
  }

  return gameState;
};

export default useGameState;
