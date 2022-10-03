import { Button, CssBaseline, Grid, MuiThemeProvider, PropTypes, Typography } from '@material-ui/core'
import theme from '../Theme'
import React from 'react'
import { useCommonStyles } from './CommonStyles'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import {
  BoldRender,
  DropCapRender, KeystrokeRender,
  LargeBodyTextRender,
  LightRender,
  NormalRender,
  TextColorRender,
  TypographyRender, TypographyVariantType,
  UnderlineRender
} from './BlockContentMarkRenderers'
// @ts-ignore
import BlockContent from '@sanity/block-content-to-react'
import { ButtonMarkRender, ListItemRender, ListRender, UtmLinkRender } from './BlockContentAnnotations'
import AftTheme, { grotesco } from '../../theme/aft-theme/AftTheme'
import AndaTheme from '../../theme/aft-theme/AftTheme'
import { PRIMARY_MINT } from '../../components/aft-marketing/AboutAndaCardSection'

export type HeaderVariantType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type LinkType = { href: string, isAddUtm: boolean }
export type ButtonType = { buttonLink: string, variant: string, color: string }

export type BlockPropsType = { _type: string, listItem?: string, level?: number }
export type BlockContentPropsType<T> = { mark?: T }

export const HeaderRender = (props: any, variant: HeaderVariantType) => {
  const wrapWithHTag = (children: any) => {
    switch (variant) {
      case 'h1':
        return <h1 style={{...grotesco}}>{children}</h1>
        break
      case 'h2':
        return <h2 style={{...grotesco}}>{children}</h2>
        break
      case 'h3':
        return <h3 style={{...grotesco}}>{children}</h3>
        break
      case 'h4':
        return <h4 style={{...grotesco}}>{children}</h4>
        break
      case 'h5':
        return <h5 style={{...grotesco}}>{children}</h5>
        break
      case 'h6':
        return <h6 style={{...grotesco}}>{children}</h6>
        break
      default:
        return <Typography display='inline' component='div'
                           style={{
                             color: theme.palette.secondary.main,
                             fontWeight: variant === 'h3' ? 300 : 700,
                             marginBottom: theme.spacing(3)
                           }}
                           variant={variant as TypographyVariantType}>{children}</Typography>
    }

  }

  return <MuiThemeProvider theme={AftTheme}>
    <CssBaseline/>{wrapWithHTag(
    props.children
    )}
  </MuiThemeProvider>


  // return <Typography component='div' variant={variant}
  //                    style={{
  //                      color: theme.palette.secondary.main,
  //                      fontWeight: variant === 'h3' ? 300 : 700,
  //                      marginBottom: theme.spacing(3)
  //                    }}>
  //   {props.children}
  // </Typography>
}

export const CtaRender: React.FunctionComponent = (props) => {
  const classes = useCommonStyles(AftTheme)
  return <Grid container item xs={12} className={classes.callToAction}>{props.children}</Grid>
}

export const CodeBlockRender = (props: any) => {
  const sanityCodeBlock: { language?: string, code?: string, highlightedLines?: number[] } = props.node as SanityCodeBlockType
  console.log('Props from codeblock', props)

  const syntaxLanguage = (language?: string) => {
    if (!language) return 'javascript'
    switch (language) {
      case 'js':
        return 'javascript'
      case 'json':
        return 'json'
      case 'sh':
        return 'shell'
    }
  }


  return <Grid container item>
    {sanityCodeBlock?.code ? <SyntaxHighlighter language={syntaxLanguage(sanityCodeBlock?.language)} style={dark}>
      {sanityCodeBlock?.code}
    </SyntaxHighlighter> : <></>}
  </Grid>
}

export const HrRender: React.FunctionComponent = (props) => {
  const classes = useCommonStyles(AftTheme)

  return <Grid container item>
    <hr className={classes.hr}/>
  </Grid>
}

type SanityButtonBlockContentType = {
  buttonText?: string, buttonLink?: string, color?: string
}

