import React from 'react'
import { ThemeContext  } from 'styled-components';
import { useContext } from 'react'
import { Button } from '../Theme/widgets';



function ThemeChildren(props) {
  // 可以使用useContext(ThemeContext)  访问当前主题
  const themeContext = useContext(ThemeContext);
  console.log(themeContext)
  return <>
    <Button >{props.children}</Button>
  </>
}

export default ThemeChildren