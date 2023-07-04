import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Grid, Typography} from '@material-ui/core'
import {MfbtPaymentMethodSectionType} from "../BlockContentTypes";
import MixedFeelingsByTTheme from "../../theme/MixedFeelingsByTTheme";
import ImageWIthButtonOverlay from "../image-with-button-overlay/ImageWithButtonOverlay";
import MediaQueriesContext from "../media-queries-context/MediaQueriesContext";
import bgImage from "./shutterstock_1322210942.jpg";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minHeight: '521px',
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

const MFBTPaymentMethodsSection: FunctionComponent<IProps> = (props) => {
    const classes = useStyles(MixedFeelingsByTTheme)
    const mediaQueriesContext = useContext(MediaQueriesContext)

    return (
        <Grid container item className={classes.root} xs={12}
              style={
                  {
                      paddingBottom: MixedFeelingsByTTheme.spacing(10),
                      paddingTop: MixedFeelingsByTTheme.spacing(10),
                  }}>
            <Grid container item alignContent='center' justifyContent='center'
                  style={{paddingBottom: mediaQueriesContext.xsOnly ? MixedFeelingsByTTheme.spacing(3) : MixedFeelingsByTTheme.spacing(2)}}>
                <Typography color='primary' variant='h4' align='center'>{props.sectionData.title}</Typography>
            </Grid>
            <Grid container item
            >
                <Grid container item alignContent='center' justifyContent='center'>
                    <ImageWIthButtonOverlay height={100}
                                            imageSrc={props.sectionData.mainPaymentImage}></ImageWIthButtonOverlay>
                </Grid>
            </Grid>
            <Grid container spacing={4} item style={{padding: MixedFeelingsByTTheme.spacing(5, 8,0,8)}}
            >
                <Grid container item xs={12} md={4} alignContent='center' justifyContent='center'>
                    <ImageWIthButtonOverlay height={48}
                                            imageSrc={props.sectionData.paymentImage1}></ImageWIthButtonOverlay>
                </Grid>
                <Grid container item xs={12} md={4} alignContent='center' justifyContent='center'>
                    <ImageWIthButtonOverlay height={48}
                                            imageSrc={props.sectionData.paymentImage2}></ImageWIthButtonOverlay>
                </Grid>
                <Grid container item xs={12} md={4} alignContent='center' justifyContent='center'>
                    <ImageWIthButtonOverlay height={48}
                                            imageSrc={props.sectionData.paymentImage3}></ImageWIthButtonOverlay>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MFBTPaymentMethodsSection