// https://codepen.io/z-/pen/ZEzMOYE

import React from 'react';
import styled, { css } from 'styled-components';

const moveBlob = () => {
  let styles = '';
  for (let i = 1; i <= 4; i++) {
    const position = i * 5 - 2;
    const circleLength = i * 3.5 + 7;
    const top = circleLength / -2.25;
    const clipPath = (i * 3 + 6) / 2;

    styles += `
      &:nth-child(${i}):hover ~.blob  {
        left: ${position}rem;
        --position: ${position}rem;
      }
      &[data-depth="${i}"]:hover ~.blob {
        left: calc(var(--position) - ${circleLength / 3}rem) !important; 
        top: ${top}rem;
        width: ${circleLength}rem;
        height: ${circleLength}rem;
        clip-path: circle(${clipPath}rem);
      }
    `;
  }

  return css`
    ${styles}
  `;
};

const Wrapper = styled.div`
  a {
    color: inherit;
  }
`;

const BaseHeader = styled.ul`
  display: flex;
  align-self: center;
  position: relative;
  height: 2rem;
  width: calc(100vw - 100px);
  padding: 0 50px;

  ul {
    padding: 0;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  > li {
    position: relative;
    text-align: center;
    width: 5rem;

    &:first-child {
      font-weight: bold;
    }
    &.more {
      position: relative;

      > a {
        &:after {
          position: absolute;
          top: 0.2rem;
          margin-left: 0.2rem;
          content: '▼';
          font-size: 0.75rem;
        }
      }
      .hide {
        user-select: none;
        opacity: 0;
      }
    }
    &:not(:hover).more {
      .hide {
        display: none;
      }
    }
    > a {
      display: inline-block;
      width: 5rem;
      height: 2rem;
    }
    ul {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      padding-top: 0.25rem;

      li {
        padding: 0.25rem 0;
      }
    }
    ${moveBlob}
    &:not(:first-child):not(.more):hover ~.blob {
      width: 5rem;
      height: 5rem;
    }
  }
`;

const Header = styled(BaseHeader)`
  background: ${props => props.headerBackground};
  color: ${props => props.headerText};
  border-bottom: 1px solid ${props => props.headerBorder};
`;

const BlobHeader = styled(BaseHeader)`
  background: transparent;
  border-bottom-color: transparent;
  color: #fff;
`;

const Blob = styled.div`
  position: absolute;
  overflow: hidden;
  top: -2rem;
  left: 3rem;
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  clip-path: circle(2.5rem);
  transition: 0.25s;
  pointer-events: none;
  background: red;

  /* 
    Blob inner is fixed. 
    Modify it if your header layout doesn't take full view port width 
  */
  div#inner {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding-top: 1rem;
    padding-left: 3rem;
    height: 250px;
    background: ${props => props.circleColour};
    color: ${props => props.circleText};
  }
`;

const FlyCircleHeader = () => {
  return (
    <Wrapper background='#fcfbfe'>
      <Header
        headerBackground='#ffffff'
        headerText='#000'
        headerBorder='#e9e9e9'
      >
        <li>
          <a href='#'>Unasees</a>
        </li>
        <li>
          <a href='#'>Juca</a>
        </li>
        <li className='more' data-depth='2'>
          <a href='#'>Bugunash</a>
          <ul className='hide'>
            <li>
              <a href='#'>Cecauw</a>
            </li>
            <li>
              <a href='#'>Aldob</a>
            </li>
          </ul>
        </li>
        <li className='more' data-depth='3'>
          <a href='#'>Amiz</a>
          <ul className='hide'>
            <li>
              <a href='#'>Ebklemp</a>
            </li>
            <li>
              <a href='#'>Pucleg</a>
            </li>
            <li>
              <a href='#'>Itend</a>
            </li>
          </ul>
        </li>
        <Blob className='blob' circleColour='#4A89DC' circleText='#fff'>
          <div className='inner' id='inner'>
            <BlobHeader className='header'>
              <li>
                <a href='#'>Unasees</a>
              </li>
              <li>
                <a href='#'>Juca</a>
              </li>
              <li>
                <a href='#'>Bugunash</a>
                <ul>
                  <li>
                    <a href='#'>Cecauw</a>
                  </li>
                  <li>
                    <a href='#'>Aldob</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='#'>Amiz</a>
                <ul>
                  <li>
                    <a href='#'>Ebklemp</a>
                  </li>
                  <li>
                    <a href='#'>Pucleg</a>
                  </li>
                  <li>
                    <a href='#'>Itend</a>
                  </li>
                </ul>
              </li>
            </BlobHeader>
          </div>
        </Blob>
      </Header>
    </Wrapper>
  );
};

export default FlyCircleHeader;
