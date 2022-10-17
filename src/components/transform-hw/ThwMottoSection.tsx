import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Button, Grid, Typography, useMediaQuery} from '@material-ui/core'
import {urlFor} from '../abReplica/static-pages/cmsStaticPagesClient'
import {ThwMottoSectionType, ThwPositivePsychologySectionType} from "../BlockContentTypes";
import TransformHWTheme from "../../theme/transform-hw/TransformHWTheme";
import {Check} from "@material-ui/icons";
import MediaQueries from "../layout/MediaQueries";
import {useThwStyles} from "../layout/Styles";
import speakingWithTherapist from "../layout/error/assets/speakingWithTherapist.jpg";
import {useHistory} from "react-router-dom";
import clsx from "clsx";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: '430px',
        backgroundColor: theme.palette.background.paper,
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
    const globalClasses = useThwStyles({bgImage: urlFor(props.sectionData.parallaxImage)})
    const classes = useStyles()

    const smDown = useMediaQuery(MediaQueries.smDown)
    return (
        <Grid container item className={clsx([globalClasses.fullSection, globalClasses.fullScreenImage, classes.root])}
              style={{position: "relative", overflow: "hidden", backgroundAttachment: "fixed"}}>
            <Grid container item
                  className={clsx(globalClasses.fullSectionOverlay)}>
            </Grid>
            <Grid container justifyContent='center' alignItems='center' alignContent='center' item
                  style={{zIndex: 2, padding: "40px"}}>
                <Typography variant='body2' style={{color: '#FAFAFA'}} align='center'>
                    {props.sectionData.contentSuperTitle}
                </Typography>
                <Typography variant={smDown?'h3':'h2'} style={{color: '#FAFAFA'}} align='center'>
                    {props.sectionData.contentText}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default ThwMottoSection