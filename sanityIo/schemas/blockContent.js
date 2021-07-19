import React from 'react'
import {Grid, Link, Typography} from '@material-ui/core'
import {InsertLink, Public} from '@material-ui/icons'
import theme from '../../src/common/Theme'
import {makeStyles} from '@material-ui/core/styles'
// import dropCapImg from '../static/drop-cap-icon.png'
import {
  BoldRender,
  DropCapRender, KeystrokeRender,
  LargeBodyTextRender,
  LightRender,
  TextColorRender,
  TypographyRender,
  UnderlineRender,
} from '../../src/common/sanityIo/BlockContentMarkRenderers'
import {CtaRender, HeaderRender, HrRender} from '../../src/common/sanityIo/BlockContentRenderer'
import {ListRender, UtmLinkRender} from '../../src/common/sanityIo/BlockContentAnnotations'

const useStyles = makeStyles((theme) => ({
  highlightIcon: {
    width: '32px',
    height: '14px'
  },
  iconContainer: {
    width: '24px',
    height: '24px',
    backgroundColor: 'whitesmoke'
  },
  bullet: {
    fontSize: '10px',
    marginRight: theme.spacing(1)
  },
  callToAction: {
    borderTop: '1px solid rgba(0,0,0,.12)',
    borderBottom: '1px solid rgba(0,0,0,.12)',
    width: '100%',
    padding: theme.spacing(3, 0)
  }
}))

const highlightIcon = color => {
  const classes = useStyles(theme)
  return (<Grid container className={classes.iconContainer} justify="center" alignItems="center">
    <Grid item className={classes.highlightIcon} style={{color: color}}>text</Grid>
  </Grid>)
}

const lightIcon = () => {
  const classes = useStyles(theme)
  return (<Grid container className={classes.iconContainer} justify="center" alignItems="center">㏈</Grid>)
}

const LargeBodyTextIcon = () => {
  const classes = useStyles(theme)
  return (<Grid container className={classes.iconContainer} justify="center" alignItems="center"
                style={{fontSize: 'smaller'}}>21px</Grid>)
}

const BoldIcon = () => {
  const classes = useStyles(theme)
  return (<Grid container className={classes.iconContainer} justify="center" alignItems="center">𝐇</Grid>)
}

const utmIcon = (props) => {
  const classes = useStyles(theme)

  return <Grid container className={classes.iconContainer} justify="center" alignItems="center"><Public/></Grid>
}

const internalIcon = (props) => {
  const classes = useStyles(theme)

  return <Grid container className={classes.iconContainer} justify="center" alignItems="center"><InsertLink/></Grid>
}

const underlineIcon = color => {
  const classes = useStyles(theme)
  return <Grid container className={classes.iconContainer} justify="center" alignItems="center">
    <u style={{textDecoration: `${color} underline`}}>U</u>
  </Grid>
}

const dropCapIcon = (props) => {
  const classes = useStyles(theme)
  return <Grid container className={classes.iconContainer} justify="center" alignItems="center">
    <img src={dropCapImg} width={28} height={28}/>
  </Grid>
}

const internalLinkRender = props => {
  console.log('lik props', props)
  return <Link href={props.href}>
    <Typography
      style={{display: 'inline-block', color: theme.palette.primary.main}}>
      {props.children}
    </Typography>
  </Link>
}

const bodyRender = (props) => (
  <Typography variant="body1" style={{width: "100%"}}>{props.children}</Typography>
)

