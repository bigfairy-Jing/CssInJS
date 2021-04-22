
import styled, { ThemeProvider } from 'styled-components'

import ThemeChildren from '../Components/ThemeChildren'

import { Button } from '../Theme/widgets'

// @9 theme

const theme = {
  main: "mediumseagreen"
};


function Theme() {
  return (
    <>
      <div>
        <Button>Normal</Button>
        <ThemeProvider theme={theme}>
          <Button>Themed</Button>
          <ThemeChildren>123</ThemeChildren>
        </ThemeProvider>
      </div>
    </>
  )
}

export default Theme