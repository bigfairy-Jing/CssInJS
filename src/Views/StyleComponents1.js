import React , { useState } from 'react'
import { Link } from 'react-router-dom'

import styled, { css }  from 'styled-components'

// @1hello world
const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: palevioletred;
`;


const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// @2props 传递
const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


// @3extend Styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

// @5 与自定义组件配合
const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()}/>

// @6 Styling any component 可以给你当前传递任何自定义标签 定义样式
const StyleLink = styled(Link)`
  color: palegoldenrod;
  font-weight: bold;
`;

// @7 styled会足够聪明分辨出传递的属性, 可以自动为您过滤非标准属性
// 这种方式意味着我们不需要在组件中使用props 的条件来渲染类名,可以减少组件中的混乱情况
// 并且使得CSS 和 JavaScript之间的关注点分离

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
  font-size: 18px;
`;

const SaveInput = styled(Input)`
  color: white;
  ${props => props.isSecondary && css` color: blue;`}
  ${props => props.isDisabled && css`color: grey;`}
`;

const PPP = styled.p`
  font-size: 23px;
  margin: 10px 50px;
  color: deeppink;
`;



function StyleComponents1() {

  const [count, setCount] = useState(0)

  return (
    <div>
      <Wrapper>
        <Title>
          Hello World!
        </Title>
      </Wrapper>

      <Button>Normal</Button>
      <Button primary>Primary</Button>
      <TomatoButton>Tomato Button</TomatoButton>

      {/* @4  use as 形成一个多态的道具来动态交换接收您编写的样式的元素：*/}
      <Button as="a" href="/radium1">Link To radium1</Button>

      <ReversedButton>这是一个按钮</ReversedButton>

      <StyleLink>this is a styleLink</StyleLink>

      {/* @7 这里样式分辨出defalutValue是DOM属性, 而inputColor为styled 的 */}

      <Input defaultValue="@probablyup" type="text" />
      <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />

      <PPP>{count}</PPP>
      <Button onClick={()=>setCount((pre)=>pre + 1)}>+</Button>
      <Button onClick={()=>setCount((pre)=>pre - 1)}>-</Button>

      <SaveInput isSecondary defaultValue={'哦豁'} ></SaveInput>
      {/* 这里的属性的顺序是根据我们定义时候的顺序,而不是在下面的顺序 */}
      <SaveInput isSecondary isDisabled defaultValue={'哦豁'} ></SaveInput>
      <SaveInput isDisabled isSecondary defaultValue={'哦豁'} ></SaveInput>
    </div>
  )
}

export default StyleComponents1