import styled from '@emotion/styled';
import React from 'react';
import { Button } from '.';
import mq from '../../utils/mediaQueries';

interface Props {}

const Container = styled.div`
  max-width: 175px;
  margin: 0 auto;
  position: relative;

  ${mq[2]} {
    max-width: 275px;
    margin-top: 8em;
  }
`;

const Picker: React.FC<Props> = () => {
  return (
    <Container>
      <img src="images/bg-triangle.svg" width="100%" alt="" />
      <Button buttonType="paper" position="top-left" />
      <Button buttonType="scissors" position="top-right" />
      <Button buttonType="rock" position="bottom-middle" />
    </Container>
  );
};

export default Picker;
