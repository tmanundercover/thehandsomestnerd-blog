import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Accordion, AccordionDetails, AccordionSummary, Button, Grid, Icon, Typography} from '@material-ui/core'
import ImageWIthButtonOverlay from "../image-with-button-overlay/ImageWithButtonOverlay";
import {ImageWithButtonOverlayAligmentEnum} from "../image-with-button-overlay/ImageWithButtonOverlayAligmentEnum";
import LoadingButton from "../loading-button/LoadingButton";
import amenitiesIcon from "../transform-hw/amenitiesIcon.png";
import PageContext from "../page-context/PageContext";
import MediaQueriesContext from "../media-queries-context/MediaQueriesContext";
import {MfbtServiceItemNoRefType} from "../BlockContentTypes";
import firebaseAnalyticsClient from "../../utils/firebase/FirebaseAnalyticsClient";
import AmenitiesSection from "../transform-hw/AmenitiesSection";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import {ArrowDropDown, LocalBar} from "@material-ui/icons";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        color: "white"
    },
}))

interface IProps {
    service: MfbtServiceItemNoRefType
    hideLearnMoreButton?: boolean
    hideCtaButton?: boolean
    source?: string
    showAmenities?: boolean
}

const MfbtServiceItem: FunctionComponent<IProps> = (props: IProps) => {
    const pageContext = useContext(PageContext)
    const mediaQueriesContext = useContext(MediaQueriesContext)

    const LearnMoreButton = () => {
        return <Grid item container justifyContent='center'>
            {props.service.learnMoreText && props.service.learnMoreText.length > 0 &&
                <LoadingButton
                    clickHandler={() =>
                        firebaseAnalyticsClient.ctaClick(props.service.slug.current ?? "", props.service.learnMoreText, pageContext.analyticsId,)

                    } color='secondary' href={props.service.learnMoreLink}
                    variant='outlined'><Typography variant='button'
                                                   noWrap>{props.service.learnMoreText}</Typography></LoadingButton>}
        </Grid>
    }
    const targetRef =React.useRef<HTMLDivElement| null>(null);

    const scrollToTarget = () => {
        setTimeout(() => {
            if(targetRef.current){
            targetRef.current.scrollIntoView({block:'start', behavior: 'smooth' })
            // targetRef.current.scroll({top: -100})
            }
        }, 50);
    }
    const [mouseEnter, setMouseEnter] = React.useState<boolean>(false)
    const [imExpanded, setImExpanded] = React.useState<boolean>(false)
    return (
        <Accordion onMouseLeave={()=>setMouseEnter(false)} onMouseEnter={()=>setMouseEnter(true)} style={{width:"100%",
            borderTop:"1px solid white",
            borderLeft:"1px solid white",
            borderRight:"1px solid white"
        }} onChange={(e, isExpanded)=>{
            if(isExpanded){
                scrollToTarget()
            }
            setImExpanded(isExpanded)
        }}>
            <AccordionSummary onMouseEnter={()=>setMouseEnter(true)}>
                <Grid item container ref={targetRef} style={{position:"absolute", top:-100}}></Grid>
                <Grid container item>
                    <Grid container item xs={6} spacing={1} alignItems={'center'} alignContent={ 'flex-start'} wrap='nowrap'>
                        <Grid item>
                            <Icon
                                color={imExpanded || mouseEnter? "primary":"secondary"}
                                style={{
                                    height: imExpanded?"48px": "48px",
                                    width: imExpanded?"48px":"48px",
                                    // backgroundSize: 'contain',
                                    // backgroundPosition: 'center',
                                    // backgroundImage: `url(${urlFor(props.service.imageSrc).width(32).height(32).url()})`,
                                    // backgroundRepeat: "no-repeat",

                                }}
                            ><LocalBar fontSize={imExpanded?"large":"large"
                            }></LocalBar></Icon>
                        </Grid>
                        <Grid item>
                            <Typography variant={'h6'} align='center' color={ mouseEnter?"primary":"secondary"}
                                         noWrap style={{fontWeight:150}}>{props.service.contentTitle}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={6} justifyContent='flex-end' alignContent={'center'}>
                        <ArrowDropDown  color={imExpanded || mouseEnter? "primary":"secondary"}></ArrowDropDown>
                    </Grid>
                </Grid>
            </AccordionSummary>
            <AccordionDetails onMouseEnter={()=>setMouseEnter(true)}>
                <Grid container item spacing={2}>
                    <Grid item container>
                        <ImageWIthButtonOverlay
                            source={props.service.slug.current}
                            // hideCtaButton={prop.hideCtaButton}
                            tooltip={'Click to Learn More'}
                            // learnMoreLink={props.service.learnMoreLink}
                            buttonAlignment={mediaQueriesContext.mdDown ? ImageWithButtonOverlayAligmentEnum.CENTER : ImageWithButtonOverlayAligmentEnum.RIGHT}
                            imageAltText={props.service.imageSrcAltText}
                            variant='contained'
                            imageSrc={props.service.imageSrc} height={352}
                            // ctaButtonText={props.service.ctaButtonText}
                            // ctaButtonLink={!props.hideCtaButton ? props.service.ctaButtonLink : undefined}
                        />
                    </Grid>
                    <Grid item container>
                        <Typography variant='body1' align='center'
                                    style={{
                                        // marginBottom: "24px",
                                        color: "white"
                                    }}>{props.service.contentText}</Typography>
                    </Grid>
                    <Grid item container justifyContent='center'>
                        <Grid item container>
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
                            }></AmenitiesSection>
                        </Grid>
                    </Grid>
                    <Grid item container justifyContent='center' >
                        <Button
                            href={props.service.ctaButtonLink ?? ''}
                            onClick={(e: any) => {
                                props.source && props.service.ctaButtonText &&
                                firebaseAnalyticsClient.ctaClick(props.source, props.service.ctaButtonText, pageContext.analyticsId,)
                            }}
                            variant={'outlined'}
                            color={'primary'}
                            style={{
                                height:"56px",
                                color: "#FAFAFA"
                            }}
                        >
                            <Typography
                                variant='button'>
                                {props.service.ctaButtonText+props.service.ctaButtonLink}
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </AccordionDetails>
        </Accordion>
    )
}

export default MfbtServiceItem