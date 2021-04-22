import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Button, Steps } from 'antd'
import * as antd from 'antd'
import TestTheme1 from './child/TestTheme1'

const { Step } = Steps;

// @14 修改框架样式主题，不改变原有页面. 这里webpack 会先走alias 再走node_modules
console.log(antd)


function StyleTheme1(params) {
  return <ThemeProvider theme={{ buttonMode: 'dark' }}>
    <Button type="ghost">父按钮</Button>
    <TestTheme1 />
    {/* <Steps current={1}>
      <Step title="Finished" description="This is a description." />
    </Steps> */}
  </ThemeProvider>
}


export default StyleTheme1