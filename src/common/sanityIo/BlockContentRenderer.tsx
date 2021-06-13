import {CssBaseline, Grid, Typography} from '@material-ui/core'
import theme from '../Theme'
import React from 'react'
import {useCommonStyles} from './CommonStyles'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import {
  BoldRender,
  DropCapRender, KeystrokeRender,
  LargeBodyTextRender,
  LightRender,
  NormalRender,
  TextColorRender,
  TypographyRender,
  UnderlineRender,
} from './BlockContentMarkRenderers'
import BlockContent from '@sanity/block-content-to-react'
import {ListItemRender, ListRender, UtmLinkRender} from './BlockContentAnnotations'

export type HeaderVariantType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type LinkType = { href: string, isAddUtm: boolean }

export type BlockPropsType = { _type: string, listItem?: string, level?: number }
export type BlockContentPropsType<T> = { mark?: T }

export const HeaderRender = (props: any, variant: HeaderVariantType) => {
  return <Typography component="div" variant={variant}
                     style={{
                       color: theme.palette.secondary.main,
                       fontWeight: variant === 'h3' ? 300 : 700,
                       marginBottom: theme.spacing(3),
                     }}>
    {props.children}
  </Typography>
}

export const CtaRender: React.FunctionComponent = (props) => {
  const classes = useCommonStyles(theme)
  return <Grid container item xs={12} className={classes.callToAction}>{props.children}</Grid>
}

export const CodeBlockRender = (props: any) => {
  const sanityCodeBlock:{language?:string, code?:string, highlightedLines?:number[]} = props.node as SanityCodeBlockType
  console.log("Props from codeblock", props)

  const syntaxLanguage = (language?:string)=> {
    if(!language) return "javascript"
    switch (language) {
      case "js":
        return "javascript"
      case "json":
        return "json"
      case "sh":
        return "shell"
    }
  }


  return <Grid container item>
    {sanityCodeBlock?.code ? <SyntaxHighlighter language={syntaxLanguage(sanityCodeBlock?.language)} style={dark}>
      {sanityCodeBlock?.code}
    </SyntaxHighlighter>:<></>}
  </Grid>
}

export const HrRender: React.FunctionComponent = (props) => {
  const classes = useCommonStyles(theme)

  return <Grid container item>
    <hr className={classes.hr}/>
  </Grid>
}

export const BlockContainerRender: React.FunctionComponent = (props: React.PropsWithChildren<{}>) => {
  return <Typography component="span"  style={{width: "100%", overflow:'scroll', height:'100%'}} variant="body1"><CssBaseline/>{props.children}</Typography>
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
    },
  },
  marks: {
    light: LightRender,
    dropCap: DropCapRender,
    primaryTextColor: (props: any) => (TextColorRender(props, theme.palette.primary.main)),
    secondaryTextColor: (props: any) => (TextColorRender(props, theme.palette.secondary.main)),
    underlinePrimaryColor: (props: any) => (UnderlineRender(props, theme.palette.primary.main)),
    utmLink: UtmLinkRender,
    bold: BoldRender,
    keyStroke: KeystrokeRender,
    subtitle: (props: any) => TypographyRender(props, 'subtitle1'),
    overline: (props: any) => TypographyRender(props, 'overline'),
    largeBodyText: (props: any) => LargeBodyTextRender(props),
  },
  container: BlockContainerRender,
}


export default {
  HeaderRender,
  CtaRender,
  BlockContainerRender,
}
