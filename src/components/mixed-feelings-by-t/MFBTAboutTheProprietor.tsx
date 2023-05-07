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

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minHeight: '521px',
        backgroundColor: theme.palette.background.paper,
        // paddingLeft: -theme.spacing(-5),
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
                 style={{
                     backgroundColor: MixedFeelingsByTTheme.palette.secondary.dark,
                     border: mediaQueriesContext.smDown ? "0px solid transparent" : "1px solid white",
                     margin: mediaQueriesContext.smDown ? MixedFeelingsByTTheme.spacing(0, 0, 0, 0) : MixedFeelingsByTTheme.spacing(2, 0, 0, 0),
                     padding: MixedFeelingsByTTheme.spacing(2, 0, mediaQueriesContext.smDown ? 6 : 2, 0)
                 }}
                 spacing={6}
                 xs={12}
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

    return (<Grid container item>
            <Grid container item className={classes.root} xs={mediaQueriesContext.xsOnly ? 12 : 11}
                  style={mediaQueriesContext.xsOnly ? {paddingBottom: 0, paddingTop: 0} : {
                      paddingBottom: MixedFeelingsByTTheme.spacing(10),
                      paddingTop: MixedFeelingsByTTheme.spacing(10),
                  }}>
                <Grid container item justifyContent='space-around'
                >
                    <Grid
                        item
                        xs={12}
                        md={5}
                        lg={4}
                        container
                        justifyContent='center'
                        alignContent='flex-start'
                        alignItems='flex-start'
                        style={{
                            minWidth: "min-content"
                        }}
                    >
                        <Grid item style={{
                            overflow: "hidden",
                            position: "relative",
                            backgroundColor: "white",
                            marginBottom: MixedFeelingsByTTheme.spacing(3)
                        }} container
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
                    <Grid item xs={12} md={6} lg={7} container direction='column' alignContent='space-between'
                          spacing={2}>
                        <Grid container item style={{minHeight: "549px"}} direction='column' spacing={4}>
                            <Grid container item direction='column'>
                                <Grid item container>
                                    <Grid item>

                                        <Typography variant='h4'
                                                    color='primary'
                                                    noWrap
                                                    style={{fontWeight: 550}}>{props.sectionData.proprietorName}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item>

                                    <Typography variant='body1'
                                                style={{
                                                    fontStyle: "italic",
                                                    color: "white"
                                                }}>{props.sectionData.proprietorTitle}</Typography>
                                </Grid>
                            </Grid>
                            <Grid item container spacing={2} justifyContent='flex-end'>
                                <Grid item container>
                                    <Typography variant='body2' color='primary'
                                    >{props.sectionData.contentTitle}</Typography>

                                </Grid>
                                {props.sectionData.contentText.map((text, index: number) => {
                                    return <Grid item container key={index}>
                                        <Typography variant='body1'
                                                    gutterBottom style={{color: "white"}}>{text}</Typography>
                                    </Grid>
                                })}
                            </Grid>
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
            </Grid>
            <Grid container item style={{backgroundColor: "black", padding: MixedFeelingsByTTheme.spacing(2, 4)}} justifyContent={'center'}>
                <Grid container item xs={12} md={4} justifyContent='center' alignContent='center'
                      style={{ minHeight: 200}} direction='column'>
                        <ImageWIthButtonOverlay variant='contained'
                            // toColor={"rgb(19,35,35)"}
                                                imageSrc={props.sectionData.favDrinkImage2} height={170}
                            // direction={CssFadeToColorDirectionEnum.RIGHT}
                                                isResponsive
                        />
                </Grid>
                <Grid container item xs={12} md={8}>
                    <Grid item>
                        <Typography variant={"h6"}
                                    style={{color: "white"}}>{props.sectionData.favDrinkSectionTitle}</Typography>
                        <Typography variant={"h6"} color='primary'>{props.sectionData.favDrinkTitle}</Typography>
                        <Typography variant={"body1"}
                                    style={{color: "white"}}>{props.sectionData.favDrinkDescription}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MFBTAboutTheProprietor