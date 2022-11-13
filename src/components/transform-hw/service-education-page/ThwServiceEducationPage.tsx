import React, {FunctionComponent, useState} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Box, Divider, Grid, Typography} from '@material-ui/core'
import {ServiceAmenityType, ThwServiceItemType} from "../../BlockContentTypes";
import cmsClient from "../../block-content-ui/cmsClient";
import mediaQueries from "../../../utils/mediaQueries";
import {urlFor} from "../../block-content-ui/static-pages/cmsStaticPagesClient";
import ResponsiveBullet from "../../ResponsiveBullet";
import TransformHWTheme from "../../../theme/transform-hw/TransformHWTheme";
import LoadingButton from "../../loading-button/LoadingButton";
import {ImageWithButtonOverlayAligmentEnum} from "../../image-with-button-overlay/ImageWithButtonOverlayAligmentEnum";
import ImageWIthButtonOverlay from "../../image-with-button-overlay/ImageWithButtonOverlay";
import OtherServices from "./OtherServices";
import {v4 as uuidv4} from 'uuid'

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: (props: any) => props.xsDown ? theme.spacing(5, 2, 5) : theme.spacing(0, 4, 6, 6),
        minHeight: 'max-content',
        backgroundColor: '#f6f6f6'
    },
    contentBottom: {
        border: `1px solid ${theme.palette.secondary.main}`,
        padding: '20px'
    },
    appBarSpacer: {paddingTop: theme.spacing(12.5)}
}))


interface IProps {
    serviceData: ThwServiceItemType
}

