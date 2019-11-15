import styled from '@emotion/styled';
import React from 'react';
import useGameState from '../../hooks/useGameState';
import mq from '../../utils/mediaQueries';

interface Props {}

const ScoreContainer = styled.div`
  background: white;
  padding: 0.5em 1.5em;
  border-radius: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  ${mq[2]} {
    padding: 1em 2em;
  }
`;

const Text = styled.p`
  text-transform: uppercase;
  font-size: 0.625rem;
  color: hsl(229, 64%, 46%);
  letter-spacing: 1px;

  ${mq[2]} {
    font-size: 1rem;
  }
`;

const Number = styled.p`
  font-weight: 700;
  font-size: 2.5rem;
  color: hsl(229, 25%, 31%);
  line-height: 1;

  ${mq[2]} {
    font-size: 3.5rem;
  }
`;

const Score: React.FC<Props> = () => {
  const { state } = useGameState();

  return (
    <ScoreContainer>
      <Text>Score</Text>
      <Number>{state.score}</Number>
    </ScoreContainer>
  );
};

export default Score;
