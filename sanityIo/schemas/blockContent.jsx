import React from 'react'
import {Grid, Link, Typography} from '@material-ui/core'
import {InsertLink, Public} from '@material-ui/icons'
// import dropCapImg from '../static/drop-cap-icon.png'
import {
    BoldRender,
    DropCapRender,
    KeystrokeRender,
    LargeBodyTextRender,
    LightRender,
    TextColorRender,
    TypographyRender,
    UnderlineRender
} from '../../src/common/sanityIo/BlockContentMarkRenderers'
import {ButtonRender, CtaRender, HeaderRender, HrRender} from '../../src/common/sanityIo/BlockContentRenderer'
import {ListRender, UtmLinkRender} from '../../src/common/sanityIo/BlockContentAnnotations'
import MixedFeelingsByTTheme from "../../src/theme/MixedFeelingsByTTheme";

const highlightIcon = color => {
    console.log("highlightIcon color", color)

    return (<Grid style={{
        width: '24px',
        height: '24px',
        backgroundColor: 'whitesmoke'
    }} container justifyContent='center' alignItems='center'>
        <Grid item style={{
            color: color, width: '32px',
            height: '14px'
        }}>text</Grid>
    </Grid>)
}

const lightIcon = () => {
    return (<Grid container style={{
        width: '24px',
        height: '24px',
        backgroundColor: 'whitesmoke'
    }} justifyContent='center' alignItems='center'>㏈</Grid>)
}

const LargeBodyTextIcon = () => {
    return (<Grid container style={{
        width: '24px',
        height: '24px',
        backgroundColor: 'whitesmoke',
        fontSize: 'smaller'
    }} justifyContent='center' alignItems='center'>21px</Grid>)
}

const BoldIcon = () => {
    return (<Grid container style={{
        width: '24px',
        height: '24px',
        backgroundColor: 'whitesmoke'
    }} justifyContent='center' alignItems='center'>𝐇</Grid>)
}

const utmIcon = (props) => {

    return <Grid container style={{
        width: '24px',
        height: '24px',
        backgroundColor: 'whitesmoke'
    }} justifyContent='center' alignItems='center'><Public/></Grid>
}

const internalIcon = (props) => {

    return <Grid container style={{
        width: '24px',
        height: '24px',
        backgroundColor: 'whitesmoke'
    }} justifyContent='center' alignItems='center'><InsertLink/></Grid>
}

const underlineIcon = color => {
    return <Grid container style={{
        width: '24px',
        height: '24px',
        backgroundColor: 'whitesmoke'
    }} justifyContent='center' alignItems='center'>
        <u style={{textDecoration: `${color} underline`}}>U</u>
    </Grid>
}
//
// const dropCapIcon = (props) => {
//   return <Grid container style={{  width: '24px',
//     height: '24px',
//     backgroundColor: 'whitesmoke'}} justifyContent="center" alignItems="center">
//     <img src={dropCapImg} width={28} height={28}/>
//   </Grid>
// }

const internalLinkRender = props => {
    console.log('lik props', props)

    return <Link href={props.href}>
        <Typography
            style={{display: 'inline-block', color: MixedFeelingsByTTheme.palette.primary.main}}>
            {props.children}
        </Typography>
    </Link>
}

const bodyRender = (props) => (
    <Typography variant='body1' style={{width: '100%'}}>{props.children}</Typography>
)

