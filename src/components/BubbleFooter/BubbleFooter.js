// https://codepen.io/z-/pen/zYxdRQy

import React from 'react';
import styled, { ThemeProvider, keyframes } from 'styled-components';

const bubbleSize = props => keyframes`
  0%, 75% {
      width: ${props.size || '4rem'};
      height: ${props.size || '4rem'};
  }
  100% {
      width:0rem;
      height:0rem;
  }
`;

const bubbleMove = props => keyframes`
  0% {
      bottom:-4rem;
  }
  100% {
      bottom:${props.distance || '10rem'};
  }
`;

const Container = styled.div`
  z-index: 1;
  display: grid;
  position: relative;
  min-height: 12rem;
  margin-top: 90vh;
`;
const Bubbles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1rem;
  background: ${props => props.theme.backgroundColor};
  filter: url('#blob');
`;
const Bubble = styled.div`
  position: absolute;
  left: ${props => props.position || '50%'};
  background: ${props => props.theme.backgroundColor};
  border-radius: 100%;
  animation: ${props => bubbleSize(props)} ${props => props.time || '4s'}
      ease-in infinite ${props => props.time || '0s'},
    ${props => bubbleMove(props)} ${props => props.time || '4s'} ease-in
      infinite ${props => props.time || '0s'};
  transform: translate(-50%, 100%);
`;
const Content = styled.div`
  background: ${props => props.theme.backgroundColor};
`;

const BubbleFooter = ({ backgroundColor }) => {
  const n = 128;
  const theme = {
    backgroundColor: backgroundColor || '#ed5565'
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Bubbles>
          {[...Array(n)].map((e, i) => (
            <Bubble
              key={`bubble-${i}`}
              size={`${2 + Math.random() * 4}rem`}
              distance={`${6 + Math.random() * 4}rem`}
              position={`${-5 + Math.random() * 110}%`}
              time={`${2 + Math.random() * 2}s`}
              delay={`${-1 * (2 + Math.random() * 2)}s`}
            ></Bubble>
          ))}
        </Bubbles>
        <Content></Content>
      </Container>
    </ThemeProvider>
  );
};

export default BubbleFooter;
