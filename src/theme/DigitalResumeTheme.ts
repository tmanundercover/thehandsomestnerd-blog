import {createTheme} from '@material-ui/core'
import BitterPro from './common/fonts/bitter_pro/fonts/ttf/BitterPro-Black.ttf'
import Raleway from './common/fonts/Raleway/variable/TTF/Raleway-VF.ttf'
import RalewayBold from './common/fonts/Raleway/static/TTF/Raleway-Bold.ttf'
import Rainbow from './common/fonts/rainbow/Rainbow.ttf'
import ElaineSans from "./common/fonts/elaine-sans/elaineSans-extrabold.ttf";

type FontFace = {
    fontDisplay?: any
    fontFamily?: any
    fontStyle?: any
    fontWeight?: number
    src?: string
}

export const bitterPro: FontFace = {
    fontFamily: 'Bitter Pro',
    fontStyle: 'normal',
    fontDisplay: 'swap', // uses the fallback font to display the text until the custom font has fully downloaded. This is also known as a “flash of unstyled text” or FOUT.
    fontWeight: 400,
    src: `
    local('Bitter Pro'),
    url(${BitterPro}) format('truetype')
  `
}

export const raleway: FontFace = {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontDisplay: 'swap', // uses the fallback font to display the text until the custom font has fully downloaded. This is also known as a “flash of unstyled text” or FOUT.
    fontWeight: 500,
    src: `
    local('Raleway Regular'),
    url(${Raleway}) format('truetype')
  `
}

export const ralewayBold: FontFace = {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontDisplay: 'swap', // uses the fallback font to display the text until the custom font has fully downloaded. This is also known as a “flash of unstyled text” or FOUT.
    fontWeight: 1000,
    src: `
    local('Raleway Bold'),
    url(${RalewayBold}) format('truetype')
  `
}

export const rainbow: FontFace = {
    fontFamily: 'Rainbow',
    fontStyle: 'normal',
    fontDisplay: 'swap', // uses the fallback font to display the text until the custom font has fully downloaded. This is also known as a “flash of unstyled text” or FOUT.
    fontWeight: 400,
    src: `
    local('Rainbow Regular'),
    url(${Rainbow}) format('truetype')
  `
}

const elainSansExtraBold: FontFace = {
    fontFamily: 'Elaine Sans',
    fontStyle: 'normal',
    fontDisplay: 'swap', // uses the fallback font to display the text until the custom font has fully downloaded. This is also known as a “flash of unstyled text” or FOUT.
    fontWeight: 800,
    src: `
    local('Elaine Sans'),
    url(${ElaineSans}) format('truetype')
  `
}

const fonts = ['Raleway', 'Bitter Pro', 'Elaine Sans'].join(',')

export enum COLORS {
    DARKBLUE = 'rgba(0,0,53,1)',
    TRANSPARENT_DARKBLUE = 'rgba(0,0,53,.85)',
    BLUE = 'rgba(16, 43, 136, 1)',
    DARK_GRAY = '#A8A9AC',
    GRAY = 'rgba(207, 207, 207, 1)',
    LIGHT_GRAY = '#949495',
    TRANSPARENTWHITE = 'rgba(255,255,255,0.75)',
    LIGHTBLUE = '#2CC4D7',
    ALMOSTPURPLE = "#331BAD",
    LIGHTGRAY = "#F4F3F5",
    TRANSPARENTLIGHTGRAY = "rgba(244,243,245,0.87)",
    MEDIUMGRAY = "#BCB9B0",
    DARKGRAY = "#43424A",
    TRANSPARENTDARKGRAY = "rgba(67,66,74,0.78)",
    AQUA="#12b3be"
}

const DigitalResumeTheme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 640,
            md: 980,
            lg: 1160,
            xl: 1320,
        }
    },
