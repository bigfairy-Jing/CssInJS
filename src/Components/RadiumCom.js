import Radium, { Style } from 'radium';


export default function (params) {
  return <Style rules={{
    body: {
      margin: 0,
      fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'
    },
    html: {
      background: '#ccc',
      fontSize: '100%'
    },
    mediaQueries: {
      '(min-width: 550px)': {
        html:  {
          fontSize: '120%'
        }
      },
      '(min-width: 1200px)': {
        html:  {
          fontSize: '140%'
        }
      }
    },
    'h1, h2, h3': {
      fontWeight: 'bold'
    }
  }} />
}
