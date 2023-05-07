import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Chip, Grid, Typography} from '@material-ui/core'
import {urlFor} from '../block-content-ui/static-pages/cmsStaticPagesClient'
import {
    MfbtAboutProprietorSectionType, MfbtPaymentMethodSectionType,
    ProprietorAtAGlanceType,
    ThwAboutProprietorSectionType
} from "../BlockContentTypes";
import MixedFeelingsByTTheme from "../../theme/MixedFeelingsByTTheme";
import ImageWIthButtonOverlay from "../image-with-button-overlay/ImageWithButtonOverlay";
import LoadingButton from "../loading-button/LoadingButton";
import ResponsiveBullet from "../ResponsiveBullet";
import {FiberManualRecord} from "@material-ui/icons";
import ColoredPng from "../colored-png/ColoredPng";
import MediaQueriesContext from "../media-queries-context/MediaQueriesContext";
import firebaseAnalyticsClient from "../../utils/firebase/FirebaseAnalyticsClient";
import PageContext from "../page-context/PageContext";
import {theme} from "@sanity/types/parts/part.@sanity/components/build-snapshot";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minHeight: '521px',
        backgroundColor: "white",
        // paddingLeft: -theme.spacing(-5),
    },
    contentBullets: {
        // border: "1px solid black"
        marginBottom: theme.spacing(5)
    }
}))


interface IProps {
    sectionData: MfbtPaymentMethodSectionType
}

const MFBTAboutTheProprietor: FunctionComponent<IProps> = (props) => {
    const classes = useStyles(MixedFeelingsByTTheme)
    const mediaQueriesContext = useContext(MediaQueriesContext)

    return (
        <Grid container item className={classes.root} xs={mediaQueriesContext.xsOnly ? 12 : 11}
              style={mediaQueriesContext.xsOnly ? {paddingBottom: 0, paddingTop: 0} : {
                  paddingBottom: MixedFeelingsByTTheme.spacing(10),
                  paddingTop: MixedFeelingsByTTheme.spacing(10),
              }}>
            <Grid container item alignContent='center' justifyContent='center' style={{paddingBottom: mediaQueriesContext.xsOnly ? MixedFeelingsByTTheme.spacing(3):MixedFeelingsByTTheme.spacing(0)}}>
                <Typography variant={"h3"}>{props.sectionData.title}</Typography>
            </Grid>
            <Grid container item justifyContent='space-around'
            >
                <Grid container item>
                    <Grid container item alignContent='center' justifyContent='center'>
                        <ImageWIthButtonOverlay height={115}
                                                imageSrc={props.sectionData.mainPaymentImage}></ImageWIthButtonOverlay>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item justifyContent='space-around' spacing={2} style={{padding: MixedFeelingsByTTheme.spacing(2,4)}}
            >
                <Grid container item xs={12} sm={4}>
                    <Grid container item alignContent='center' justifyContent='center'>
                        <ImageWIthButtonOverlay height={100}
                                                imageSrc={props.sectionData.paymentImage1}></ImageWIthButtonOverlay>
                    </Grid>
                </Grid>
                <Grid container item  xs={12} sm={4}>
                    <Grid container item alignContent='center' justifyContent='center'>
                        <ImageWIthButtonOverlay height={100}
                                                imageSrc={props.sectionData.paymentImage2}></ImageWIthButtonOverlay>
                    </Grid>
                </Grid>
                <Grid container item xs={12} sm={4}>
                    <Grid container item alignContent='center' justifyContent='center'>
                        <ImageWIthButtonOverlay height={100}
                                                imageSrc={props.sectionData.paymentImage3}></ImageWIthButtonOverlay>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MFBTAboutTheProprietor