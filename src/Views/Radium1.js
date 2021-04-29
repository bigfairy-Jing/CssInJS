import Radium from 'radium'
import React from 'react'

// StyleRoot 类似于styled-components中的 ThemeProvider 但是个人觉得功能要稍微弱小,这里暂时不做处理
import { StyleRoot } from 'radium';

// 暂时不建议用Radium框架
const styles = {
  base: {
    color: '#fff',
    // Adding interactive state couldn't be easier! Add a special key to your
    // style object (:hover, :focus, :active, or @media) with the additional rules.
    ':hover': {
      background: '#0074D9'
    }
  },

  primary: {
    background: '#0074D9'
  },

  warning: {
    background: '#FF4136'
  }
};

function Button(props) {
  return (
    <>
      <button style={[styles.base, styles[props.kind]]}>
        {props.children}
      </button>
    </>
  );
}

Button = Radium(Button)



export default () => <div><Button kind="warning">primary button</Button></div>