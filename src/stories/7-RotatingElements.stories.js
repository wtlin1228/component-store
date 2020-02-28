import React from 'react';
import RotatingElements from '../components/RotatingElements';

const type = {
  container: {
    LAYOUT: 'LAYOUT',
    ROTATE: 'ROTATE',
    SQUARE: 'SQUARE'
  },
  variant: {
    layout: {
      ROW: 'ROW',
      COLUMN: 'COLUMN'
    },
    rotate: {
      HYBRID: 'HYBRID',
      IMAGE_ONLY: 'IMAGE_ONLY',
      ICON: 'ICON',
      side: {
        FRONT: 'FRONT',
        BOTTOM: 'BOTTOM',
        BACK: 'BACK',
        TOP: 'TOP'
      }
    },
    square: {
      SMALL: 'SMALL',
      MEDIUM: 'MEDIUM',
      LONG: 'LONG'
    }
  }
};

// style 1
const rotateHybridConfig_1 = {
  theme: {
    width: '220px',
    height: '100px',
    duration: '14s',
    offset: '-6s'
  },
  data: [
    {
      side: type.variant.rotate.side.FRONT,
      textColor: '#000',
      isTextFirst: false,
      text: {
        bold: 'Breakfast In Bed',
        normal: 'Dntel'
      },
      href:
        'https://open.spotify.com/track/6oDjm30FUtB8GcckQEh3Tr?si=1s6UXE3qQr23q1Cs80ZR3A',
      backgroundImage:
        'https://i.scdn.co/image/b36667408f857642df1af7b2279eec5aadf51d0c',
      backgroundColor: '#ed5565'
    },
    {
      side: type.variant.rotate.side.BOTTOM,
      textColor: '#fff',
      isTextFirst: true,
      text: {
        bold: 'Harrison Ford',
        normal: 'Darlingside'
      },
      href:
        'https://open.spotify.com/track/0OvhFCkLYdLSypCNHITORc?si=8J_B3MIgTQKUYhJCUOUFuQ',
      backgroundImage:
        'https://i.scdn.co/image/912394b1b5a4ddee064db7dc6b53b9eac42a1314',
      backgroundColor: '#ffce54'
    },
    {
      side: type.variant.rotate.side.BACK,
      textColor: '#fff',
      isTextFirst: false,
      text: {
        bold: 'Monster',
        normal: 'Magic Bronson'
      },
      href:
        'https://open.spotify.com/track/7FSqGltIongF1SGwvVXlzm?si=tdf5H1r8RJKhYcc5YI6-Mw',
      backgroundImage:
        'https://i.scdn.co/image/c8136476534c35d60569b0be9f01b4587640073b',
      backgroundColor: '#2ecc71'
    },
    {
      side: type.variant.rotate.side.TOP,
      textColor: '#fff',
      isTextFirst: true,
      text: {
        bold: 'HEY YOU!',
        normal: 'Edu'
      },
      href:
        'https://open.spotify.com/track/4ebsjAw316emhy51exMQdK?si=GFus0NQKR2atvHBpOFnz9Q',
      backgroundImage:
        'https://i.scdn.co/image/e77befa063c9f18a5710b56db88e9973b131a3da',
      backgroundColor: '#5d9cec'
    }
  ]
};

const rotateImageOnlyConfig_1 = {
  theme: {
    width: '220px',
    height: '220px',
    duration: '16s',
    offset: '-4s'
  },
  data: [
    {
      side: type.variant.rotate.side.FRONT,
      href: 'https://codepen.io/z-/pen/XPQyMo',
      backgroundImage: 'https://i.imgur.com/tyb17ct.png',
      backgroundColor: '#323133'
    },
    {
      side: type.variant.rotate.side.BOTTOM,
      href: 'https://codepen.io/z-/pen/ZMbLNM',
      backgroundImage: 'https://i.imgur.com/i9LrIoq.png',
      backgroundColor: '#4A89DC'
    },
    {
      side: type.variant.rotate.side.BACK,
      href: 'https://codepen.io/z-/pen/OBPJKK',
      backgroundImage: 'https://i.imgur.com/Zj5MXDQ.png',
      backgroundColor: '#CCD1D9'
    },
    {
      side: type.variant.rotate.side.TOP,
      href: 'https://codepen.io/z-/pen/MJKNJZ',
      backgroundImage: 'https://i.imgur.com/KRdYPi8.png',
      backgroundColor: '#8067B7'
    }
  ]
};

