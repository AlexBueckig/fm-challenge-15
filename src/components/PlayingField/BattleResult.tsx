import styled from '@emotion/styled';
import React from 'react';
import useGameState from '../../hooks/useGameState';
import mq from '../../utils/mediaQueries';

interface Props {}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mq[2]} {
    margin-top: 3em;
  }
`;

const Text = styled.p`
  color: white;
  font-size: 3.5rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin: 0 0 0.25em;
`;

const Button = styled.button`
  background: white;
  padding: 1em 4em;
  letter-spacing: 2px;
  border-radius: 10px;
  font-size: 1rem;
  border: none;
  text-transform: uppercase;
  color: hsl(229, 25%, 31%);
`;

const BattleResult: React.FC<Props> = () => {
  const { state, startRound } = useGameState();

  return (
    <Container>
      <Text>You {state.won ? 'win' : 'lose'}</Text>
      <Button onClick={startRound}>Play again</Button>
    </Container>
  );
};

export default BattleResult;
