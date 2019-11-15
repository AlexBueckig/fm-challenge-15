import styled from '@emotion/styled';
import React, { useCallback, useState } from 'react';
import mq from '../../utils/mediaQueries';
import Overlay from './Overlay';

interface Props {}

const Button = styled.button`
  border: 2px solid rgba(255, 255, 255, 0.5);
  background: transparent;
  color: white;
  padding: 0.6em 2.5em;
  border-radius: 8px;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 2px;
  cursor: pointer;

  ${mq[2]} {
    align-self: flex-end;
  }
`;

const Rules: React.FC<Props> = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = useCallback(() => setOpen(prev => !prev), []);

  return (
    <>
      {open && <Overlay close={toggleOpen} />}
      <Button onClick={toggleOpen}>Rules</Button>
    </>
  );
};

export default Rules;
