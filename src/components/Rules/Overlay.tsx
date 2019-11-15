import styled from '@emotion/styled';
import React from 'react';
import mq from '../../utils/mediaQueries';

interface Props {
  close: () => void;
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  ${mq[2]} {
    display: grid;
    place-items: center;
  }
`;

const Wrapper = styled.div`
  background: white;
  display: grid;
  place-items: center;
  padding: 2em 4em;
  width: 100%;
  height: 100%;
  position: relative;

  ${mq[2]} {
    width: 500px;
    height: 500px;
    border-radius: 10px;
    margin: 0 auto;
    gap: 2em;
  }
`;

const Header = styled.h2`
  text-transform: uppercase;
  font-size: 2rem;

  ${mq[2]} {
    justify-self: start;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const CloseButton = styled.button`
  border: none;
  background: transparent;
  width: 30px;
  cursor: pointer;

  ${mq[2]} {
    position: absolute;
    top: 3em;
    right: 3em;
  }
`;

const Overlay: React.FC<Props> = ({ close }) => {
  return (
    <Container>
      <Wrapper>
        <Header>Rules</Header>
        <Img src="images/image-rules.svg" />
        <CloseButton onClick={close}>
          <img src="images/icon-close.svg" alt="close button" width="100%" />
        </CloseButton>
      </Wrapper>
    </Container>
  );
};

export default Overlay;
