// https://codepen.io/z-/pen/zBLGYN

import React from 'react';
import styled, { keyframes } from 'styled-components';
import strawSVG from './images/grapefruit_straw.svg';
import wave1SVG from './images/grapefruitwave_1.svg';
import wave2SVG from './images/grapefruitwave_2.svg';
import wave3SVG from './images/grapefruitwave_3.svg';

const bg = keyframes`
  0%,
  100% {
    transform: translateY(12px);
  }
  50% {
    transform: translateY(0px);
  }
`;

const straw = keyframes`
  0%,
  100% {
    transform: translateY(-2px) rotate(6deg);
  }
  50% {
    transform: translateY(0px) rotate(6deg);
  }
`;

const Container = styled.div`
  background-color: #f69899;
  min-height: 100vh;
  overflow: hidden;
  position: relative;

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.25s cubic-bezier(0.64, 0.57, 0.67, 1.53);
  }

  .underbackground {
    background-color: #fafafa;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 120px;
    .header {
      display: flex;
      position: absolute;
      top: calc(50% - 10px);
      left: 30px;
      right: 20px;
      transform: translateY(-50%);
      z-index: 1000;
      color: #f69899;
      line-height: 32px;
      a {
        font-size: 18px;
        padding: 0 10px;
        &:hover {
          color: #ad5858;
        }
      }
      .title {
        flex-grow: 1;
        a {
          font-size: 32px;
        }
      }
    }
  }

  .backgrounds {
    .background {
      position: absolute;
      height: 20px;
      left: 0px;
      right: 0px;
      top: 120px;
      animation: ${bg} 2s ease-in-out infinite;
      .head {
        position: absolute;
        bottom: 100%;
        left: 0px;
        right: 0px;
        height: 20px;
      }
      &.layer-3 {
        background-color: #faf0f0;
        top: 110px;
        .head {
          background: url(${props => props.wave3SVG});
          background-position: -60px 0px;
        }
      }
      &.layer-2 {
        background-color: #fbd7d7;
        top: 114px;
        animation-delay: -0.5s;
        .head {
          background: url(${props => props.wave2SVG});
          background-position: -40px 0px;
        }
      }
      &.layer-1 {
        height: 30px;
        background-color: #f69899;
        animation-delay: -1s;
        .head {
          background: url(${props => props.wave1SVG});
        }
      }
    }
    .strawimage {
      z-index: 10000;
      position: absolute;
      background-image: url(${props => props.strawSVG});
      background-size: 30px 1316px;
      width: 30px;
      height: 1097px;
      top: 70px;
      transform: rotate(6deg);
      right: 120px;
      animation: ${straw} 2s ease-in-out infinite;
    }
  }
  section.content {
    position: absolute;
    top: 150px;
    left: 20px;
    right: 220px;
    color: #fff;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      margin: 0;
      font-weight: 400;
    }
    h1 {
      font-size: 32px;
    }
  }
`;

const Banner = () => {
  return (
    <Container
      strawSVG={strawSVG}
      wave1SVG={wave1SVG}
      wave2SVG={wave2SVG}
      wave3SVG={wave3SVG}
    >
      <div className='underbackground'>
        <div className='header'>
          <div className='title'>
            <a href=''>Unasees</a>
          </div>
        </div>
      </div>
      <div className='backgrounds'>
        <div className='strawimage' />
        <div className='background layer-3'>
          <div className='head'></div>
        </div>
        <div className='background layer-2'>
          <div className='head'></div>
        </div>
        <div className='background layer-1'>
          <div className='head'></div>
        </div>
      </div>
      <section className='content'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor
        sit amet quam at finibus. Vestibulum at nulla rhoncus, tincidunt enim
        nec, maximus orci. In non magna sit amet ante accumsan porttitor id
        vitae felis. Cras id sem ante. Curabitur non eros sit amet risus egestas
        laoreet. Donec lectus nisl, imperdiet eu nunc quis, dapibus porttitor
        massa. Suspendisse nec erat consequat, congue sem nec, eleifend ante. In
        rutrum accumsan fermentum. Nunc consectetur mattis odio, quis malesuada
        felis pellentesque eu. Sed mauris enim, iaculis in gravida id, cursus
        vitae metus. Sed aliquet nisi eu sem interdum, vel maximus ex dictum.
        Praesent dolor tellus, fermentum in est vitae, feugiat dapibus purus. In
        varius fringilla arcu, vel dapibus metus faucibus et. Nulla quis erat
        sit amet justo semper gravida ac a nisi. In ipsum odio, bibendum vitae
        odio ac, aliquam vulputate ligula. Maecenas eleifend ipsum quis mauris
        ultrices, ut iaculis massa mollis. Nunc ut sem neque. Sed ultricies odio
        eu tincidunt tempor. Proin at aliquam velit, eget pulvinar tortor. Etiam
        volutpat justo purus, et rutrum massa interdum at. Suspendisse eget
        aliquam felis, elementum suscipit ante. Nullam ornare tortor nisi, sed
        aliquet purus ullamcorper vel. Donec et justo at nisl lacinia vestibulum
        eu sed nisi. Aliquam semper nec felis non vestibulum. Phasellus velit
        tellus, malesuada in malesuada non, facilisis sit amet lacus. Proin at
        vestibulum tortor. Phasellus faucibus, dolor vel efficitur facilisis,
        lacus risus tristique nunc, quis cursus turpis magna nec sem. Nulla sed
        nunc ante. Aenean sed turpis justo. Aliquam dictum ut nisl eu ultrices.
      </section>
    </Container>
  );
};

export default Banner;
