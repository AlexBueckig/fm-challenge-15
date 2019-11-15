import React, { createContext, Reducer, useCallback, useEffect, useReducer } from 'react';

interface Props {}

type Actions =
  | { type: 'playerPick'; value: string }
  | { type: 'housePick'; value: string }
  | { type: 'setScore'; value: number }
  | { type: 'startRound' }
  | { type: 'winRound' }
  | { type: 'looseRound' };

const gameState = {
  roundStarted: true,
  score: 0,
  playerPick: '',
  housePick: '',
  won: false
};

const picks = { normal: ['rock', 'paper', 'scissors'] };

interface GameStateContextType {
  state: typeof gameState;
  playerPick: (value: string) => void;
  housePick: (value: string) => void;
  startRound: () => void;
  startBattle: () => void;
}

const GameStateContext = createContext<GameStateContextType>({
  state: gameState,
  playerPick: (value: string) => {},
  housePick: (value: string) => {},
  startRound: () => {},
  startBattle: () => {}
});

const reducer: Reducer<typeof gameState, Actions> = (state, action) => {
  switch (action.type) {
    case 'playerPick':
      return { ...state, playerPick: action.value };
    case 'housePick':
      return { ...state, housePick: action.value };
    case 'startRound':
      return { ...state, hasPicked: false, roundStarted: true, playerPick: '', housePick: '' };
    case 'looseRound':
      return { ...state, roundStarted: false, won: false };
    case 'winRound':
      return { ...state, roundStarted: false, score: ++state.score, won: true };
    case 'setScore':
      return { ...state, score: action.value };
    default:
      throw new Error('Unknown action...');
  }
};

const GameStateProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, gameState);

  const playerPick = (value: string) => {
    dispatch({ type: 'playerPick', value });
  };

  const housePick = (value: string) => {
    dispatch({ type: 'housePick', value });
  };

  const startRound = () => {
    dispatch({ type: 'startRound' });
  };

  const startBattle = useCallback(() => {
    const gameMode = 'normal';
    setTimeout(() => {
      let pick = Math.floor((Math.random() * 10) % 3);
      while (pick === picks[gameMode].indexOf(state.playerPick)) {
        pick = Math.floor((Math.random() * 10) % 3);
      }
      housePick(picks[gameMode][pick]);
      const result = picks[gameMode].indexOf(state.playerPick) - pick;
      if (result === 1 || result === -2) {
        dispatch({ type: 'winRound' });
      } else {
        dispatch({ type: 'looseRound' });
      }
    }, 1000);
  }, [state.playerPick]);

  useEffect(() => {
    if (state.score !== 0) localStorage.setItem('score', JSON.stringify(state.score));
  }, [state.score]);

  useEffect(() => {
    const score = localStorage.getItem('score') || '0';
    dispatch({ type: 'setScore', value: JSON.parse(score) });
  }, []);

  return (
    <GameStateContext.Provider value={{ state, playerPick, housePick, startRound, startBattle }}>
      {children}
    </GameStateContext.Provider>
  );
};

export default GameStateContext;
export { GameStateProvider };
