import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Chip, Grid, Typography} from '@material-ui/core'
import {urlFor} from '../block-content-ui/static-pages/cmsStaticPagesClient'
import {
    MfbtAboutProprietorSectionType,
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
import bgImage from "./bartender-tools-seamless.png"
import clsx from "clsx";
import useCustomStyles from "../mackenzies-mind/pages/Styles";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        // minHeight: '521px',
        zIndex: 100,
        backgroundColor: "black",
        position: "relative",
        paddingBottom: 32
        // paddingLeft: -theme.spacing(-5),
    },
    seamlessBackground: {
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "repeat",
        // backgroundSize: "650px",
    },
    contentBullets: {
        // border: "1px solid black"
        marginBottom: theme.spacing(5)
    }
}))


interface IProps {
    sectionData: MfbtAboutProprietorSectionType
}

const ProprietorAtAGlance = (props: { sectionData: ProprietorAtAGlanceType, source: string }) => {
    const mediaQueriesContext = useContext(MediaQueriesContext)
    const pageContext = useContext(PageContext)
    return <Grid item container
                 justifyContent='center'
        style={mediaQueriesContext.xsOnly?{
            // backgroundColor: MixedFeelingsByTTheme.palette.secondary.dark,
            // border: mediaQueriesContext.smDown ? "0px solid transparent" : "1px solid white",
            // margin: mediaQueriesContext.smDown ? MixedFeelingsByTTheme.spacing(0, 0, 0, 0) : MixedFeelingsByTTheme.spacing(2, 0, 0, 0),
            paddingTop: MixedFeelingsByTTheme.spacing(0)
        }:{
            paddingTop: MixedFeelingsByTTheme.spacing(4)

        }}
        // spacing={6}
        //          xs={12}
    >
        {/*<Grid container item xs={11}>*/}
        {/*    <Grid item container justifyContent='center'>*/}
        {/*        <Typography variant='body1' color='primary' gutterBottom>{props.sectionData.serviceName}</Typography>*/}
        {/*    </Grid>*/}
        {/*    <Grid item container>*/}
        {/*        <Typography variant='h6' color='primary' gutterBottom>{props.sectionData.serviceTitle}</Typography>*/}
        {/*    </Grid>*/}
        {/*    <Grid item container alignItems='flex-start' alignContent='flex-start'>*/}

        {/*        {props.sectionData.sessionList.map((term:string, index:number) =>*/}
        {/*                <ResponsiveBullet*/}
        {/*                    key={index}*/}
        {/*                    notResponsive*/}
        {/*                    bullet={<FiberManualRecord color='primary' style={{fontSize: "8px"}}/>}*/}
        {/*                    condensed*/}
        {/*                    fontVariant={'subtitle1'}*/}
        {/*                    text={term}*/}
        {/*                    textColor={'textSecondary'}*/}
        {/*                />*/}
        {/*            )}*/}
        {/*    </Grid>*/}
        {/*</Grid>*/}

        {/*<Grid item container xs={11} justifyContent='center' style={{*/}
        {/*    // marginBottom: TransformHWTheme.spacing(5)*/}
        {/*}}>*/}
        {/*    <ColoredPng maskUrl={urlFor(props.sectionData.dividerImage).url()??""} color={"white"} />*/}
        {/*    <Grid item container justifyContent='center'>*/}

        {/*        <Typography variant='h6' color='primary' gutterBottom align='center'>{props.sectionData.amenitiesSectionTitle}</Typography>*/}
        {/*    </Grid>*/}
        {/*    <Grid item container spacing={1} justifyContent='center'>*/}

        {/*        {props.sectionData.amenities.map((modality,index) =>*/}
        {/*            <Grid item key={index}>*/}
        {/*                <Chip variant={'default'} color='primary'*/}
        {/*                      label={<Typography variant='inherit' color='secondary'>{modality}</Typography>}/>*/}
        {/*            </Grid>*/}
        {/*        )}*/}
        {/*    </Grid>*/}
        {/*</Grid>*/}
        <Grid item>
            <LoadingButton
                clickHandler={(e: any) => {
                    firebaseAnalyticsClient.ctaClick(props.source, props.sectionData.ctaButtonText, pageContext.analyticsId,)
                }}
                href={props.sectionData.ctaButtonLink}
                color={"primary"}
                variant='outlined'>
                {props.sectionData.ctaButtonText}
            </LoadingButton>
        </Grid>
    </Grid>
}


