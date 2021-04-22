import { styled } from '@linaria/react';

const colors = {
  light: {
    text: 'black',
  },
  dark: {
    text: 'white',
  },
  green:{
    text: 'green'
  }
};


export const theming = cb =>
  Object.keys(colors).reduce((acc, name) => Object.assign(acc, {
    [`.theme-${name} &`]: cb(colors[name]),
  }), {});

// Use the helper in your styles
export const Header = styled.h1`
  text-transform: uppercase;

  ${theming(c => ({
    color: c.text,
  }))};
`;