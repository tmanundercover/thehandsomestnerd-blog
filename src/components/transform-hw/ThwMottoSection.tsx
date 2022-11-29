import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Grid, Typography} from '@material-ui/core'
import {urlFor} from '../block-content-ui/static-pages/cmsStaticPagesClient'
import {ThwMottoSectionType} from "../BlockContentTypes";
import {Parallax} from 'react-parallax';
import clsx from "clsx";
import MackenziesMindTheme from "../../theme/MackenziesMindTheme";
import MediaQueriesContext from "../media-queries-context/MediaQueriesContext";
import useCustomStyles from "../mackenzies-mind/pages/Styles";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: '430px',
        // backgroundColor: theme.palette.background.paper,
        paddingBottom: theme.spacing(5)
    },
    contentBullets: {
        // border: "1px solid black"
        marginBottom: theme.spacing(5)
    }
}))


interface IProps {
    sectionData: ThwMottoSectionType
}

const ThwMottoSection: FunctionComponent<IProps> = (props) => {
    const globalClasses = useCustomStyles(MackenziesMindTheme)
    const classes = useStyles()
    const mediaQueriesContext = useContext(MediaQueriesContext)

    return (
        <Parallax blur={1} bgImage={urlFor(props.sectionData.parallaxImage).url() ?? undefined} bgImageAlt="the cat"
                  strength={600}>
            <Grid container item
                  className={clsx([globalClasses.fullSection, classes.root])}
                  style={{position: "relative", overflow: "hidden"}}>
                <Grid container item
                      className={clsx(globalClasses.fullSectionOverlay)}>
                </Grid>
                <Grid container justifyContent='center' alignItems='center' alignContent='center' item
                      style={{zIndex: 2, padding: "40px"}}>
                    <Typography variant='subtitle1' style={{color: '#FAFAFA'}} align='center'>
                        {props.sectionData.contentSuperTitle}
                    </Typography>
                    <Typography variant={mediaQueriesContext.smDown ? 'h3' : 'h2'} style={{color: '#FAFAFA'}} align='center'>
                        {props.sectionData.contentText}
                    </Typography>
                </Grid>
            </Grid>
        </Parallax>
    )
}

export default ThwMottoSection