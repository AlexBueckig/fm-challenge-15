import styled from '@emotion/styled';
import React from 'react';
import useGameState from '../../hooks/useGameState';
import mq from '../../utils/mediaQueries';

export type buttonNames = 'rock' | 'paper' | 'scissors' | 'lizard' | 'spock';
type positionsType = 'top-left' | 'top-right' | 'bottom-middle';

interface Props {
  buttonType: buttonNames;
  position?: positionsType;
  won?: boolean;
}

const buttonTypes = {
  rock: {
    background: {
      from: 'hsl(349, 71%, 52%)',
      to: 'hsl(349, 70%, 56%)'
    }
  },
  paper: {
    background: {
      from: 'hsl(230, 89%, 62%)',
      to: 'hsl(230, 89%, 65%)'
    }
  },
  scissors: {
    background: {
      from: 'hsl(39, 89%, 49%)',
      to: 'hsl(40, 84%, 53%)'
    }
  },
  lizard: {
    background: {
      from: 'hsl(261, 73%, 60%)',
      to: 'hsl(261, 72%, 63%)'
    }
  },
  spock: {
    background: {
      from: 'hsl(189, 59%, 53%)',
      to: 'hsl(189, 58%, 57%)'
    }
  }
};

const positions = {
  'top-left': {
    top: 0,
    left: 0,
    transform: 'translate(-50%, -50%)'
  },
  'top-right': {
    top: 0,
    right: 0,
    transform: 'translate(50%, -50%)'
  },
  'bottom-middle': {
    bottom: 0,
    left: '50%',
    transform: 'translate(-50%, 50%)'
  }
};

const Container = styled.div<Props>`
  --gradientFrom: ${(props: Props) => buttonTypes[props.buttonType].background.from};
  --gradientTo: ${(props: Props) => buttonTypes[props.buttonType].background.to};

  ${(props: Props) => {
    if (props.position) {
      const position = positions[props.position];
      return (
        'position: absolute;' +
        Object.keys(position)
          .map(key => {
            // @ts-ignore
            return `${key}: ${position[key]};`;
          })
          .join('')
      );
    }
  }}
  background: linear-gradient(
    to bottom,
    var(--gradientFrom),
    var(--gradientTo)
  );
  border-radius: 50%;
  padding: 1em;
  width: 130px;
  height: 130px;
  box-shadow: inset 0 -5px 0px rgba(0, 0, 0, 0.25) ${({ won }: Props) => {
      if (won) {
        return ', 0 0 0 15px rgba(255, 255, 255, 0.03), 0 0 0 40px rgba(255, 255, 255, 0.03), 0 0 0 80px rgba(255, 255, 255, 0.03)';
      } else {
        return '';
      }
    }};

  ${mq[2]} {
    width: 200px;
    height: 200px;
    padding: 1.5em;
  }
`;

interface ButtonProps {
  buttonType: buttonNames;
}

const PlayButton = styled.button<ButtonProps>`
  display: inline-block;
  background: white url(images/icon-${(props: ButtonProps) => props.buttonType}.svg) no-repeat center;
  background-size: 60%;
  cursor: pointer;
  border: none;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 5px 0px rgba(0, 0, 0, 0.15);
`;

const Button: React.FC<Props> = ({ buttonType, position, won }) => {
  const { playerPick, state } = useGameState();

  const onClick = () => {
    playerPick(buttonType);
  };

  return (
    <Container buttonType={buttonType} position={position} won={won}>
      <PlayButton onClick={onClick} buttonType={buttonType} disabled={state.playerPick !== ''} />
    </Container>
  );
};

export default Button;
