// https://codepen.io/z-/pen/PoYepvR

import React from 'react';
import styled, { ThemeProvider, css, keyframes } from 'styled-components';
import type from './type';
import './icomoon/style.css';

const defaultTheme = {
  width: '200px',
  height: '100px',
  duration: '16s',
  offset: '0s'
};

const spin = keyframes`
  /* Cannot hover while rotating */
  10.001%, 15%, 35.001%, 40%, 60.001%, 65%, 85.001%, 90% {
		pointer-events: none; 
	}
	0%, 10% {
		transform: rotateX(0);
		pointer-events: initial;
	}
	15.001%, 25%, 35% {
		transform: rotateX(90deg);
		pointer-events: initial;
	}
	40.001%, 50%, 60% {
		transform: rotateX(180deg);
		pointer-events: initial;
	}
	65.001%, 75%, 85% {
		transform: rotateX(270deg);
		pointer-events: initial;
	}
	90.001%, 100% {
		transform: rotateX(360deg);
		pointer-events: initial;
	}
`;

const shadowHoverBox = css`
  box-shadow: 0 0 0 0px rgba(255, 255, 255, 0.3);
  &:hover {
    box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.5);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  > *:not(.row):not(.column),
  .row > *:not(.row):not(.column),
  .column > *:not(.row):not(.column) {
    margin: 10px;
  }
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
const RotateWrapper = styled.div`
  width: ${props => props.theme.width};
  height: ${props => props.theme.height};
  display: inline-block;
  perspective: 0px;
  perspective-origin: 50% 50%;
  cursor: pointer;
`;
RotateWrapper.defaultProps = {
  theme: defaultTheme
};
const Rotate = styled.div`
  position: relative;
  width: ${props => props.theme.width};
  transform-style: preserve-3d;
  transform-origin: 0 calc(${props => props.theme.height} / 2);
  animation: ${spin} ${props => props.theme.duration} infinite ease
    ${props => props.theme.offset};
  &:hover {
    /* On hover the animation is paused, pointer events is disabled while rotating */
    animation-play-state: paused;
  }
  > a {
    /* color: inherit;
    text-decoration: none; */
  }

  > * {
    ${shadowHoverBox}
    position: absolute;
    width: ${props => props.theme.width};
    height: ${props => props.theme.height};
    transition: 0.25s -0.1s;

    &.image-banner {
      display: flex;
      flex-direction: row;
      align-items: center;
      > *:not(img) {
        flex-grow: 1;
      }
      > * {
        margin: 10px 0 10px 10px;
        &:first-child {
          margin-left: 10px;
        }
        &:last-child {
          margin-right: 10px;
        }
      }
      img {
        height: calc(100% - 20px);
      }
      .text {
        display: flex;
        flex-direction: column;
        .b {
          font-weight: bold;
        }
      }
    }
    &.backgroundimage {
      background-size: 200px 200px;
      background-position: center;
      background-repeat: no-repeat;
    }
    &.icon {
      line-height: ${props => props.theme.height};
      text-align: center;
    }
  }
`;
Rotate.defaultProps = {
  theme: defaultTheme
};
const Side = styled.a`
  color: ${props => props.fontColor || 'inherit'};
  text-decoration: none;
  font-size: ${props => props.fontSize};
  background: ${props => props.background};

  &.front {
    transform: translateZ(calc(${props => props.theme.height} / 2));
  }
  &.bottom {
    transform: rotateX(-90deg)
      translateY(calc(${props => props.theme.height} / 2));
    transform-origin: bottom center;
  }
  &.back {
    transform: translateZ(calc(${props => props.theme.height} / -2))
      rotateX(180deg);
  }
  &.top {
    transform: rotateX(-270deg)
      translateY(calc(${props => props.theme.height} / -2));
    transform-origin: top center;
  }
`;
const Square = styled.div`
  ${shadowHoverBox}
  background:#CCD1D9;
  width: ${props => props.length};
  height: ${props => props.length};
  cursor: pointer;
  transition: 0.25s -0.1s;
`;
Square.defaultProps = {
  theme: {
    tileHeight: '100px'
  }
};
const SquareLong = styled(Square)`
  width: calc(${props => props.length} * 2 + 20px);
  height: ${props => props.length};