const ThwServiceEducationPage: FunctionComponent<IProps> = (props) => {
    const xsDown = mediaQueries.useXsDown()
    const mdDown = mediaQueries.useMdDown()
    const classes = useStyles({xsDown})

    const [serviceAmenitiesList, setServiceAmenitiesList] = useState<ServiceAmenityType[]>()

    React.useEffect(() => {
        console.log("service data", props.serviceData)
    }, [])
    React.useEffect(() => {
        const realizedServicesAmenities = props.serviceData?.serviceAmenities?.map((serviceAmenity) => {
            return cmsClient.fetchRef(serviceAmenity).then((serviceResp) => {
                return serviceResp
            })
        })

        Promise.all(realizedServicesAmenities).then((response) => {
            setServiceAmenitiesList(response)
        }).catch(console.log)
    }, [props.serviceData])

    return (

        <Grid container item className={classes.root} xs={12}>
            <Grid container item>
                <Grid item container className={classes.appBarSpacer}>

                </Grid>
                <Grid item container style={{position: "relative"}}>

                    <Box style={{
                        padding: TransformHWTheme.spacing(0, 0, 0, 4),
                        margin: TransformHWTheme.spacing(0, 1, 0, 0),
                        width: "100vw",
                        position: "absolute",
                        backgroundPosition: "center",
                        top: TransformHWTheme.mixins.toolbar.height,
                        left: TransformHWTheme.spacing(-6),
                        backgroundSize: 'cover',
                        // backgroundImage: `url(${urlFor(props.serviceData.educationPageSlimHeroImage).height(200).url()})`
                    }}>
                        <Grid style={{
                            maxHeight: "200px",
                            minHeight: "200px",
                        }} container alignItems='center' alignContent='center'>
                            <Grid item container>
                                <Typography variant='body1'
                                            style={{fontStyle: "italic"}}>Healing & Wellness</Typography>
                            </Grid>
                            <Grid item>
                                <Typography color='secondary' variant='h2' align='center'
                                            display='inline'>{props.serviceData.educationPageTitle}</Typography>

                            </Grid>
                        </Grid>
                        {/*    slim hero section */}
                    </Box>
                </Grid>
            </Grid>
            <Grid container item direction='column' spacing={2}>
                <Grid item container style={{marginTop: TransformHWTheme.spacing(25)}}>

                </Grid>
                <Grid item container>
                    <Grid xs={12}
                          style={{
                              backgroundSize: 'contain',
                              width: "100vw",
                              // minHeight: "300px",
                              // maxHeight: "600px",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center",
                              // backgroundImage: `url(${urlFor(props.serviceData.imageSrc).url()})`
                          }}
                          container item>
                        <ImageWIthButtonOverlay
                            learnMoreLink={""}
                            buttonAlignment={mdDown ? ImageWithButtonOverlayAligmentEnum.CENTER : ImageWithButtonOverlayAligmentEnum.RIGHT}
                            imageAltText={"room with plants"}
                            variant='contained'
                            imageSrc={urlFor(props.serviceData.imageSrc).url() ?? ""} height={600}
                            ctaButtonText={props.serviceData.ctaButtonText}
                            ctaButtonLink={props.serviceData.ctaButtonLink}
                        />
                    </Grid>
                </Grid>
                <Grid container item>
                    <Typography color='secondary' variant='h4' align='center'
                                display='inline'>{props.serviceData.contentTitle}</Typography>
                </Grid>
                {
                    props.serviceData.extendedDescriptions?.map((descriptionSegment: string, index: number) => (
                        <Grid item container key={uuidv4()}>
                            <Typography variant='body1'>{descriptionSegment}</Typography>
                        </Grid>
                    ))
                }
                <Grid container item>
                    <Typography color='secondary' variant='h4' align='center'
                                display='inline'>{props.serviceData.benefitsOfServiceTitle}</Typography>
                </Grid>
                {
                    props.serviceData.benefitsOfServiceContents?.map((descriptionSegment: string, index: number) => (
                        <Grid item container key={uuidv4()}>
                            <Typography variant='body1'>{descriptionSegment}</Typography>
                        </Grid>
                    ))
                }
                <Grid item container spacing={2}>
                    {
                        props.serviceData.benefitsOfServiceBullets?.map((contentSegment) => (
                            <ResponsiveBullet key={uuidv4()} text={contentSegment} color='secondary'/>
                        ))
                    }
                </Grid>
                <Grid item container spacing={4} justifyContent='center' direction='column'>
                    <Grid item container justifyContent='center'>
                        <Typography variant='h4'>Room Amenities</Typography>
                    </Grid>
                    <Grid item container justifyContent='center' alignItems='stretch' alignContent='flex-start' spacing={2}>
                        {serviceAmenitiesList?.map((serviceAmenity: ServiceAmenityType) => {
                            return <Grid key={uuidv4()} container item xs={6} sm={5} md={4} lg={3} xl={3}
                                         style={{
                                             padding:xsDown?TransformHWTheme.spacing(4,0,4,0):TransformHWTheme.spacing(6,0,6,0),
                                             margin:xsDown?TransformHWTheme.spacing(-.2,-.1,.05,-.1,):TransformHWTheme.spacing(-.1,-.1,-.1,-.1,),
                                             maxWidth: "300px",
                                             minWidth: "230px",
                                             border: `1px solid ${TransformHWTheme.palette.secondary.main}`,
                                             backgroundColor: TransformHWTheme.palette.background.paper
                                         }}>
                                <Grid container item justifyContent='center' alignContent='flex-start' spacing={1}>
                                    <Grid item container xs={12}>
                                        <Grid
                                              style={{
                                                  height: "42px",
                                                  backgroundSize: 'contain',
                                                  // backgroundColor: "red",
                                                  backgroundRepeat: "no-repeat",
                                                  backgroundPosition: "center",
                                                  backgroundImage: `url(${urlFor(serviceAmenity.imageSrc).url()})`
                                              }}
                                              container>

                                        </Grid>
                                    </Grid>
                                    <Grid container item justifyContent='center'>
                                    <Grid item container justifyContent='center' alignContent='center'
                                          alignItems='center'
                                          style={{
                                              height: "2.1em",
                                              // backgroundColor: "blue"
                                          }}
                                          xs={10}>
                                        <Typography variant='body2' align='center'
                                                    color='secondary'>{serviceAmenity.title}</Typography>
                                    </Grid>
                                    <Grid item xs={10} container style={{
                                            minHeight: "5em",
                                        // backgroundColor: "green"
                                    }} justifyContent='center' alignContent='flex-start' alignItems='flex-start'>
                                        <Typography variant='body1'
                                                    align='center'>{serviceAmenity.description}</Typography>
                                    </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        })}
                    </Grid>
                </Grid>
                <Grid container item alignItems="center" justifyContent="center"
                      style={{margin: TransformHWTheme.spacing(8,0,6)}}>
                    <LoadingButton
                        href={props.serviceData.ctaButtonLink}
                        color="secondary" variant="contained">
                        <Typography variant='button' noWrap>Book
                        a {props.serviceData.contentTitle} Appointment</Typography>
                    </LoadingButton>
                </Grid>
                <Grid container item>
                    <Divider style={{width: "100%", margin: TransformHWTheme.spacing(4, 0, 2, 0)}}/>
                </Grid>
                <Grid container item>
                    <OtherServices thisServiceSlug={props.serviceData.slug?.current}/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ThwServiceEducationPage