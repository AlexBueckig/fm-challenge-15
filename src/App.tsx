import { css, Global } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import Header from './components/Header';
import PlayingField from './components/PlayingField';
import Rules from './components/Rules';
import { GameStateProvider } from './context/GameStateContext';
import mq from './utils/mediaQueries';

const AppContainer = styled.div`
  background: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
  height: 100vh;
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  ${mq[2]} {
    justify-content: flex-start;
  }
`;

const App: React.FC = () => {
  return (
    <GameStateProvider>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed:600,700&display=swap');

          *,
          *::before,
          *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Barlow Semi Condensed', sans-serif;
          }

          body {
            font-family: 'Barlow Semi Condensed', sans-serif;
            font-weight: 600;
          }
        `}
      />
      <AppContainer>
        <Header />
        <PlayingField />
        <Rules />
      </AppContainer>
    </GameStateProvider>
  );
};

export default App;
