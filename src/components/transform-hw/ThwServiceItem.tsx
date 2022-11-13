import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Button, Grid, Link, Tooltip, Typography, useMediaQuery} from '@material-ui/core'
import ImageWIthButtonOverlay from "../image-with-button-overlay/ImageWithButtonOverlay";
import {ImageWithButtonOverlayAligmentEnum} from "../image-with-button-overlay/ImageWithButtonOverlayAligmentEnum";
import LoadingButton from "../loading-button/LoadingButton";
import {ServiceAmenityType, ThwServiceItemNoRefType, ThwServiceItemType} from "../BlockContentTypes";
import {v4 as uuidv4} from 'uuid'
import mediaQueries from "../../utils/mediaQueries";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import TransformHWTheme from "../../theme/transform-hw/TransformHWTheme";
import {useIsOverflow} from "../../utils/useIsOverflow";
import {ArrowLeft, ArrowRight} from "@material-ui/icons";
import SnackbarContext from "../snackbar-context/SnackbarContext";

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

    const [hasOverflow, setHasOverflow] = React.useState<boolean>()




    const mdDown = mediaQueries.useMdDown()
    const smDown = mediaQueries.useSmDown()
    const ref = React.useRef(null);
    const isOverflow = useIsOverflow(ref, (hasOverflow: boolean) => {
        if (hasOverflow) {
            console.log("THis one has overflow")
            setHasOverflow(true)
        } else {
            console.log("THis one does not have overflow")
        }
    });
    const snackbarContext = useContext(SnackbarContext)

   const TooltipWrap = (props:any) =>{
        console.log("mdDown", mdDown)

       const contents = <Grid container style={{maxWidth: "160px"}}>
           <Typography
               variant='subtitle1' color='textSecondary'>{props.title}</Typography>
           <Typography
               variant='subtitle2' color='textSecondary'>{props.description}</Typography>
       </Grid>

       if(!smDown){
           return <Tooltip title={
               contents
           }>{props.children}</Tooltip>
       } else {
           return <Grid item onClick={()=>{
               snackbarContext.openSnackbar && snackbarContext.openSnackbar(<Grid container style={{maxWidth: "160px"}}>
                   {contents}
               </Grid>)
           }
           }>{props.children}</Grid>
       }


   }

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
                                buttonAlignment={mdDown ? ImageWithButtonOverlayAligmentEnum.CENTER : ImageWithButtonOverlayAligmentEnum.RIGHT}
                                imageAltText={props.service.imageSrcAltText}
                                variant='contained'
                                imageSrc={props.service.imageSrc} height={352}
                                ctaButtonText={props.service.ctaButtonText}
                                ctaButtonLink={!props.hideCtaButton ? props.service.ctaButtonLink : undefined}
                            />
                        </Grid>
                    <Tooltip title={<Typography variant='subtitle1' style={{fontWeight:"normal"}}>Click to Learn More</Typography>}>
                            <Grid item container justifyContent='center'
                                  style={{marginTop: "16px", marginBottom: "16px"}}>
                                <Button variant='text' color='secondary' href={props.service.learnMoreLink}><Typography variant='body2' align='center'>{props.service.contentTitle}</Typography></Button>
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
                    <Grid container item justifyContent='center' style={{position: "relative"}} alignContent='center'
                          alignItems='stretch'>
                        {
                            isOverflow &&
                            <Grid
                                // ref={ref}
                                container
                                xs={3}
                                alignItems='center'
                                alignContent='center'
                                item
                                style={{
                                    backgroundImage: 'linear-gradient(to right, whitesmoke, transparent)',
                                    position: "absolute",
                                    left: 16,
                                    height: "100%",
                                    zIndex: "1000",
                                    pointerEvents: 'none'
                                    // opacity: 0
                                }}
                            >
                                <ArrowLeft/>
                            </Grid>
                        }
                        <Grid xs={10} item container>
                            <Grid
                                direction="column"
                                // justifyContent='flex-start'
                                alignContent={isOverflow ? 'flex-start' : 'center'}
                                ref={ref}
                                style={{
                                    paddingTop: TransformHWTheme.spacing(2),
                                    overflowY: "hidden",
                                    overflowX: "scroll",
                                    maxHeight: "120px",
                                    position: "relative",
                                    // backgroundColor: "red"
                                }}
                                container
                                item
                            >
                                {
                                    props.service.serviceAmenities?.map((serviceAmenity: ServiceAmenityType) => {
                                        return <Grid
                                            key={uuidv4()}
                                            item
                                            xs={4}
                                            style={{minWidth: "60px"}}
                                        >
                                            <TooltipWrap title={serviceAmenity.title} description={serviceAmenity.description}>
                                                <Grid container item direction='column' justifyContent='center'
                                                      alignContent='center'
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
                                            </TooltipWrap>
                                        </Grid>
                                    })
                                }
                            </Grid>
                        </Grid>
                        {
                            isOverflow && <Grid container xs={3} item style={{
                                backgroundImage: 'linear-gradient(to right,transparent, whitesmoke)',
                                position: "absolute",
                                right: 16,
                                height: "100%",
                                zIndex: "1000",
                                pointerEvents: 'none'
                                // opacity: 0
                            }}
                                                justifyContent='flex-end' alignContent='center'>
                                <ArrowRight/>
                            </Grid>
                        }
                    </Grid>}
            </Grid>
        </Grid>)
}

export default ThwServiceItem