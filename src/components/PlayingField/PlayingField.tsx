import styled from '@emotion/styled';
import React from 'react';
import useGameState from '../../hooks/useGameState';
import mq from '../../utils/mediaQueries';
import Battle from './Battle';
import Picker from './Picker';

interface Props {}

const Container = styled.div`
  width: 100%;

  ${mq[2]} {
    flex: 1;
  }
`;

const PlayingField: React.FC<Props> = () => {
  const { state } = useGameState();

  return <Container>{state.playerPick === '' ? <Picker /> : <Battle />}</Container>;
};

export default PlayingField;