const MFBTAboutTheProprietor: FunctionComponent<IProps> = (props) => {
    const classes = useStyles(MixedFeelingsByTTheme)
    const mediaQueriesContext = useContext(MediaQueriesContext)
    const globalClasses = useCustomStyles({})

    return (<Grid  container item className={clsx([classes.seamlessBackground, classes.root])}>
            <Grid container item style={{position: 'absolute', top:0}}
                  className={clsx(globalClasses.fullSectionOverlayDark)}>
            </Grid>
            <Grid container item spacing={mediaQueriesContext.xsOnly ? 0 : 2} style={{zIndex: 100}}>
                <Grid container item spacing={2} justifyContent='center'>
                    <Grid
                        item
                        xs={12}
                        md={5}
                        lg={4}
                        container
                        justifyContent='center'
                        // spacing={2}
                    >
                        <Grid item
                              style={{
                                  overflow: "hidden",
                                  // position: "relative",
                                  // marginBottom: MixedFeelingsByTTheme.spacing(3)
                              }}
                              container
                              sm={8} md={12}
                              justifyContent='center'>
                            <ImageWIthButtonOverlay variant='contained' ctaButtonText={props.sectionData.ctaButtonText}
                                                    ctaButtonLink={props.sectionData.ctaButtonLink}
                                // toColor={"rgb(19,35,35)"}
                                                    imageSrc={props.sectionData.proprietorImage} height={545}
                                // direction={CssFadeToColorDirectionEnum.RIGHT}
                                                    isResponsive
                            />
                        </Grid>
                        {/*{!mediaQueriesContext.smDown && <Grid container item><ProprietorAtAGlance source={'about-the-proprietor'} sectionData={props.sectionData.proprietorServices}/></Grid>}*/}
                    </Grid>
                    <Grid item xs={11} md={7} lg={8} container spacing={1}
                    >
                        <Grid item>
                            <Typography variant='h4'
                                        color='primary'
                                        noWrap
                                        style={{fontWeight: 550}}>{props.sectionData.proprietorName}</Typography>
                            <Typography variant='body1'
                                        style={{
                                            fontStyle: "italic",
                                            color: "white"
                                        }}>{props.sectionData.proprietorTitle}</Typography>
                        </Grid>
                        <Grid item container justifyContent='flex-end'>
                            <Grid item container>
                                <Typography variant='body2' color='primary'
                                >{props.sectionData.contentTitle}</Typography>

                            </Grid>
                            {props.sectionData.contentText.map((text, index: number) => {
                                return <Grid item container key={"text" + index}>
                                    <Typography variant='body1'
                                                gutterBottom style={{color: "white"}}>{text}</Typography>
                                </Grid>
                            })}
                        </Grid>
                    </Grid>
                    {/*{mediaQueriesContext.smDown && <Grid*/}
                    {/*    item*/}
                    {/*    xs={12}*/}
                    {/*    sm={12}*/}
                    {/*    md={5}*/}
                    {/*    lg={4}*/}
                    {/*    container*/}
                    {/*    justifyContent='center'*/}
                    {/*    alignContent='flex-start'*/}
                    {/*    alignItems='flex-start'*/}
                    {/*    style={{*/}
                    {/*        paddingTop: MixedFeelingsByTTheme.spacing(3),*/}
                    {/*        minWidth: "min-content"*/}
                    {/*    }}*/}
                    {/*><ProprietorAtAGlance source={'about-the-proprietor'} sectionData={props.sectionData.proprietorServices}/></Grid>}*/}
                </Grid>
                <Grid container item
                      style={{zIndex: 100,}} justifyContent='center'>
                    <Grid container item xs={11} md={8}>
                        <Grid item xs={12}>
                            <Typography variant={"h6"}
                                        color={'primary'}>{props.sectionData.favDrinkSectionTitle}</Typography>
                            <Typography variant={"h6"} style={{color:"white"}}>{props.sectionData.favDrinkTitle}</Typography>
                        </Grid>
                        <Grid container item xs={12} md={12} xl={4} justifyContent={'center'} alignContent='center'
                        >
                            <ImageWIthButtonOverlay variant='contained'
                                // toColor={"rgb(19,35,35)"}
                                                    imageSrc={props.sectionData.favDrinkImage2} height={170}
                                // direction={CssFadeToColorDirectionEnum.RIGHT}
                                                    isResponsive
                            />
                        </Grid>
                        <Grid item>
                            <Typography variant={"body1"}
                                        style={{color: "white"}}>{props.sectionData.favDrinkDescription}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MFBTAboutTheProprietor