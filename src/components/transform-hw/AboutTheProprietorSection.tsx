import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Chip, Grid, Typography} from '@material-ui/core'
import {urlFor} from '../block-content-ui/static-pages/cmsStaticPagesClient'
import {ThwAboutProprietorSectionType} from "../BlockContentTypes";
import TransformHWTheme from "../../theme/transform-hw/TransformHWTheme";
import transformHWTheme from "../../theme/transform-hw/TransformHWTheme";
import ImageWIthButtonOverlay from "../image-with-button-overlay/ImageWithButtonOverlay";
import PsychologyTodaySeal from "./psychology-today-stamp/PsychologyToday";
import LoadingButton from "../loading-button/LoadingButton";
import ResponsiveBullet from "../ResponsiveBullet";
import {FiberManualRecord} from "@material-ui/icons";
import mediaQueries from "../../utils/mediaQueries";
import mask from "./PsychIcon.png"

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minHeight: '521px',
        backgroundColor: theme.palette.background.paper,
        paddingTop: theme.spacing(10),
        // paddingLeft: -theme.spacing(-5),
        paddingBottom: theme.spacing(10)
    },
    contentBullets: {
        // border: "1px solid black"
        marginBottom: theme.spacing(5)
    }
}))


interface IProps {
    sectionData: ThwAboutProprietorSectionType
}

const ProprietorAtAGlance = () => {
    return <Grid item container
                 justifyContent='center'
                 style={{
                     backgroundColor: transformHWTheme.palette.secondary.dark,
                     border: "1px solid white",
                     margin: TransformHWTheme.spacing(0, .1, 0, .1),
                     padding: TransformHWTheme.spacing(2, 0, 2, 0)
                 }}
                 spacing={3}
    >
        <Grid container item xs={11}>
            <Grid item container>
                <Typography variant='h6' color='primary' gutterBottom>Therapeutic Service
                    Sessions</Typography>
            </Grid>
            <Grid item container alignItems='flex-start' alignContent='flex-start'>

                {["Individual, Couples, or Group", "Clinical Supervision", "Solution Focused Training"]
                    .map(term =>
                        <ResponsiveBullet
                            notResponsive
                            bullet={<FiberManualRecord color='primary' style={{fontSize: "8px"}}/>}
                            condensed
                            fontVariant={'subtitle1'}
                            text={term}
                            textColor={'textSecondary'}
                        />
                    )}
            </Grid>
        </Grid>

        <Grid item container xs={11} justifyContent='center'>
            <Grid item container style={{
                WebkitMaskImage: `url(${mask})`,
                maskImage: `url(${mask})`,
                WebkitMaskRepeat: "none",
                maskRepeat: "none",
                height: "100px",
                width: "100px",
                backgroundColor: "white",
                WebkitMaskSize: "cover",
                maskSize: "cover",
                marginBottom: TransformHWTheme.spacing(2)
                // backgroundImage: `url(${PsychIcon})`,
                // backgroundSize: "cover",
                // backgroundRepeat: "no-repeat"
            }}>
                {/*<img alt={"how"} src={PsychIcon} width={300} style={{backgroundColor: "red"}}/>*/}
            </Grid>
            <Grid item container justifyContent='center'>

                <Typography variant='h6' color='primary' gutterBottom align='center'>Modalities</Typography>
            </Grid>
            <Grid item container spacing={1} justifyContent='center'>

                {["Positive Psychology", "Cognitive Behavioral Therapy (CBT)", "Financial Mental Wellness", "Mindfulness", "Solution Focused",
                    "Psychodynamic Therapy", "Humanistic Therapy (Person Centered)", "Integrative/holistic Therapy"].map((modality) =>
                    <Grid item>
                        <Chip variant={'default'} color='primary'
                              label={<Typography variant='inherit' color='secondary'>{modality}</Typography>}/>
                    </Grid>
                )}
            </Grid>
        </Grid>
        <Grid item>
            <LoadingButton href={'/transformative-healing-and-wellness/therapeutic-services'} color={"primary"}
                           variant='outlined'>
                Learn More
            </LoadingButton>
        </Grid>
    </Grid>
}


const AboutTheProprietorSection: FunctionComponent<IProps> = (props) => {
    const classes = useStyles(TransformHWTheme)
    const mdDown = mediaQueries.useSmDown()
    return (
        <Grid container item className={classes.root} xs={11}>
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
                        marginBottom: TransformHWTheme.spacing(3)
                    }} container
                          justifyContent='center'>
                        <ImageWIthButtonOverlay variant='contained' ctaButtonText={props.sectionData.ctaButtonText}
                                                ctaButtonLink={props.sectionData.ctaButtonLink}
                            // toColor={"rgb(19,35,35)"}
                                                imageSrc={props.sectionData.proprietorImage} height={545}
                            // direction={CssFadeToColorDirectionEnum.RIGHT}
                                                isResponsive
                        />
                    </Grid>
                    {!mdDown && <Grid container item><ProprietorAtAGlance/></Grid>}
                </Grid>
                <Grid item xs={12} md={6} lg={7} container direction='column' alignContent='space-between' spacing={2}>
                    <Grid container item style={{minHeight: "549px"}} direction='column' spacing={4}>
                        <Grid container item direction='column'>
                            <Grid item container>
                                <Grid item>

                                    <Typography variant='h4'
                                                color='secondary'
                                                noWrap
                                                style={{fontWeight: 550}}>{props.sectionData.proprietorName}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='h3'
                                                color='secondary' display='inline'
                                                style={{letterSpacing: "-.25em"}}>____</Typography>
                                </Grid>
                            </Grid>
                            <Grid item>

                                <Typography variant='body1' color='textPrimary'
                                            style={{fontStyle: "italic"}}>{props.sectionData.proprietorTitle}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item container spacing={2} justifyContent='flex-end'>
                            <Grid item container>
                                <Typography variant='body2' color='secondary'
                                >{props.sectionData.contentTitle}</Typography>

                            </Grid>
                            {props.sectionData.contentText.map((text) => {
                                return <Grid item container>
                                    <Typography variant='body1'
                                                color='secondary' gutterBottom>{text}</Typography>
                                </Grid>
                            })}
                            <Grid container item direction='column' alignItems='flex-end'>
                                <Grid item>
                                    <img alt={props.sectionData.proprietorSignatureImageAltText}
                                         src={urlFor(props.sectionData.proprietorSignatureImage).height(70).url() ?? ''}/>
                                </Grid>
                                <Grid item>
                                    <PsychologyTodaySeal/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {mdDown && <Grid
                    item
                    xs={12}
                    md={5}
                    lg={4}
                    container
                    justifyContent='center'
                    alignContent='flex-start'
                    alignItems='flex-start'
                    style={{
                        paddingTop: TransformHWTheme.spacing(3),
                        minWidth: "min-content"
                    }}
                ><ProprietorAtAGlance/></Grid>}
            </Grid>
        </Grid>
    )
}

export default AboutTheProprietorSection