import React, {FunctionComponent, useContext} from 'react'
import {Button, ButtonGroup, Grid, MuiThemeProvider, Typography, useTheme} from '@material-ui/core'
import {ResumeBioSectionType} from "../BlockContentTypes";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import {SanityTransformHwHomePage} from "../../common/sanityIo/Types";
import useThwCommonStyles from "../../common/sanityIo/ThwCommonStyles";
import MediaQueriesContext from "../media-queries-context/MediaQueriesContext";
import ResumeSocialMedia from "./ResumeSocialMedia";
import BusinessCardSubmitEmail from "../transform-hw/pages/BusinessCardSubmitEmail";
import DigitalResumeTheme from "../../theme/DigitalResumeTheme";

interface IProps {
    sectionData: ResumeBioSectionType
    homePage: SanityTransformHwHomePage
}

const ResumeBio: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useThwCommonStyles()
    const theme = useTheme()

    const mediaQueriesContext = useContext(MediaQueriesContext)

    const smDown = mediaQueriesContext.smDown

    return (<MuiThemeProvider theme={DigitalResumeTheme}><Grid container item style={{padding: theme.spacing(4)}} justifyContent='center'
                  className={classes.resumeSection} spacing={3}>
        <Grid item xs={12}>
            <BusinessCardSubmitEmail emailFieldText={'Email Address'}
                                     emailButtonText={'Submit'}
                                     subscribeText={'Want a copy of my resume emailed to you?'}/>
        </Grid>
        <Grid container item md={6} justifyContent='center'>
            <Grid item container>
                <Typography component='div' display='inline' variant='h5' gutterBottom>{props.sectionData.title}
                    <Typography variant='h5'
                                color='primary'
                                display='inline'>.</Typography>
                </Typography>
            </Grid>
            <Grid item>
                <Typography gutterBottom variant='body1'>{props.sectionData.introduction}</Typography>
            </Grid>
            <Grid container item xs={11} sm={12}>
                <Grid item xs={3}>
                    <Typography gutterBottom variant='body1' style={{textTransform: "uppercase"}}>Phone</Typography>
                </Grid>
                <Grid item xs={9}><Typography gutterBottom variant='body1'>{props.homePage.phone}</Typography></Grid>
            </Grid>
            <Grid container item xs={11} sm={12}>
                <Grid item xs={3}><Typography gutterBottom variant='body1'
                                              style={{textTransform: "uppercase"}}>Email</Typography></Grid>
                <Grid item xs={9}><Typography gutterBottom variant='body1'>{props.homePage.email}</Typography></Grid>
            </Grid>
            <Grid container item xs={11} sm={12}>
                <Grid item xs={3}><Typography gutterBottom variant='body1'
                                              style={{textTransform: "uppercase"}}>MAIL</Typography></Grid>
                <Grid item xs={9}><Typography noWrap gutterBottom variant='body1'>{props.homePage.address}</Typography></Grid>
            </Grid>
            <Grid container item xs={11} sm={12}>
                <ResumeSocialMedia homePage={props.homePage} />
            </Grid>
        </Grid>
        <Grid container item md={6} style={{
            backgroundImage: `url(${urlFor(props.sectionData.mainImage ?? "").url()})`,
            backgroundSize: "cover",
            backgroundPosition: "top right",
            backgroundRepeat: "no-repeat",
            minHeight: "350px"
        }}>
        </Grid>
        <Grid container item xs={12} sm={10} spacing={1} style={{marginTop: theme.spacing(2)}}>
            <Grid item container>
                <ButtonGroup fullWidth orientation={smDown ? 'vertical' : "horizontal"}>
                    <Button variant='contained' fullWidth color='primary' href={props.homePage.bookAppointmentLink}><Typography variant="button" align='center'>Meet with Me</Typography></Button>
                    <Button variant='contained' fullWidth color='primary' href={'#CONTACT_ME'}><Typography variant="button" align='center'>Contact
                        Me</Typography></Button>
                    <Button
                        href={props.sectionData.resumeFile?.url + "?dl=James Terrell Singleton - Software Engineer - Resume.pdf"}
                        variant='contained' fullWidth color='primary'><Typography variant="button" align='center' noWrap>
                        Download Resume</Typography></Button>
                    {/*{props.sectionData.cvFile && props.sectionData.cvFile.url.length > 0 && <Button*/}
                    {/*    href={props.sectionData.cvFile?.url + "?dl=James Terrell Singleton - Software Engineer - CV.pdf"}*/}
                    {/*    variant='contained' fullWidth color='primary'><CloudDownload*/}
                    {/*    className={classes.iconOnButton}/><Typography variant="button" align='center'>*/}
                    {/*    CV</Typography></Button>}*/}
                </ButtonGroup>
            </Grid>
        </Grid>
    </Grid></MuiThemeProvider>)
}

export default ResumeBio