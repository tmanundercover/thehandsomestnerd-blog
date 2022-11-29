import React, {FunctionComponent, useContext, useRef} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Button, CircularProgress, Grid, Tooltip, Typography} from '@material-ui/core'
import ImageWIthButtonOverlay from "../image-with-button-overlay/ImageWithButtonOverlay";
import {ImageWithButtonOverlayAligmentEnum} from "../image-with-button-overlay/ImageWithButtonOverlayAligmentEnum";
import LoadingButton from "../loading-button/LoadingButton";
import {v4 as uuidv4} from 'uuid'
import amenitiesIcon from "./amenitiesIcon.png";
import MackenziesMindTheme from "../../theme/MackenziesMindTheme";
import AmenitiesSection from "./AmenitiesSection";
import PageContext from "../page-context/PageContext";
import MediaQueriesContext from "../media-queries-context/MediaQueriesContext";
import {ThwServiceItemNoRefType} from "../BlockContentTypes";
import firebaseAnalyticsClient from "../../utils/firebase/FirebaseAnalyticsClient";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {},
}))

interface IProps {
    service: ThwServiceItemNoRefType
    hideLearnMoreButton?: boolean
    hideCtaButton?: boolean
    source?:string
    showAmenities?: boolean
}

const ThwServiceItem: FunctionComponent<IProps> = (props: IProps) => {
    const pageContext = useContext(PageContext)
    const mediaQueriesContext = useContext(MediaQueriesContext)

    const LearnMoreButton = () => {
        return <Grid item container justifyContent='center'>
            {props.service.learnMoreText && props.service.learnMoreText.length > 0 &&
                <LoadingButton
                    clickHandler={()=>
                    firebaseAnalyticsClient.ctaClick(props.service.slug.current ?? "", props.service.learnMoreText, pageContext.analyticsId,)

                } color='secondary' href={props.service.learnMoreLink}
                               variant='outlined'><Typography variant='button'
                                                              noWrap>{props.service.learnMoreText}</Typography></LoadingButton>}
        </Grid>
    }

    return (
        <Grid key={uuidv4()} container item xs={12} sm={12} md={6} style={{marginBottom: MackenziesMindTheme.spacing(4)}}>
            <Grid container item direction='column' justifyContent='space-between' alignContent='center'
                  alignItems='center'>
                <Grid container item direction={"column"}>
                    <Grid item container>
                        <ImageWIthButtonOverlay
                            source={props.service.slug.current}
                            // hideCtaButton={prop.hideCtaButton}
                            tooltip={'Click to Learn More'}
                            learnMoreLink={props.service.learnMoreLink}
                            buttonAlignment={mediaQueriesContext.mdDown ? ImageWithButtonOverlayAligmentEnum.CENTER : ImageWithButtonOverlayAligmentEnum.RIGHT}
                            imageAltText={props.service.imageSrcAltText}
                            variant='contained'
                            imageSrc={props.service.imageSrc} height={352}
                            ctaButtonText={props.service.ctaButtonText}
                            ctaButtonLink={!props.hideCtaButton ? props.service.ctaButtonLink : undefined}
                        />
                    </Grid>
                    <Tooltip title={<Typography variant='subtitle1' style={{fontWeight: "normal"}}>Click to Learn
                        More</Typography>}>
                        <Grid item container justifyContent='center'
                              style={{marginTop: "16px", marginBottom: "16px"}}>
                            <Button variant='text' color='secondary' href={props.service.learnMoreLink}><Typography
                                variant='body2' align='center'>{props.service.contentTitle}</Typography></Button>
                        </Grid>
                    </Tooltip>
                    <Grid item>
                        <Typography variant='body1' align='center'
                                    style={{marginBottom: "48px"}}>{props.service.contentText}</Typography>
                    </Grid>
                </Grid>
                {/*//ts-ignore*/}
                {props.showAmenities &&
                    <AmenitiesSection service={props.service} placeHolder={

                            <Grid container>
                            {<Grid container alignItems='center' direction='column'>
                                <Grid item style={{
                                    height: "32px",
                                    width: "32px",
                                    backgroundSize: "contain",
                                    backgroundImage: `url(${amenitiesIcon})`
                                }}>

                                </Grid>
                                <Grid item>
                                    <Typography variant={"subtitle1"} color={"secondary"}>Amenities</Typography>
                                </Grid>
                            </Grid>}
                        </Grid>
                    }/>}
                {!props.hideLearnMoreButton && <LearnMoreButton />}
            </Grid>
        </Grid>)
}

export default ThwServiceItem