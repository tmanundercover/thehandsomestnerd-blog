import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Grid, useMediaQuery} from '@material-ui/core'
import {urlFor} from "../../abReplica/static-pages/cmsStaticPagesClient";
import {SanityImageSource} from "@sanity/asset-utils";
import MediaQueries from "../../layout/MediaQueries";

interface CssProps {
    logoImageSrc:SanityImageSource
    height?: number
}

export const useStyles = makeStyles((theme: Theme) => ({
    root: (props:CssProps) => ({
        backgroundImage: `url(${urlFor(props.logoImageSrc).url() ?? ''})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        minWidth:"100px",
        height: `${props.height ?? 68}px`,
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    }),
}))

interface LogoProps {
    logoImageSrc:SanityImageSource
    height?: number
    isResponsive?: boolean
}

const Logo: FunctionComponent<LogoProps> = (props) => {
    const classes = useStyles({logoImageSrc:props.logoImageSrc, height: props.height})
    const xsOnly = useMediaQuery(MediaQueries.xsOnly)

    return (
        <Grid item container className={classes.root} style={{backgroundPosition: props.isResponsive && xsOnly?"center":"left"}}/>
    )
}

export default Logo