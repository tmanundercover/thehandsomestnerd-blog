import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Grid} from '@material-ui/core'
import {urlFor} from "../../abReplica/static-pages/cmsStaticPagesClient";
import {SanityImageSource} from "@sanity/asset-utils";

interface CssProps {
    logoImageSrc:SanityImageSource
    height?: number
}

export const useStyles = makeStyles((theme: Theme) => ({
    root: (props:CssProps) => ({
        backgroundImage: `url(${urlFor(props.logoImageSrc).url() ?? ''})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: `${props.height ?? 68}px`,
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    }),
}))

interface LogoProps {
    logoImageSrc:SanityImageSource
    height?: number
}

const Logo: FunctionComponent<LogoProps> = (props) => {
    const classes = useStyles({logoImageSrc:props.logoImageSrc, height: props.height})

    return (
        <Grid item container className={classes.root}/>
    )
}

export default Logo