import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Box, Divider, Grid, Typography} from '@material-ui/core'
import {ServiceAmenityType, ThwServiceItemType} from "../../BlockContentTypes";
import mediaQueries from "../../../utils/mediaQueries";
import {urlFor} from "../../block-content-ui/static-pages/cmsStaticPagesClient";
import ResponsiveBullet from "../../ResponsiveBullet";
import MixedFeelingsByTTheme from "../../../theme/MixedFeelingsByTTheme";
import LoadingButton from "../../loading-button/LoadingButton";
import OtherServices from "./OtherServices";
import {v4 as uuidv4} from 'uuid'
import PageContext from "../../page-context/PageContext";
import MediaQueriesContext from "../../media-queries-context/MediaQueriesContext";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        [theme.breakpoints.down('xs')]:{
        padding: theme.spacing(0, 2, 5)
        },
        padding: theme.spacing(0, 4, 6, 6),
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
    const classes = useStyles(MixedFeelingsByTTheme)

    // const {data} = thwClient.useFetchRefsQuery(props.serviceData.serviceAmenities)
    const mediaQueriesContext = useContext(MediaQueriesContext)


    return (

        <Grid container item className={classes.root} xs={12} style={{position: "relative"}}>
            <Grid container item >
                <Grid item container style={{marginTop: MixedFeelingsByTTheme.spacing(76)}}>

                </Grid>
                <Grid container style={{
                    backgroundColor: "red",
                    backgroundSize: 'cover',
                    width: "100vw",
                    height: "600px",
                    position: "absolute",
                    // margin: TransformHWTheme.spacing(0,0,2,0),
                    // margin: TransformHWTheme.spacing(0,0,2,0),
                    left: 0,
                    top: 0,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundImage: `url(${urlFor(props.serviceData.imageSrc).url()})`
                }}>
                    <Grid container item style={{
                        top: 0,
                        left: 0,
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        backgroundColor: "rgba(255,255,255,.3)"
                    }}> </Grid>
                    <Grid item container justifyContent='center'>
                        <Grid item style={{
                            // padding: TransformHWTheme.spacing(0, 0, 0, 4),
                            // margin: TransformHWTheme.spacing(0, 1, 0, 0),
                            width: "100%",
                            position: "absolute",
                            backgroundPosition: "center",
                            top: MixedFeelingsByTTheme.mixins.toolbar.height,
                            // left: TransformHWTheme.spacing(-6),
                            backgroundSize: 'cover',
                            // backgroundImage: `url(${urlFor(props.serviceData.educationPageSlimHeroImage).height(200).url()})`
                        }}>
                            <Grid container alignItems='center' alignContent='center' style={{ padding: MixedFeelingsByTTheme.spacing(4,4,0,4),
                            }}>
                                <Grid item container justifyContent={mediaQueriesContext.smDown ? 'center' : "flex-start"}>
                                    <Typography variant='body1'
                                                style={{fontStyle: "italic"}}>Healing & Wellness</Typography>
                                </Grid>
                                <Grid container item justifyContent={mediaQueriesContext.smDown ? 'center' : "flex-start"}>
                                    <Typography align={mediaQueriesContext.xsOnly ? 'center' : "left"} color='secondary' variant={mediaQueriesContext.xsDown ? 'h3' : "h2"}>{props.serviceData.educationPageTitle}</Typography>

                                </Grid>
                            </Grid>
                            {/*    slim hero section */}
                        </Grid>
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
                            <ResponsiveBullet key={uuidv4()} text={contentSegment} bulletColor='secondary'/>
                        ))
                    }
                </Grid>
                <Grid item container spacing={4} justifyContent='center' direction='column'>
                    <Grid item container justifyContent='center'>
                        <Typography variant='h4'>Amenities</Typography>
                    </Grid>
                    <Grid item container justifyContent='center' alignItems='stretch' alignContent='flex-start'
                          spacing={2}>
                        {props.serviceData.serviceAmenities?.map((serviceAmenity: ServiceAmenityType) => {
                            return <Grid key={uuidv4()} container item xs={6} sm={5} md={4} lg={3} xl={3}
                                         style={{
                                             padding: mediaQueriesContext.xsDown ? MixedFeelingsByTTheme.spacing(4, 0, 4, 0) : MixedFeelingsByTTheme.spacing(6, 0, 6, 0),
                                             margin: mediaQueriesContext.xsDown ? MixedFeelingsByTTheme.spacing(-.2, -.1, .05, -.1,) : MixedFeelingsByTTheme.spacing(-.1, -.1, -.1, -.1,),
                                             maxWidth: "300px",
                                             minWidth: "230px",
                                             border: `1px solid ${MixedFeelingsByTTheme.palette.secondary.main}`,
                                             backgroundColor: MixedFeelingsByTTheme.palette.background.paper
                                         }}>
                                <Grid container item justifyContent='center' alignContent='flex-start' spacing={1}>
                                    <Grid item container xs={12} justifyContent='center'>
                                        <Grid
                                            style={{
                                                height: "64px",
                                                width: "64px",
                                                backgroundSize: 'cover',
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
                                        }} justifyContent='center' alignContent='flex-start'
                                              alignItems='flex-start'>
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
                      style={{margin: MixedFeelingsByTTheme.spacing(8, 0, 6)}}>
                    <LoadingButton
                        width={250}
                        href={props.serviceData.ctaButtonLink}
                        color="secondary" variant="contained">
                        <Typography variant='button' align='center'>Book
                            a {props.serviceData.contentTitle} Appointment</Typography>
                    </LoadingButton>
                </Grid>
                <Grid container item>
                    <Divider style={{width: "100%", margin: MixedFeelingsByTTheme.spacing(4, 0, 2, 0)}}/>
                </Grid>
                <Grid container item>
                        <OtherServices thisServiceSlug={props.serviceData.slug?.current}/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ThwServiceEducationPage