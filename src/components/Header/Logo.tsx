import styled from '@emotion/styled';
import React from 'react';
import mq from '../../utils/mediaQueries';

interface Props {}

const Img = styled.img`
  display: inline-block;
  height: 3.25rem;
  margin-left: 0.5em;

  ${mq[2]} {
    height: 6rem;
    margin: 0.5em;
  }
`;

const Logo: React.FC<Props> = () => {
  return <Img src="images/logo.svg" alt="Rock Paper Scissors" />;
};

export default Logo;
