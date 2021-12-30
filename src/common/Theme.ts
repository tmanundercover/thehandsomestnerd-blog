import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 640,
      lg: 1160,
      xl: 1160
    }
  },
  palette: {
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF'
    },
    primary: {
      main: '#e54b4b',
      light: '#FDAEA3',
      dark: '#D0604F'
    },
    secondary: {
      main: '#3D3D3D',
      light: '#FAFAFA',
      dark: '#363636'
    },
    error: {
      main: '#960C00',
      light: '#BE6861',
      dark: '#840B00'
    },
    success: {
      main: '#3D9C2E',
      light: '#87C27D',
      dark: '#368928'
    },
    info: {
      main: '#2D6AD2',
      light: '#7DA3E3',
      dark: '#285D89'
    },
    text: {
      primary: '#000000',
      secondary: '#3D3D3D',
      disabled: 'rgba(0, 0, 0, 0.38)'
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
    fontFamily: [
      'poppins', 'sans-serif'
    ].join(','),
    h3: {
      fontSize: '48px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '56px'
      // letterSpacing: '1px'
    },
    h4: {
      fontSize: '34px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '39px',
      letterSpacing: '1px'
    },
    h5: {
      fontSize: '32px',
      fontStyle: 'normal',
      fontWeight: 900,
      lineHeight: '24px',
      letterSpacing: '-3px'
    },
    h6: {
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: 800,
      lineHeight: '24px',
      letterSpacing: '1px'
    },
    body1: {
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0.5px',
      fontWeight: 400,
      fontStyle: 'normal'
    },
    body2: {
      fontStyle: 'normal',
        fontSize: '15px',
        lineHeight: '30px',
        letterSpacing: '1px',
        fontWeight: 400,
        color: "#767676"
    },
    button: {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '24px',
      letterSpacing: '1.25px',
      textTransform: 'uppercase'
    },
    overline: {
      fontWeight: 800,
      fontSize: '10px',
      lineHeight: '16px',
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      color: 'rgba(0, 0, 0, 0.6)'
    }
  },
  overrides: {
  },
})

export default theme