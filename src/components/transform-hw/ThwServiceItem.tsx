import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Grid, Tooltip, Typography, useMediaQuery} from '@material-ui/core'
import ImageWIthButtonOverlay from "../image-with-button-overlay/ImageWithButtonOverlay";
import {ImageWithButtonOverlayAligmentEnum} from "../image-with-button-overlay/ImageWithButtonOverlayAligmentEnum";
import LoadingButton from "../loading-button/LoadingButton";
import {ServiceAmenityType, ThwServiceItemNoRefType, ThwServiceItemType} from "../BlockContentTypes";
import {v4 as uuidv4} from 'uuid'
import mediaQueries from "../../utils/mediaQueries";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import TransformHWTheme from "../../theme/transform-hw/TransformHWTheme";

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
    const classes = useStyles()

    const mdDown = mediaQueries.useMdDown()

    React.useEffect(() => {
    }, [])

    return (<Grid key={uuidv4()} container item xs={12} sm={6} md={4} style={{marginBottom: TransformHWTheme.spacing(4)}}>
        <Grid container item direction='column' justifyContent='space-between' alignContent='center'
              alignItems='center'>
            <Grid container item>
                <Grid item container>
                    <ImageWIthButtonOverlay
                        // hideCtaButton={prop.hideCtaButton}
                        learnMoreLink={props.service.learnMoreLink}
                        buttonAlignment={mdDown ? ImageWithButtonOverlayAligmentEnum.CENTER : ImageWithButtonOverlayAligmentEnum.RIGHT}
                        imageAltText={props.service.imageSrcAltText}
                        variant='contained'
                        imageSrc={props.service.imageSrc} height={352}
                        ctaButtonText={props.service.ctaButtonText}
                        ctaButtonLink={!props.hideCtaButton ? props.service.ctaButtonLink : undefined}
                    />
                </Grid>
                <Grid item container justifyContent='center'
                      style={{marginTop: "16px", marginBottom: "16px"}}>
                    <Typography variant='body2'>{props.service.contentTitle}</Typography>
                </Grid>
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
            {props.showAmenities && <Grid xs={8} item container spacing={6} direction="column"  justifyContent='flex-start'
                                          style={{overflowY: "hidden", overflowX: "scroll", maxHeight: "86px"}}>
                {props.service.serviceAmenities?.map((serviceAmenity: ServiceAmenityType) => {
                    return <Grid
                        item
                        xs={2}
                    ><Tooltip title={
                        <Grid container style={{maxWidth: "150px"}}>
                            <Typography
                                variant='subtitle1'>{serviceAmenity.title}</Typography>
                            <Typography
                                variant='subtitle2'>{serviceAmenity.description}</Typography>
                        </Grid>
                    }>
                        <Grid container item direction='column' justifyContent='center' alignContent='center'
                              alignItems='center' style={{
                            marginBottom: "24px",

                        }} spacing={1}>
                            <Grid key={uuidv4()} item
                                  container xs={2}
                                  style={{
                                      minHeight: "32px",
                                      minWidth: "32px",
                                      backgroundSize: 'contain',
                                      backgroundImage: `url(${urlFor(serviceAmenity.imageSrc).url()})`,
                                      backgroundRepeat: "no-repeat",

                                  }}
                            ></Grid>
                            <Grid item xs={6} container justifyContent='center'>
                                <Typography
                                    variant='subtitle2'
                                    align='center'
                                >{serviceAmenity.title}</Typography>
                            </Grid>
                        </Grid>
                    </Tooltip></Grid>
                })
                }
            </Grid>}
        </Grid>
    </Grid>)
}

export default ThwServiceItem