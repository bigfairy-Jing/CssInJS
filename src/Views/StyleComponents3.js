import styled, { keyframes }  from 'styled-components'
import React from 'react'

// @8 Animations

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;


function StyleComponents3() {
  return (
    <>
      <Rotate>&lt; 💅🏾 &gt;</Rotate>
    </>
  )
}

export default StyleComponents3