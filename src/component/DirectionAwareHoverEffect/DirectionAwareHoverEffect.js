// https://codepen.io/pehaa/pen/yLNJowX

import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const myMod = (n, m) => n - Math.floor(n / m) * m;

const moveInGrid = (cols, n) => {
  const rows = Math.ceil(n / cols);

  let styles = `
    .grid {
      grid-template-columns: repeat(${cols}, 1fr);
      grid-template-rows: repeat(${rows}, ${100 / rows}%);
      li:last-child:after,
      li:last-child:before {
        left: ${100 * myMod(cols - n, cols)}%;
        transform: translate3d(
          ${-100 * ((cols - 1) / 2)}%, 
          ${-100 * ((rows - 1) / 2)}%, 
          0
        );
      }
  `;

  for (let i = 1; i < n; i++) {
    const x = myMod(cols - i, cols);
    const y = rows - Math.floor((i - 1) / cols) - 1;
    styles += `
      li:nth-child(${i}):hover ~ li:last-child:after,
      li:nth-child(${i}):hover ~ li:last-child:before {
        transform: translate3d(${x * -100}%, ${y * -100}%, 0);
      }
    `;
  }

  styles += `
      li:last-child:hover:after,
      li:last-child:hover:before {
        transform: translate3d(${-100 * myMod(cols - n, cols)}%, 0%, 0);
      }
    }
  `;

  return css`
    ${styles}
  `;
};

const hoverColors = (n, colors) => {
  let styles = '';

  for (let i = 1; i < n; i++) {
    if (colors[i]) {
      styles += `
        li:nth-child(${i}):hover ~ li:last-child:after {
          background: ${colors[i - 1]};
        }
      `;
    }
  }

  styles += `
    li:last-child:hover:after {
      background: ${colors[colors.length - 1]};
    }
  `;

  return css`
    ${styles}
  `;
};

const Wrapper = styled.div`
  width: 100vw;

  img,
  a {
    display: block;
    height: 100%;
  }
  img {
    max-width: 100%;
    width: 100%;
    object-fit: cover;
  }

  ${props => moveInGrid(props.cols, props.n)}

  .grid {
    ${props => hoverColors(props.n, props.colors)}

    display: grid;
    grid-gap: 0;
    overflow: hidden;
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100vh;
    li {
      position: relative;
    }
    li:hover ~ li:last-child:after,
    li:last-child:hover:after,
    li:hover ~ li:last-child:before,
    li:last-child:hover:before {
      opacity: 1;
      transition: 1s ease;
    }
    li:last-child:after,
    li:last-child:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      pointer-events: none;
      /* make the hover box smaller */
      clip-path: polygon(
        ${props => props.hoverBoxOffset} ${props => props.hoverBoxOffset},
        ${props => props.hoverBoxOffset}
          calc(100% - ${props => props.hoverBoxOffset}),
        calc(100% - ${props => props.hoverBoxOffset})
          calc(100% - ${props => props.hoverBoxOffset}),
        calc(100% - ${props => props.hoverBoxOffset})
          ${props => props.hoverBoxOffset}
      );
      -webkit-clip-path: polygon(
        ${props => props.hoverBoxOffset} ${props => props.hoverBoxOffset},
        ${props => props.hoverBoxOffset}
          calc(100% - ${props => props.hoverBoxOffset}),
        calc(100% - ${props => props.hoverBoxOffset})
          calc(100% - ${props => props.hoverBoxOffset}),
        calc(100% - ${props => props.hoverBoxOffset})
          ${props => props.hoverBoxOffset}
      );
      opacity: 0;
      transition: opacity 1s, transform 1s 1s, background 1s;
    }

    li:last-child:after {
      mix-blend-mode: multiply;
      background: #aaafc3;
    }
    li:last-child:before {
      backdrop-filter: grayscale(100%) blur(2px);
      -webkit-backdrop-filter: grayscale(100%) blur(2px);
    }
  }

  .description {
    font-family: 'Unica One', sans-serif;
    font-size: 1.25rem;
    position: absolute;
    display: block;
    right: 2rem;
    left: 2rem;
    text-align: center;
    top: 50%;
    width: 60px;
    margin: auto;
    color: white;
    z-index: 100;
    opacity: 0;
    transform: translate3d(0, -50%, 0);
    transition: 0.3s 0s;
  }

  li:hover .description {
    opacity: 1;
    transition: 0.6s 0.3s;
  }
`;

const Hover = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function updateWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const data = [
    {
      description: 'Dearest Diary',
      src:
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/wvfrkayr0mg-christelle-bourgeois-776x1063.jpg'
    },
    {
      description: 'Window Sill?',
      src:
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/fbanijhrol4-annie-spratt-776x951.jpg'
    },
    {
      description: 'Listen To Me',
      src:
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/2rm8p0rkxiw-marius-masalar-776x582.jpg'
    },
    {
      description: 'Travel Often',
      src:
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/71nlan-2ya-andrew-neel-2-776x620.jpg'
    },
    {
      description: 'Another Plant?',
      src:
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/hdyo6rr3kqk-scott-webb-1172x780.jpg'
    },
    {
      description: 'On the Wave',
      src:
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/fvazbu6zae-andrew-neel-776x517.jpg'
    },
    {
      description: 'Great Gatsby',
      src:
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/typewriter-1-776x968.jpg'
    },
    {
      description: 'In the Sun',
      src:
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/xohlruw4k8-christelle-bourgeois-776x758.jpg'
    }
  ];

  return (
    <Wrapper
      hoverBoxOffset={windowWidth < 968 ? '0' : '1rem'}
      n={8}
      cols={windowWidth < 968 ? 2 : 3}
      colors={[
        '#1A237E',
        '#b5a1b7',
        '#aaafc3',
        '#daa384',
        '#a5d6a7',
        '#6c4331',
        '#555',
        '#a88504'
      ]}
    >
      <ul className='grid'>
        {data.map(({ src, description }) => {
          return (
            <li>
              <a href='#'>
                <img src={src} alt='' />
                <span className='description'>{description}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default Hover;
