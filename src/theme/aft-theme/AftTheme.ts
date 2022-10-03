import { createTheme } from '@material-ui/core'
import Grotesco from '../common/fonts/Grotesco/Grotesco-Web-Font/Grotesco-Medium.ttf'
import GrotescoLight from '../common/fonts/Grotesco/Grotesco-Web-Font/Grotesco-Light.ttf'
import Feixen from '../common/fonts/Studio Feixen Sans Writer/Web/StudioFeixenSansWriter-Regular.ttf'
import PlexSans from '../common/fonts/IBM Plex/OpenType/IBM-Plex-Sans/IBMPlexSans-Regular.otf'

type FontFace = {
  fontDisplay?: any
  fontFamily?: any
  fontStyle?: any
  fontWeight?: number
  src?: string
}

export const grotesco: FontFace = {
  fontFamily: 'Grotesco',
  fontStyle: 'normal',
  fontDisplay: 'swap', // uses the fallback font to display the text until the custom font has fully downloaded. This is also known as a “flash of unstyled text” or FOUT.
  fontWeight: 400,
  src: `
    local('Grotesco'),
    url(${Grotesco}) format('truetype')
  `
}

const grotescoLight: FontFace = {
  fontFamily: 'Grotesco Light',
  fontStyle: 'normal',
  fontDisplay: 'swap', // uses the fallback font to display the text until the custom font has fully downloaded. This is also known as a “flash of unstyled text” or FOUT.
  fontWeight: 400,
  src: `
    local('Grotesco Light'),
    url(${GrotescoLight}) format('truetype')
  `
}

const feixen: FontFace = {
  fontFamily: 'Feixen',
  fontStyle: 'normal',
  fontDisplay: 'swap', // uses the fallback font to display the text until the custom font has fully downloaded. This is also known as a “flash of unstyled text” or FOUT.
  fontWeight: 400,
  src: `
    local('Feixen'),
    url(${Feixen}) format('opentype')
  `
}

const plexSans: FontFace = {
  fontFamily: 'Plex Sans',
  fontStyle: 'normal',
  fontDisplay: 'swap', // uses the fallback font to display the text until the custom font has fully downloaded. This is also known as a “flash of unstyled text” or FOUT.
  fontWeight: 400,
  src: `
    local('Plex Sans'),
    url(${PlexSans}) format('opentype')
  `
}

const fonts = ['Grotesco', 'Grotesco Light', 'Feixen', 'Plex Sans'].join(',')

// New Registration flow colors
export const PINK = '#FFA9E7'
export const MINT = '#70FBE0'

// Marketplace colors
export const MARKETPLACEMINT = '#0FF7CA'
export const LIGHT_MINT = '#E2FEF9'

const AndaTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
// @ts-ignore
  palette: {
    background: {
      default: '#FAFAFA',
      paper: '#FDF8F3'
    },
    primary: {
      main: '#FF4122',
      light: '#FFA091',
      dark: '#FF1C0C'
    },
    secondary: {
      main: '#4C2FCD',
      light: '#A697E6',
      dark: '#2412AE'
    },
    error: {
      main: '#840E0E',
      light: '#D79393',
      dark: '#640E0E'
    },
    success: {
      main: '#27AE60',
      light: '#93D7B0',
      dark: '#0E8433'
    },
    warning: {
      main: '#E2AB1F',
      light: '#F1D58F',
      dark: '#CF800A'
    },
    text: {
      primary: '#383838',
      secondary: '#6B6B6B',
      disabled: '#E7E7E7'
    }
  },
  typography: {
    fontFamily: fonts,
    h1: {
      // Title1
      fontSize: '44px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 1.3,
      letterSpacing: '-0.03em'
    },
    h2: {
      // Title2
      fontSize: '32px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.03em'
    },
    h3: {
      // Title3
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '-0.03em'
    },
    h4: {
      fontWeight: 'bold',
      fontStyle: 'normal',
      fontSize: '17px',
      lineHeight: 1.5
    },
    body1: {
      // Body
      fontSize: '17px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '-0.03em'
    },
    body2: {
      // Large
      fontSize: '19px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.03em'
    },
    button: {
      // Button
      fontSize: '19px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: '-0.03em',
      textTransform: 'none'
    },
    subtitle1: {
      // Small
      fontSize: '12px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 1.45,
      letterSpacing: '-0.03em'
    },
    subtitle2: {
      // Micro
      fontSize: '8px',
      fontStyle: 'normal',
      fontWeight: 850,
      lineHeight: 1.35,
      letterSpacing: '-0.03em'
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [grotesco, grotescoLight, feixen, plexSans]
      },
    },
    MuiButton: {
      root: {
        color: '#FFFFFF',
        height: '35px',
        padding: '8px 16px 8px 16px',
        borderRadius: '20px'
      },
      containedPrimary: {
        color: '#FCE3CC',
        backgroundColor: '#FF4122',
        '&:hover': {
          backgroundColor: '#BD1A00',
          color: '#FCE3CC'
        },
        '&$disabled': {
          backgroundColor: '#FFA091',
          color: '#FCE3CC'
        },
        '&:focus': {
          color: '#FCE3CC',
          backgroundColor: '#FF4122'
        }
      },
      containedSecondary: {
        color: '#FEF1E6',
        backgroundColor: '#4C2FCD',
        '&:hover': {
          backgroundColor: '#2412AE',
          color: '#FCE3CC'
        },
        '&$disabled': {
          color: '#FEF1E6',
          backgroundColor: '#A697E6'
        },
        '&:focus': {
          color: '#FCE3CC',
          backgroundColor: '#4C2FCD'
        }
      },
      outlinedPrimary: {
        borderWidth: '2px',
        color: '#FF4122',
        borderColor: '#FF4122',
        '&:hover': {
          backgroundColor: '#FF4122',
          color: '#FCE3CC'
        },
        '&:disabled': {
          borderColor: '#FFA091',
          color: '#FFA091'
        },
        '&:focus': {
          backgroundColor: 'transparent',
          borderColor: '#FF4122',
          color: '#FF4122'
        }
      },
      outlinedSecondary: {
        borderWidth: '2px'
      }
    },
    MuiCircularProgress: {
      colorPrimary: {
        color: '#A697E6'
      }
    }
  }
})

export default AndaTheme