export const blockContentConfig = {
  title: 'Column 1',
  type: 'block',
  styles: [
    {
      title: 'Normal',
      value: 'normal',
      blockEditor: {
        render: (props) => bodyRender(props)
      }
    },
    {
      title: 'H1',
      value: 'h1',
      blockEditor: {
        render: (props) => HeaderRender(props, 'h1')
      }
    },
    {
      title: 'H2',
      value: 'h2',
      blockEditor: {
        render: (props) => HeaderRender(props, 'h2')
      }
    },
    {
      title: 'H3',
      value: 'h3',
      blockEditor: {
        render: (props) => HeaderRender(props, 'h3')
      }
    },
    {
      title: 'H4',
      value: 'h4',
      blockEditor: {
        render: (props) => HeaderRender(props, 'h4')
      }
    },
    {
      title: 'H5',
      value: 'h5',
      blockEditor: {
        render: (props) => HeaderRender(props, 'h5')
      }
    },
    {
      title: 'H6',
      value: 'h6',
      blockEditor: {
        render: (props) => HeaderRender(props, 'h6')
      }
    },
    {title: 'Quote', value: 'blockquote'},
    {
      title: 'Call To Action',
      value: 'cta',
      blockEditor: {
        render: CtaRender
      }
    },
    {
      title: 'Horizontal Rule',
      value: 'hr',
      blockEditor: {
        render: HrRender
      }
    }
  ],
  lists: [
    {
      title: 'Bullet',
      value: 'bullet',
      blockEditor: {
        render: ListRender
      }
    },
    {title: 'Numbered', value: 'number'}
  ],
  marks: {
    decorators: [
      {title: 'Strong', value: 'strong'},
      {
        title: 'Subtitle',
        value: 'subtitle',
        blockEditor: {
          // icon: () => highlightIcon(theme.palette.secondary.main),
          render: (props) => TypographyRender(props, 'subtitle1')
        }
      },
      {
        title: 'Overline',
        value: 'overline',
        blockEditor: {
          // icon: () => highlightIcon(theme.palette.secondary.main),
          render: (props) => TypographyRender(props, 'overline')
        }
      },
      {
        title: 'Heavy',
        value: 'bold',
        blockEditor: {
          icon: BoldIcon,
          render: BoldRender
        }
      },
      {title: 'Emphasis', value: 'em'},
      {
        title: 'Light',
        value: 'light',
        blockEditor: {
          icon: () => lightIcon(theme.palette.primary.main),
          render: LightRender
        }
      },
      {
        title: 'Primary Text Color',
        value: 'primaryTextColor',
        blockEditor: {
          icon: () => highlightIcon(theme.palette.primary.main),
          render: (props) => (TextColorRender(props, theme.palette.primary.main))
        }
      },
      {
        title: 'Underline Primary Color',
        value: 'underlinePrimaryColor',
        blockEditor: {
          icon: () => underlineIcon(theme.palette.primary.main),
          render: (props) => UnderlineRender(props, theme.palette.primary.main)
        }
      },
      {
        title: 'Drop Cap',
        value: 'dropCap',
        blockEditor: {
          // icon: dropCapIcon,
          render: DropCapRender
        }
      },
      {
        title: 'Key Stroke',
        value: 'keyStroke',
        blockEditor: {
          // icon: dropCapIcon,
          render: KeystrokeRender
        }
      },
      {
        title: 'Large Body Text',
        value: 'largeBodyText',
        blockEditor: {
          icon: LargeBodyTextIcon,
          render: LargeBodyTextRender
        }
      }
    ],
    annotations: [
      {
        name: 'internalLink',
        type: 'object',
        title: 'Internal Link',
        fields: [
          {
            name: 'item',
            type: 'reference',
            to: [
              {type: 'abHomePage'},
              {type: 'landingPage'}
            ]
          }
        ],
        blockEditor: {
          icon: internalIcon,
          render: internalLinkRender
        }
      },
      {
        title: 'URL',
        name: 'utmLink',
        type: 'object',
        fields: [
          {
            title: 'URL',
            description: 'utm params will be appended to this URL',
            name: 'href',
            type: 'url'
          },
        ],
        blockEditor: {
          icon: utmIcon,
          render: UtmLinkRender
        }
      }
    ]
  }
}

export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [blockContentConfig,
    {
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      type: "lineBreak"
    },
    {
      type: "code"
    },
    {
      type: "reference",
      to: {type: 'sourceCode'},
    },
  ]
}