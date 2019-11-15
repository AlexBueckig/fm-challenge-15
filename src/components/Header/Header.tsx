import styled from '@emotion/styled';
import React from 'react';
import { Score } from '.';
import mq from '../../utils/mediaQueries';
import Logo from './Logo';

interface Props {}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0.75em;
  border: 3px solid hsl(217, 16%, 45%);
  border-radius: 5px;
  width: 100%;

  ${mq[2]} {
    padding: 1em;
    border-radius: 10px;
    max-width: 700px;
  }
`;

const Header: React.FC<Props> = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Score />
    </HeaderContainer>
  );
};

export default Header;