// @ts-ignore
    palette: {
        background: {
            default: "#f6f6f6",
            paper: "#43424A"
        },
        primary: {
            main: "#d20027",
        },
        secondary: {
            main: "#e6e6e6",
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
            primary: "#404040",
            secondary: "#FFFFFF",
            disabled: COLORS.LIGHT_GRAY
        }
    },
    mixins: {
      toolbar: {
          height: "55px"
      }
    },
    typography: {
        fontFamily: fonts,
        h1: {
            // Title1
            fontSize: '70px',
            fontStyle: 'normal',
            fontWeight: "bold",
            lineHeight: 1.3,
            letterSpacing: '-0.01em'
        },
        h2: {
            // Title2
            fontSize: '53px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: '-0.02em'
        },
        h3: {
            // Title3
            fontSize: '32px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 1.4,
            letterSpacing: '-0.03em'
        },
        h4: {
            fontWeight: 'bold',
            fontStyle: 'normal',
            fontSize: '30px',
            lineHeight: 1
        },
        h5: {
            fontWeight: 'bold',
            fontStyle: 'normal',
            fontSize: '28px',
            lineHeight: 1
        },
        h6: {
            fontWeight: 'bold',
            fontStyle: 'normal',
            fontSize: '24px',
            lineHeight: 1
        },
        body1: {
            // Body
            fontSize: '14.5px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: '-0.02em'
        },
        body2: {
            // Large
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: 550,
            lineHeight: 1.5,
            letterSpacing: '0.0em'
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
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 750,
            lineHeight: 1,
            letterSpacing: '-0.03em'
        },
        subtitle2: {
            // Micro
            fontSize: '11px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 1.45,
            letterSpacing: '-0.03em'
        }
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [bitterPro, raleway, ralewayBold, rainbow, elainSansExtraBold]
            },
        },
        MuiInputBase: {
            root: {
                borderRadius: 0,
                // color: "#FAFAFA",
                "&:focus": {
                    borderBottom: 0
                }
            },
            input: {
                // borderBottom: "4px solid " + COLORS.MAIN,
                "& :before": {
                    // borderBottom: "1px solid "+ COLORS.MAIN,
                }
            }
        },
        MuiTooltip: {
            tooltip: {
                // backgroundColor: 'rgba(16, 43, 136, .9)'
            }
        },
        MuiSnackbarContent: {
            root: {
                marginTop: "100px",
                border: "3px solid white",
                backgroundColor: 'rgba(210,0,39,0.9) !important'
            }
        },
        MuiOutlinedInput: {
            root:{
                // borderRadius: 0
            }
        },
        MuiFormLabel:{
          root:{
              color: "#383838",
              paddingTop: "4px",
          }
        },
        MuiFilledInput: {
            root: {
                // backgroundColor: "rgba(0,0,0,.3)",
                // borderBottom: "1px solid "+ COLORS.MAIN,
                "& .Mui-focused": {
                    borderBottomWidth: '0px solid black'
                }
            },
            // notchedOutline: {
            //     "& :after":{
            //             borderColor: "red"
            //     }
            //     // "& :after": {
            //     //     borderBottom: "2px solid red",
            //     //     borderColor:  COLORS.MAIN,
            //     // }
            // },
        },
        MuiInputLabel: {
            root: {
                // color:"black",
            }
        },
        MuiButton: {
            root: {
                // color: '#FFFFFF',
                // height: '35px',
                // padding: '8px 16px 8px 16px',
                borderRadius: '5px',
                paddingTop: "16px",
                paddingBottom: "16px"
            },
            contained: {
                boxShadow: "none",
            },
            containedPrimary: {
                border: '1px solid white',
                // backgroundColor: "rgba(207, 207, 207, .8)",
                // color: '#FCE3CC',
                // backgroundColor: '#FF4122',
                // '&:hover': {
                //   backgroundColor: '#BD1A00',
                //   color: '#FCE3CC'
                // },
                '&$disabled': {
                    // backgroundColor: '#79582d',
                    color: '#969284'
                },
                // '&:focus': {
                //   color: '#FCE3CC',
                //   backgroundColor: '#FF4122'
                // }
            },
            containedSecondary: {
                border: '1px solid whitesmoke',
                // color: '#FEF1E6',
                // backgroundColor: 'rgba(16, 43, 136, .7)',
                // '&:hover': {
                //   backgroundColor: '#2412AE',
                //   color: '#FCE3CC'
                // },
                '&$disabled': {
                    color: 'rgba(207, 207, 207, .5)',
                    // backgroundColor: 'rgba(16, 43, 136, .5)'
                },
                // '&:focus': {
                //   color: '#FCE3CC',
                //   backgroundColor: '#4C2FCD'
                // }
            },
            outlinedPrimary: {
                borderWidth: '3px',
                paddingTop: "16px",
                paddingBottom: "16px",
                paddingLeft: "64px",
                paddingRight: "64px"
                // color: '#FF4122',
                // borderColor: '#FF4122',
                // '&:hover': {
                //   backgroundColor: '#FF4122',
                //   color: '#FCE3CC'
                // },
                // '&:disabled': {
                //   borderColor: '#FFA091',
                //   color: '#FFA091'
                // },
                // '&:focus': {
                //   backgroundColor: 'transparent',
                //   borderColor: '#FF4122',
                //   color: '#FF4122'
                // }
            },
            outlinedSecondary: {
                borderWidth: '3px',
                paddingTop: "16px",
                paddingBottom: "16px",
                paddingLeft: "64px",
                paddingRight: "64px",
            }
        },
        MuiCircularProgress: {
            // colorPrimary: {
            //   color: '#A697E6'
            // }
        }
    }
})

export default DigitalResumeTheme
