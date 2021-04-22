import { css, cx } from 'linaria';
import React from 'react'

const cat = css`
  font-weight: bold;
`;

const yarn = css`
  color: violet;
`;

const fun = css`
  display: flex;
`;

function App({ isPlaying }) {
  return <div className={cx(cat, yarn, isPlaying && fun)} >1231564</div>;
}

export default App