const rotateIconConfig_1 = {
  theme: {
    width: '100px',
    height: '100px',
    duration: '20s',
    offset: '-14s'
  },
  data: [
    {
      side: type.variant.rotate.side.FRONT,
      href: 'https://codepen.io/z-',
      icon: 'icon-codepen-brands',
      fontSize: '3rem',
      textColor: '#fff',
      backgroundColor: '#323133'
    },
    {
      side: type.variant.rotate.side.BOTTOM,
      href: '#thirdbottom',
      icon: 'icon-discord-brands',
      fontSize: '3rem',
      textColor: '#fff',
      backgroundColor: '#7289da'
    },
    {
      side: type.variant.rotate.side.BACK,
      href: '#thirdback',
      icon: 'icon-youtube-brands',
      fontSize: '3rem',
      textColor: '#fff',
      backgroundColor: '#ff0000'
    },
    {
      side: type.variant.rotate.side.TOP,
      href: 'https://twitter.com/Osorpenke',
      icon: 'icon-twitter-brands',
      fontSize: '3rem',
      textColor: '#fff',
      backgroundColor: '#1da1f2'
    }
  ]
};

const data = [
  {
    // Row
    container: type.container.LAYOUT,
    variant: type.variant.layout.ROW,
    children: [
      {
        // Rotator - Hybrid
        container: type.container.ROTATE,
        variant: type.variant.rotate.HYBRID,
        theme: rotateHybridConfig_1.theme,
        data: rotateHybridConfig_1.data
      },
      {
        // Square - Medium
        container: type.container.SQUARE,
        variant: type.variant.square.MEDIUM,
        length: '100px'
      },
      {
        // Square - Medium
        container: type.container.SQUARE,
        variant: type.variant.square.MEDIUM,
        length: '100px'
      }
    ]
  },
  {
    // Row
    container: type.container.LAYOUT,
    variant: type.variant.layout.ROW,
    children: [
      {
        // Column
        container: type.container.LAYOUT,
        variant: type.variant.layout.COLUMN,
        children: [
          {
            // Square - Medium
            container: type.container.SQUARE,
            variant: type.variant.square.MEDIUM,
            length: '100px'
          },
          {
            // Square - Medium
            container: type.container.SQUARE,
            variant: type.variant.square.MEDIUM,
            length: '100px'
          }
        ]
      },
      {
        // Rotator - IMAGE
        container: type.container.ROTATE,
        variant: type.variant.rotate.IMAGE_ONLY,
        theme: rotateImageOnlyConfig_1.theme,
        data: rotateImageOnlyConfig_1.data
      },
      {
        // Column
        container: type.container.LAYOUT,
        variant: type.variant.layout.COLUMN,
        children: [
          {
            // Square - Medium
            container: type.container.SQUARE,
            variant: type.variant.square.MEDIUM,
            length: '100px'
          },
          {
            // Row
            container: type.container.LAYOUT,
            variant: type.variant.layout.ROW,
            children: [
              {
                // Square - SMALL
                container: type.container.SQUARE,
                variant: type.variant.square.SMALL,
                length: '100px'
              },
              {
                // Square - SMALL
                container: type.container.SQUARE,
                variant: type.variant.square.SMALL,
                length: '100px'
              }
            ]
          },
          {
            // Row
            container: type.container.LAYOUT,
            variant: type.variant.layout.ROW,
            children: [
              {
                // Square - SMALL
                container: type.container.SQUARE,
                variant: type.variant.square.SMALL,
                length: '100px'
              },
              {
                // Square - SMALL
                container: type.container.SQUARE,
                variant: type.variant.square.SMALL,
                length: '100px'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    // Row
    container: type.container.LAYOUT,
    variant: type.variant.layout.ROW,
    children: [
      {
        // Square - Long
        container: type.container.SQUARE,
        variant: type.variant.square.LONG,
        length: '100px'
      },
      {
        // Square - Medium
        container: type.container.SQUARE,
        variant: type.variant.square.MEDIUM,
        length: '100px'
      },
      {
        // Rotator - Icon
        container: type.container.ROTATE,
        variant: type.variant.rotate.ICON,
        theme: rotateIconConfig_1.theme,
        data: rotateIconConfig_1.data
      }
    ]
  }
];

// style 2
const rotateHybridConfig_2 = {
  theme: {
    width: '340px',
    height: '100px',
    duration: '14s',
    offset: '-6s'
  },
  data: [
    {
      side: type.variant.rotate.side.FRONT,
      textColor: '#000',
      isTextFirst: false,
      text: {
        bold: 'Breakfast In Bed',
        normal: 'Dntel'
      },
      href:
        'https://open.spotify.com/track/6oDjm30FUtB8GcckQEh3Tr?si=1s6UXE3qQr23q1Cs80ZR3A',
      backgroundImage:
        'https://i.scdn.co/image/b36667408f857642df1af7b2279eec5aadf51d0c',
      backgroundColor: '#ed5565'
    },
    {
      side: type.variant.rotate.side.BOTTOM,
      textColor: '#fff',
      isTextFirst: true,
      text: {
        bold: 'Harrison Ford',
        normal: 'Darlingside'
      },
      href:
        'https://open.spotify.com/track/0OvhFCkLYdLSypCNHITORc?si=8J_B3MIgTQKUYhJCUOUFuQ',
      backgroundImage:
        'https://i.scdn.co/image/912394b1b5a4ddee064db7dc6b53b9eac42a1314',
      backgroundColor: '#ffce54'
    },
    {
      side: type.variant.rotate.side.BACK,
      textColor: '#fff',
      isTextFirst: false,
      text: {
        bold: 'Monster',
        normal: 'Magic Bronson'
      },
      href:
        'https://open.spotify.com/track/7FSqGltIongF1SGwvVXlzm?si=tdf5H1r8RJKhYcc5YI6-Mw',
      backgroundImage:
        'https://i.scdn.co/image/c8136476534c35d60569b0be9f01b4587640073b',
      backgroundColor: '#2ecc71'
    },
    {
      side: type.variant.rotate.side.TOP,
      textColor: '#fff',
      isTextFirst: true,
      text: {
        bold: 'HEY YOU!',
        normal: 'Edu'
      },
      href:
        'https://open.spotify.com/track/4ebsjAw316emhy51exMQdK?si=GFus0NQKR2atvHBpOFnz9Q',
      backgroundImage:
        'https://i.scdn.co/image/e77befa063c9f18a5710b56db88e9973b131a3da',
      backgroundColor: '#5d9cec'
    }
  ]
};

const rotateImageOnlyConfig_2 = {
  theme: {
    width: '220px',
    height: '220px',
    duration: '16s',
    offset: '-4s'
  },
  data: [
    {
      side: type.variant.rotate.side.FRONT,
      href: 'https://codepen.io/z-/pen/XPQyMo',
      backgroundImage: 'https://i.imgur.com/tyb17ct.png',
      backgroundColor: '#323133'
    },
    {
      side: type.variant.rotate.side.BOTTOM,
      href: 'https://codepen.io/z-/pen/ZMbLNM',
      backgroundImage: 'https://i.imgur.com/i9LrIoq.png',
      backgroundColor: '#4A89DC'
    },
    {
      side: type.variant.rotate.side.BACK,
      href: 'https://codepen.io/z-/pen/OBPJKK',
      backgroundImage: 'https://i.imgur.com/Zj5MXDQ.png',
      backgroundColor: '#CCD1D9'
    },
    {
      side: type.variant.rotate.side.TOP,
      href: 'https://codepen.io/z-/pen/MJKNJZ',
      backgroundImage: 'https://i.imgur.com/KRdYPi8.png',
      backgroundColor: '#8067B7'
    }
  ]
};

const rotateIconConfig_2 = {
  theme: {
    width: '220px',
    height: '100px',
    duration: '20s',
    offset: '-14s'
  },
  data: [
    {
      side: type.variant.rotate.side.FRONT,
      href: 'https://codepen.io/z-',
      icon: 'icon-codepen-brands',
      fontSize: '3rem',
      textColor: '#fff',
      backgroundColor: '#323133'
    },
    {
      side: type.variant.rotate.side.BOTTOM,
      href: '#thirdbottom',
      icon: 'icon-discord-brands',
      fontSize: '3rem',
      textColor: '#fff',
      backgroundColor: '#7289da'
    },
    {
      side: type.variant.rotate.side.BACK,
      href: '#thirdback',
      icon: 'icon-youtube-brands',
      fontSize: '3rem',
      textColor: '#fff',
      backgroundColor: '#ff0000'
    },
    {
      side: type.variant.rotate.side.TOP,
      href: 'https://twitter.com/Osorpenke',
      icon: 'icon-twitter-brands',
      fontSize: '3rem',
      textColor: '#fff',
      backgroundColor: '#1da1f2'
    }
  ]
};

const data2 = [
  {
    // Row
    container: type.container.LAYOUT,
    variant: type.variant.layout.ROW,
    children: [
      {
        // Square - Medium
        container: type.container.SQUARE,
        variant: type.variant.square.MEDIUM,
        length: '100px'
      },
      {
        // Rotator - Hybrid
        container: type.container.ROTATE,
        variant: type.variant.rotate.HYBRID,
        theme: rotateHybridConfig_2.theme,
        data: rotateHybridConfig_2.data
      }
    ]
  },
  {
    // Row
    container: type.container.LAYOUT,
    variant: type.variant.layout.ROW,
    children: [
      {
        // Column
        container: type.container.LAYOUT,
        variant: type.variant.layout.COLUMN,
        children: [
          {
            // Square - Medium
            container: type.container.SQUARE,
            variant: type.variant.square.MEDIUM,
            length: '100px'
          },
          {
            // Square - Medium
            container: type.container.SQUARE,
            variant: type.variant.square.MEDIUM,
            length: '100px'
          }
        ]
      },
      {
        // Rotator - IMAGE
        container: type.container.ROTATE,
        variant: type.variant.rotate.IMAGE_ONLY,
        theme: rotateImageOnlyConfig_2.theme,
        data: rotateImageOnlyConfig_2.data
      },
      {
        // Column
        container: type.container.LAYOUT,
        variant: type.variant.layout.COLUMN,
        children: [
          {
            // Square - Medium
            container: type.container.SQUARE,
            variant: type.variant.square.MEDIUM,
            length: '100px'
          },
          {
            // Row
            container: type.container.LAYOUT,
            variant: type.variant.layout.ROW,
            children: [
              {
                // Square - SMALL
                container: type.container.SQUARE,
                variant: type.variant.square.SMALL,
                length: '100px'
              },
              {
                // Square - SMALL
                container: type.container.SQUARE,
                variant: type.variant.square.SMALL,
                length: '100px'
              }
            ]
          },
          {
            // Row
            container: type.container.LAYOUT,
            variant: type.variant.layout.ROW,
            children: [
              {
                // Square - SMALL
                container: type.container.SQUARE,
                variant: type.variant.square.SMALL,
                length: '100px'
              },
              {
                // Square - SMALL
                container: type.container.SQUARE,
                variant: type.variant.square.SMALL,
                length: '100px'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    // Row
    container: type.container.LAYOUT,
    variant: type.variant.layout.ROW,
    children: [
      {
        // Rotator - Icon
        container: type.container.ROTATE,
        variant: type.variant.rotate.ICON,
        theme: rotateIconConfig_2.theme,
        data: rotateIconConfig_2.data
      },
      {
        // Square - Long
        container: type.container.SQUARE,
        variant: type.variant.square.LONG,
        length: '100px'
      }
    ]
  }
];

export default {
  title: 'Rotating Elements',
  component: RotatingElements
};

export const Style1 = () => <RotatingElements config={data} />;

export const Style2 = () => <RotatingElements config={data2} />;
