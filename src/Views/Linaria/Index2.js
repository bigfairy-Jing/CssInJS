import { styled } from '@linaria/react';
import React, { useState } from 'react'
import { Button } from 'antd'

const Title = styled.h1`
  font-size: ${props => props.size};
`;

function Index2() {
  const [size, setSize] = useState(18)
  return <>
    <Button onClick={() => setSize(prev => ++prev)}>+</Button>
    <Title size={`${size}px`}>123456</Title>
  </>
}

export default Index2