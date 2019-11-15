import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { Button } from '.';
import useGameState from '../../hooks/useGameState';
import mq from '../../utils/mediaQueries';
import BattleResult from './BattleResult';
import { buttonNames } from './Button';

interface Props {}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Placeholder = styled.div`
  background: rgba(0, 0, 0, 0.2);
  width: 130px;
  height: 130px;
  border-radius: 50%;

  ${mq[2]} {
    width: 200px;
    height: 200px;
  }
`;

const Text = styled.p`
  text-transform: uppercase;
  color: white;
  letter-spacing: 2px;
  margin-top: 1.25em;
`;

const Test = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mq[2]} {
    max-width: 550px;
    margin: 1.75em auto;
  }
`;

const Battle: React.FC<Props> = () => {
  const { state, startBattle } = useGameState();

  useEffect(() => {
    startBattle();
  }, [startBattle]);

  return (
    <Test>
      <Container>
        <ButtonContainer>
          <Button
            buttonType={state.playerPick as buttonNames}
            won={state.playerPick !== '' && state.housePick !== '' && state.won}
          />
          <Text>You picked</Text>
        </ButtonContainer>
        <ButtonContainer>
          {state.housePick === '' ? (
            <Placeholder />
          ) : (
            <Button
              buttonType={state.housePick as buttonNames}
              won={state.playerPick !== '' && state.housePick !== '' && !state.won}
            />
          )}
          <Text>The house picked</Text>
        </ButtonContainer>
      </Container>
      {state.playerPick !== '' && state.housePick !== '' ? <BattleResult /> : null}
    </Test>
  );
};

export default Battle;