export const blockContentConfig = {
    title: 'Column 1',
    type: 'block',
    styles: [
        {
            title: 'Normal',
            value: 'normal',
                component: (props) => bodyRender(props)
        },
        {
            title: 'H1',
            value: 'h1',
                component: (props) => HeaderRender(props, 'h1')
        },
        {
            title: 'H2',
            value: 'h2',
                component: (props) => HeaderRender(props, 'h2')
        },
        {
            title: 'H3',
            value: 'h3',
                component: (props) => HeaderRender(props, 'h3')
        },
        {
            title: 'H4',
            value: 'h4',
                component: (props) => HeaderRender(props, 'h4')
        },
        {
            title: 'H5',
            value: 'h5',
                component: (props) => HeaderRender(props, 'h5')
        },
        {
            title: 'H6',
            value: 'h6',
                component: (props) => HeaderRender(props, 'h6')
        },
        {title: 'Quote', value: 'blockquote'},
        {
            title: 'Call To Action',
            value: 'cta',
                component: CtaRender
        },
        {
            title: 'Horizontal Rule',
            value: 'hr',
                component: HrRender
        }
    ],
    lists: [
        {
            title: 'Bullet',
            value: 'bullet',
                component: ListRender
        },
        {title: 'Numbered', value: 'number'}
    ],
    marks: {
        decorators: [
            {title: 'Strong', value: 'strong'},
            {
                title: 'Subtitle',
                value: 'subtitle',
                icon: () => <>S</>,
                component: (props) => TypographyRender(props, 'subtitle1')
            },
            {
                title: 'Overline',
                value: 'overline',
                    icon: () => <>O</>,
                    component: (props) => TypographyRender(props, 'overline')
            },
            {
                title: 'Heavy',
                value: 'bold',
                    icon: BoldIcon,
                    component: BoldRender
            },
            {title: 'Emphasis', value: 'em'},
            {
                title: 'Light',
                value: 'light',
                    icon: () => lightIcon(MixedFeelingsByTTheme.palette.primary.main),
                    component: LightRender
            },
            {
                title: 'Primary Text Color',
                value: 'primaryTextColor',
                    icon: () => highlightIcon(MixedFeelingsByTTheme.palette.primary.main),
                    component: (props) => (TextColorRender(props, MixedFeelingsByTTheme.palette.primary.main))
            },
            {
                title: 'Secondary Text Color',
                value: 'secondaryTextColor',
                    icon: () => highlightIcon(MixedFeelingsByTTheme.palette.secondary.main),
                    component: (props) => (TextColorRender(props, MixedFeelingsByTTheme.palette.secondary.main))
            },
            {
                title: 'Underline Primary Color',
                value: 'underlinePrimaryColor',
                    icon: () => underlineIcon(MixedFeelingsByTTheme.palette.primary.main),
                    component: (props) => UnderlineRender(props, MixedFeelingsByTTheme.palette.primary.main)
            },
            {
                title: 'Drop Cap',
                value: 'dropCap',
                    icon: () => <>Dc</>,
                    component: DropCapRender
            },
            {
                title: 'Key Stroke',
                value: 'keyStroke',
                    icon: () => <>Ks</>,
                    component: KeystrokeRender
            },
            {
                title: 'Large Body Text',
                value: 'largeBodyText',
                    icon: LargeBodyTextIcon,
                    component: LargeBodyTextRender
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
                            {type: 'homePage'},
                        ]
                    }
                ],
                    icon: internalIcon,
                    component: internalLinkRender
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
                    }
                ],
                    icon: utmIcon,
                    component: UtmLinkRender
            },
            {
                title: 'Button',
                value: 'button',
                    icon: utmIcon,
                    component: ButtonRender,
                name: 'button',
                type: 'object',
                fields: [
                    {
                        title: 'Variant',
                        description: 'The type of Button(Only Text, Contained, Outlined)',
                        name: 'variant',
                        type: 'string',
                        options: {
                            list: [
                                {title: 'Text', value: 'text'},
                                {title: 'Contained', value: 'contained'},
                                {title: 'Outlined', value: 'outlined'}
                            ]
                        }
                    },
                    {
                        title: 'Color',
                        description: 'Color of the Button(Primary, Secondary, Blue)',
                        name: 'color',
                        type: 'string',
                        options: {
                            list: [
                                {title: 'Primary', value: 'primary'},
                                {title: 'Secondary', value: 'secondary'},
                                {title: 'Mint', value: 'mint'}
                            ]
                        }
                    },
                    {
                        title: 'Button Link',
                        description: 'Url',
                        name: 'buttonLink',
                        type: 'url'
                    }
                ]
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
            type: 'lineBreak'
        }
    ]
}