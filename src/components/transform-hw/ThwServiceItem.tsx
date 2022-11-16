import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Button, Grid, Tooltip, Typography} from '@material-ui/core'
import ImageWIthButtonOverlay from "../image-with-button-overlay/ImageWithButtonOverlay";
import {ImageWithButtonOverlayAligmentEnum} from "../image-with-button-overlay/ImageWithButtonOverlayAligmentEnum";
import LoadingButton from "../loading-button/LoadingButton";
import {v4 as uuidv4} from 'uuid'
import mediaQueries from "../../utils/mediaQueries";
import TransformHWTheme from "../../theme/transform-hw/TransformHWTheme";
import AmenitiesSection from "./AmenitiesSection";
import PageContext from "../page-context/PageContext";
import MediaQueriesContext from "../media-queries-context/MediaQueriesContext";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {},
}))

interface IProps {
    service: any
    hideLearnMoreButton?: boolean
    hideCtaButton?: boolean
    showAmenities?: boolean
}

const ThwServiceItem: FunctionComponent<IProps> = (props: IProps) => {
    const pageContext = useContext(PageContext)
    const mediaQueriesContext = useContext(MediaQueriesContext)

    return (
        <Grid key={uuidv4()} container item xs={12} sm={6} md={4} style={{marginBottom: TransformHWTheme.spacing(4)}}>
            <Grid container item direction='column' justifyContent='space-between' alignContent='center'
                  alignItems='center'>
                <Grid container item>

                    <Grid item container>
                        <ImageWIthButtonOverlay
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
                {!props.hideLearnMoreButton && <Grid item container justifyContent='center'>
                    {props.service.learnMoreText && props.service.learnMoreText.length > 0 &&
                        <LoadingButton color='secondary' href={props.service.learnMoreLink}
                                       variant='outlined'><Typography variant='button'
                                                                      noWrap>{props.service.learnMoreText}</Typography></LoadingButton>}
                </Grid>}
                {/*//ts-ignore*/}
                {props.showAmenities &&
                    <AmenitiesSection service={props.service}/>}
            </Grid>
        </Grid>)
}

export default ThwServiceItem