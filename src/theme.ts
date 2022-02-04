import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: 'Oswald, Impact, sans-serif',
    body: 'Open Sans, Arial, sans-serif',
	mono: 'Menlo, monospace',
  },
  colors: {
	brand: {
		200: '#345',
		300: '#345',
		400: '#345',
		500: '#345',
		600: '#345',
		700: '#345',
		800: '#345',
	}
  }
})

export default theme
