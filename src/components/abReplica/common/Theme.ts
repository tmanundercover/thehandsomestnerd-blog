import FutureStd from './fonts/FuturaStdBook/FuturaStdBook.otf'
import FutureHeavy from './fonts/FuturaStdHeavy/FuturaStdHeavy.otf'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    brand: Palette['primary'],
    brandAccent: Palette['primary'],
    bodyText: Palette['primary'],
    secondaryText: Palette['primary'],
    tertiaryText: Palette['primary'],
    disabledText: Palette['primary'],
    accentText: {
      blue: Palette['primary'],
      green: Palette['primary'],
      coral: Palette['primary'],
    },
    highlight: {
      logoBlue: Palette['primary'],
      logoGreen: Palette['primary'],
      logoCoral: Palette['primary'],
    }
  }

  interface PaletteOptions {
    neutrals: {
      brand: PaletteOptions['primary'],
      brandAccent: PaletteOptions['primary'],
      bodyText: PaletteOptions['primary'],
      secondaryText: PaletteOptions['primary'],
      tertiaryText: PaletteOptions['primary'],
      disabledText: PaletteOptions['primary'],
    },
    accentText: {
      blue: PaletteOptions['primary'],
      green: PaletteOptions['primary'],
      coral: PaletteOptions['primary'],
    },
    highlight: {
      logoBlue: PaletteOptions['primary'],
      logoGreen: PaletteOptions['primary'],
      logoCoral: PaletteOptions['primary'],
    }
  }
}

const futuraStdBook: any = {
  fontFamily: 'Futura',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 'normal',
  src: `
    local('Futura Std Book'),
    url(${FutureStd})
  `,
}

const futuraStdHeavy: any = {
  fontFamily: 'Futura',
  fontStyle: 'bold',
  fontDisplay: 'swap',
  fontWeight: 'bold',
  src: `
    local('Futura Std Heavy'),
    url(${FutureHeavy})
  `,
}

const fonts = [
  'IBM Plex Sans', 'sans-serif',
]

let abTheme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 980,
      lg: 1160,
      xl: 1320,
    },
  },
  palette: {
    background: {
      default: '#FDF3EB',
      paper: '#FFFFFF',
    },
    primary: {
      main: '#FB7C6A',
      light: '#FDAEA3',
      dark: '#D0604F',
    },
    secondary: {
      main: '#3D3D3D',
      light: '#878787',
      dark: '#363636',
    },
    error: {
      main: '#960C00',
      light: '#BE6861',
      dark: '#840B00',
    },
    success: {
      main: '#3D9C2E',
      light: '#87C27D',
      dark: '#368928',
    },
    info: {
      main: '#2D6AD2',
      light: '#7DA3E3',
      dark: '#285D89',
    },
    warning: {
      main: '#FFE600',
      light: '#FFEF61',
      dark: '#E0CA00',
    },
    text: {
      primary: '#0c0c0c',
      secondary: '#3D3D3D',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    neutrals: {
      brand: {
        main: '#FB7C6A',
      },
      brandAccent: {
        main: '#F9E6D8',
      },
      bodyText: {
        main: '#000000',
      },
      secondaryText: {
        main: '#3D3D3D',
      },
      tertiaryText: {
        main: 'rgba(0, 0, 0, 0.6)',
      },
      disabledText: {
        main: 'rgba(0, 0, 0, 0.38)',
      },
    },
    accentText: {
      blue: {
        main: '#565190',
      },
      green: {
        main: '#5C7F61',
      },
      coral: {
        main: '#FB7C6A',
      },
    },
    highlight: {
      logoBlue: {
        main: '#7FACD9',
      },
      logoGreen: {
        main: '#7FA41F',
      },
      logoCoral: {
        main: '#FE5E4A',
      },
    },
  },
  typography: {
    fontFamily: fonts.join(','),
    h1: {
      fontSize: '96px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: '-1.5px',
    },
    h2: {
      fontSize: '60px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: '-0.5px',
    },
    h3: {
      fontSize: '48px',
      fontStyle: 'normal',
      fontWeight: 300,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: '34px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h5: {
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '0.18px',
    },
    h6: {
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '1px',
    },
    subtitle1: {
      fontSize: '16px',
      lineHeight: 1.5,
      letterSpacing: '0.15px',
      fontWeight: 500,
      fontStyle: 'normal',
    },
    subtitle2: {
      fontSize: '14px',
      lineHeight: 1.5,
      letterSpacing: '0.1px',
      fontWeight: 500,
      fontStyle: 'normal',
    },
    body1: {
      fontSize: '16px',
      lineHeight: 1.5,
      letterSpacing: '0.5px',
      fontWeight: 400,
      fontStyle: 'normal',
    },
    body2: {
      fontSize: '14px',
      lineHeight: 1.5,
      letterSpacing: '0.25px',
      fontWeight: 400,
      fontStyle: 'normal',
    },
    button: {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: '1.25px',
      textTransform: 'uppercase',
    },
    overline: {
      fontWeight: 500,
      fontSize: '10px',
      lineHeight: 1.5,
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [futuraStdBook, futuraStdHeavy],
      },
    },
    MuiFormLabel: {
      root: {
        color: 'rgba(0,0,0,0.6)',
      },
    },
    MuiInput: {
      underline: {
        '&:before': {
          borderBottom: '1px solid #E0E0E0',
        },
      },
    },
    MuiButton: {
      root: {
        borderRadius: '0',
        minWidth: 'max-content',
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        textDecoration: 'none',
      },
      label: {
        justifyContent: 'center',
      },
      contained: {
        color: '#FFFDFB',
        justifyContent: 'flex-start',
        padding: '4px 14px',
        '&$disabled': {
          backgroundColor: 'rgba(0, 0, 0, 0.38)',
          color: 'white',
        },
      },
      containedPrimary: {
        color: 'white',
      },
      outlined: {
        color: '#3D3D3D',
        border: '1px solid rgba(0,0,0,.12)',
        justifyContent: 'center',
        padding: '3px 13px',
      },

    },
    MuiFab: {
      root: {
        color: '#FFFFFF',
        fontWeight: 800,
      },
    },
    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: 'white',
        },
      },
    },
  },
})

export default abTheme