export const ButtonRender = (props: any) => {
  // const sanityButton:{buttonText?:string, buttonLink?:string, color?:string, variant?:string} = props.node as SanityButtonBlockContentType
  console.log('Props from button', props)

  let textColor = ''

  // switch(props.color) {
  //   case 'secondary':
  //     textColor = "whitesmoke"
  //     break;
  //   case 'primary':
  //     textColor = "whitesmoke"
  //     break;
  //   case 'mint':
  //     textColor = AftTheme.palette.secondary.main
  //     break;
  //   default:
  //     textColor = "whitesmoke"
  // }

  switch (props?.variant) {
    case 'outlined':
      switch (props.color) {
        case 'secondary':
          textColor = AftTheme.palette.secondary.main
          break
        case 'primary':
          textColor = AftTheme.palette.primary.main
          break
        case 'mint':
          textColor = PRIMARY_MINT
          break
        default:
          textColor = 'whitesmoke'
      }
      break
    case 'contained':
      switch (props.color) {
        case 'secondary':
          textColor = 'whitesmoke'
          break
        case 'primary':
          textColor = 'whitesmoke'
          break
        case 'mint':
          textColor = AftTheme.palette.secondary.main
          break
        default:
          textColor = AftTheme.palette.background.paper
      }
      break
    case 'text':
    default:
      switch (props.color) {
        case 'secondary':
          textColor = AftTheme.palette.secondary.main
          break
        case 'primary':
          textColor = AftTheme.palette.primary.main
          break
        case 'mint':
          textColor = PRIMARY_MINT
          break
        default:
          textColor = AftTheme.palette.text.primary
      }
      break
  }

  return <MuiThemeProvider theme={AftTheme}>
    <CssBaseline/>
    <Grid container item>
      <Button style={props?.color === 'mint' ? props?.variant === 'contained' ? {
        backgroundColor: PRIMARY_MINT,
        borderRadius: '20px'
      } : {backgroundColor: 'transparent', borderColor: PRIMARY_MINT, borderRadius: '20px'} : {borderRadius: '20px'}}
              variant={props.variant as 'text' | 'outlined' | 'contained'}
              color={props?.color != 'mint' ? props?.color as PropTypes.Color : 'inherit'}
              href={props.buttonLink}><Typography variant='button'
                                                  style={{color: textColor}}>{props.children}</Typography></Button>
    </Grid>
  </MuiThemeProvider>
}

export const BlockContainerRender: React.FunctionComponent = (props: React.PropsWithChildren<{}>) => {
  return <Typography component='span' style={{width: '100%', overflow: 'scroll', height: '100%'}}
                     variant='body1'><CssBaseline/>{props.children}</Typography>
}

export type SanityCodeBlockType = {
  language?: 'js',
  highlightedLines: number[],
  code: string
}

export const blockSerializers: any = {
  list: ListRender,
  listItem: ListItemRender,
  types: {
    code: CodeBlockRender,
    utmLink: UtmLinkRender,
    button: ButtonRender,
    block: (props: any) => {
      switch (props.node.style as string) {
        case 'h1':
        case 'h2':
        case 'h3':
        case 'h4':
        case 'h5':
        case 'h6':
          return HeaderRender(props, props.node.style as HeaderVariantType)
        case 'normal':
          return NormalRender(props)
        case 'cta':
          return CtaRender(props)
        default:
          //@ts-ignore
          return BlockContent.defaultSerializers.types.block(props)
      }
    },
    lineBreak: (props: any) => {
      const {style} = props.node
      if (style === 'horizontalRule') {
        return <HrRender/>
      }
      return null
    }
  },
  marks: {
    light: LightRender,
    dropCap: DropCapRender,
    primaryTextColor: (props: any) => (TextColorRender(props, AftTheme.palette.primary.main)),
    secondaryTextColor: (props: any) => (TextColorRender(props, AftTheme.palette.secondary.main)),
    underlinePrimaryColor: (props: any) => (UnderlineRender(props, AftTheme.palette.primary.main)),
    utmLink: UtmLinkRender,
    bold: BoldRender,
    button: ButtonMarkRender,
    keyStroke: KeystrokeRender,
    subtitle: (props: any) => TypographyRender(props, 'subtitle1'),
    overline: (props: any) => TypographyRender(props, 'overline'),
    largeBodyText: (props: any) => LargeBodyTextRender(props)
  },
  container: BlockContainerRender
}


export default {
  HeaderRender,
  CtaRender,
  BlockContainerRender
}
