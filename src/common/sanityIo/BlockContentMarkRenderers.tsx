// mark Renderers should only apply classes to inline elements (spans) not add html block elements.
// ex: if you add a typography tag here then the variant by default is body1
// if a header mark was included on the same block this would overwrite the variant.
// it would also block other html elements causing that mark to line break
import React from 'react'
import theme from '../Theme'
import {useCommonStyles} from './CommonStyles'
import {Typography} from '@material-ui/core'

export type TypographyVariantType =
  'inherit'
  | 'button'
  | 'overline'
  | 'caption'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'srOnly'
  | undefined
export const LightRender: React.FunctionComponent = (props) => {
  const classes = useCommonStyles(theme)
  return <span className={classes.lightWeightFont}>{props.children}</span>
}

export const BoldRender: React.FunctionComponent = (props) => {
  const classes = useCommonStyles(theme)
  return <span className={classes.boldWeightFont}>{props.children}</span>
}

export const DropCapRender: React.FunctionComponent = (props) => {
  const classes = useCommonStyles(theme)
  return <span className={classes.dropCapLetter}>{props.children}</span>
}

export const KeystrokeRender: React.FunctionComponent = (props) => {
  const classes = useCommonStyles(theme)
  return <span className={classes.keystroke}>{props.children}</span>
}

export const TextColorRender: React.FunctionComponent = (props, color) => {
  return <span style={{color: color}}>{props.children}</span>
}

export const UnderlineRender: React.FunctionComponent = (props, color) => {
  return <span style={{textDecoration: `${color} underline`}}>{props.children}</span>
}

export const NormalRender: React.FunctionComponent = (props: React.PropsWithChildren<{}> & { listItem?: string, level?: number }) => {
  const classes = useCommonStyles(theme)
  return <p className={classes.bodyText}>{props.children}</p>
}

export const TypographyRender: React.FunctionComponent = (props, variant: string) => {
  return <Typography component="p" style={{textDecoration: 'none'}}
                     variant={variant as TypographyVariantType}>{props.children}</Typography>
}

export const LargeBodyTextRender: React.FunctionComponent = (props) => {
  return <Typography component="p"
                     style={{fontSize: '21px'}}>{props.children}</Typography>
}

export default {
  LightRender,
  BoldRender,
  DropCapRender,
  HighlightRender: TextColorRender,
  UnderlineRender,
  TypographyRender,
  LargeBodyTextRender,
  KeystrokeRender
}