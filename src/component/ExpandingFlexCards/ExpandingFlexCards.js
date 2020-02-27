// https://codepen.io/z-/pen/OBPJKK

import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import './icomoon/style.css';

const optionsRWD = () => {
  let styles = '';

  for (let i = 1; i <= 4; i++) {
    const mediaQueryMaxWidth = 798 - i * 80;
    const minWidth = 600 - i * 80;
    const idxChildToHide = 6 - i;

    styles += `
      @media screen and (max-width: ${mediaQueryMaxWidth}px) {
        min-width: ${minWidth}px;
        .option:nth-child(${idxChildToHide}) {
          display:none;
        }
      }
    `;
  }

  return css`
    ${styles}
  `;
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 100vh;

  font-family: 'Roboto', sans-serif;
`;

const Credit = styled.a`
  position: absolute;
  bottom: 20px;
  left: 20px;

  color: #000;
  font-family: 'Roboto', sans-serif;
`;

const Options = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  overflow: hidden;

  min-width: 600px;
  max-width: 900px;
  width: calc(100% - 100px);

  height: 400px;

  ${optionsRWD}
`;

const Option = styled.div`
  position: relative;
  overflow: hidden;

  min-width: 60px;
  margin: 10px;

  background: url(${props => props.backgroundImage});
  background-size: auto 120%;
  background-position: center;

  cursor: pointer;

  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);

  &.active {
    flex-grow: 10000;
    transform: scale(1);

    max-width: 600px;
    margin: 0px;
    border-radius: 40px;

    background-size: auto 100%;
    .shadow {
      box-shadow: inset 0 -120px 120px -120px #000,
        inset 0 -120px 120px -100px black;
    }
    .label {
      bottom: 20px;
      left: 20px;
      .info > div {
        left: 0;
        opacity: 1;
      }
    }
  }

  &:not(.active) {
    flex-grow: 1;

    border-radius: 30px;
    .shadow {
      bottom: -40px;
      box-shadow: inset 0 -120px 0px -120px black,
        inset 0 -120px 0px -100px black;
    }
    .label {
      bottom: 10px;
      left: 10px;
      .info > div {
        left: 20px;
        opacity: 0;
      }
    }
  }
  .shadow {
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;

    height: 120px;

    transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
  }
  .label {
    display: flex;
    position: absolute;
    right: 0;

    height: 40px;
    transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
    .icon {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      min-width: 40px;
      max-width: 40px;
      height: 40px;
      border-radius: 100%;

      background-color: #fff;
      color: ${props => props.iconColor};
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;

      margin-left: 10px;

      color: #fff;

      white-space: pre;
      > div {
        position: relative;

        transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95),
          opacity 0.5s ease-out;
      }
      .main {
        font-weight: bold;
        font-size: 1.2rem;
      }
      .sub {
        transition-delay: 0.1s;
      }
    }
  }
`;

const ExpandingFlexCards = () => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);

  const data = [
    {
      backgroundImage:
        'https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg',
      main: 'Blonkisoaz',
      sub: 'Omuke trughte a otufta',
      icon: 'icon-walking-solid',
      iconColor: '#ED5565'
    },
    {
      backgroundImage:
        'https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg',
      main: 'Oretemauw',
      sub: 'Omuke trughte a otufta',
      icon: 'icon-snowflake-solid',
      iconColor: '#FC6E51'
    },
    {
      backgroundImage:
        'https://66.media.tumblr.com/5af3f8303456e376ceda1517553ba786/tumblr_o4986gakjh1qho82wo1_1280.jpg',
      main: 'Iteresuselle',
      sub: 'Omuke trughte a otufta',
      icon: 'icon-tree-solid',
      iconColor: '#FFCE54'
    },
    {
      backgroundImage:
        'https://66.media.tumblr.com/5516a22e0cdacaa85311ec3f8fd1e9ef/tumblr_o45jwvdsL11qho82wo1_1280.jpg',
      main: 'Idiefe',
      sub: 'Omuke trughte a otufta',
      icon: 'icon-tint-solid',
      iconColor: '#2ECC71'
    },
    {
      backgroundImage:
        'https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg',
      main: 'Inatethi',
      sub: 'Omuke trughte a otufta',
      icon: 'icon-sun-solid',
      iconColor: '#5D9CEC'
    }
  ];
  return (
    <>
      <Container>
        <Options className='options'>
          {data.map(
            ({ backgroundImage, main, sub, icon, iconColor }, index) => {
              return (
                <Option
                  className={`option ${
                    index === selectedOptionIndex ? 'active' : ''
                  }`}
                  backgroundImage={backgroundImage}
                  iconColor={iconColor}
                  onClick={() => setSelectedOptionIndex(index)}
                >
                  <div className='shadow'></div>
                  <div className='label'>
                    <div className='icon'>
                      <i className={icon}></i>
                    </div>
                    <div className='info'>
                      <div className='main'>{main}</div>
                      <div className='sub'>{sub}</div>
                    </div>
                  </div>
                </Option>
              );
            }
          )}
        </Options>
      </Container>
      <Credit
        href='http://victorofvalencia-blog.tumblr.com'
        target='_blank'
        className='credit'
      >
        Photos from Victor of Valencia on tumblr
      </Credit>
    </>
  );
};

export default ExpandingFlexCards;