`;
const SquareSmall = styled(Square)`
  width: calc(${props => props.length} / 2 - 10px);
  height: calc(${props => props.length} / 2 - 10px);
`;

const renderHybridRotator = rotator => {
  return (
    <ThemeProvider theme={rotator.theme}>
      <RotateWrapper>
        <Rotate>
          {rotator.data.map(
            ({
              side,
              textColor,
              isTextFirst,
              text,
              href,
              backgroundImage,
              backgroundColor
            }) => {
              const sideImg = (
                <img
                  src={backgroundImage}
                  alt={`${text.bold} ${text.normal}`}
                />
              );
              const sideText = (
                <div className='text'>
                  <div className='b'>{text.bold}</div>
                  <div>{text.normal}</div>
                </div>
              );
              return (
                <Side
                  href={href}
                  target='_blank'
                  className={`${side.toLowerCase()} image-banner`}
                  fontColor={textColor}
                  background={backgroundColor}
                >
                  {isTextFirst ? (
                    <>
                      {sideText}
                      {sideImg}
                    </>
                  ) : (
                    <>
                      {sideImg}
                      {sideText}
                    </>
                  )}
                </Side>
              );
            }
          )}
        </Rotate>
      </RotateWrapper>
    </ThemeProvider>
  );
};

const renderImageOnlyRotator = rotator => {
  return (
    <ThemeProvider theme={rotator.theme}>
      <RotateWrapper>
        <Rotate>
          {rotator.data.map(
            ({ side, href, backgroundImage, backgroundColor }) => {
              return (
                <Side
                  href={href}
                  target='_blank'
                  className={`${side.toLowerCase()} backgroundimage`}
                  background={backgroundColor}
                  style={{
                    backgroundImage: `url(${backgroundImage})`
                  }}
                />
              );
            }
          )}
        </Rotate>
      </RotateWrapper>
    </ThemeProvider>
  );
};

const renderIconRotator = rotator => {
  return (
    <ThemeProvider theme={rotator.theme}>
      <RotateWrapper>
        <Rotate>
          {rotator.data.map(
            ({ side, href, icon, fontSize, textColor, backgroundColor }) => {
              return (
                <Side
                  href={href}
                  target='_blank'
                  className={`${side.toLowerCase()} icon`}
                  fontSize={fontSize}
                  background={backgroundColor}
                  fontColor={textColor}
                >
                  <i className={icon}></i>
                </Side>
              );
            }
          )}
        </Rotate>
      </RotateWrapper>
    </ThemeProvider>
  );
};

const renderLayout = layout => {
  switch (layout.variant) {
    case type.variant.layout.ROW:
      return <Row className='row'>{configLoader(layout.children)}</Row>;
    case type.variant.layout.COLUMN:
      return (
        <Column className='column'>{configLoader(layout.children)}</Column>
      );
    default:
      console.log('Invalid layout', layout);
  }
};

const renderRotator = rotator => {
  switch (rotator.variant) {
    case type.variant.rotate.HYBRID:
      return renderHybridRotator(rotator);
    case type.variant.rotate.IMAGE_ONLY:
      return renderImageOnlyRotator(rotator);
    case type.variant.rotate.ICON:
      return renderIconRotator(rotator);
    default:
      console.log('Invalid rotator:', rotator);
  }
};

const renderSquare = square => {
  switch (square.variant) {
    case type.variant.square.SMALL:
      return <SquareSmall length={square.length} />;
    case type.variant.square.MEDIUM:
      return <Square length={square.length} />;
    case type.variant.square.LONG:
      return <SquareLong length={square.length} />;
    default:
      console.log('Invalid square:', square);
  }
};

const configLoader = config => {
  return (
    <>
      {config.map(item => {
        switch (item.container) {
          case type.container.LAYOUT:
            return renderLayout(item);
          case type.container.ROTATE:
            return renderRotator(item);
          case type.container.SQUARE:
            return renderSquare(item);
          default:
            console.log('Invalid config:', item);
        }
      })}
    </>
  );
};

const RotatingElements = ({ config }) => {
  return <Container>{configLoader(config)}</Container>;
};

export default RotatingElements;
