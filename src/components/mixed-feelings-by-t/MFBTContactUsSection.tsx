import React, {FunctionComponent, useContext, useEffect, useState} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Grid, IconButton, InputAdornment, Link, TextField, Typography, withStyles} from "@material-ui/core";
import {AccountCircle, Email, Facebook, LinkedIn, Message, Phone, Twitter, YouTube} from "@material-ui/icons";
import MixedFeelingsByTTheme from "../../theme/MixedFeelingsByTTheme";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import {MfbtContactUsSectionType} from "../BlockContentTypes";
import clsx from "clsx";
import useCustomStyles from "../mackenzies-mind/pages/Styles";
import isEmail from "validator/lib/isEmail";
import LoadingButton from "../loading-button/LoadingButton";
import {useQuery} from "react-query";
import {Parallax} from "react-parallax";
import MediaQueriesContext from "../media-queries-context/MediaQueriesContext";
import firebaseAnalyticsClient from "../../utils/firebase/FirebaseAnalyticsClient";
import PageContext from "../page-context/PageContext";
import leadClient from "../transform-hw/pages/under-construction-page/leadClient";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100vw',
        // minHeight: '100vh',
        // backgroundColor: '#1f1f1f',
        color: "#FAFAFA",
    },
    header: {
        fontWeight: 800,
        letterSpacing: '10px',
        lineHeight: 1.4,
        fontSize: '30px',
        textTransform: 'uppercase'
    },
    headerAccent: {
        display: 'inline-block',
        marginLeft: theme.spacing(1)
    },
    formContainer: {
        // margin: 'auto',
        // height: '500px',
        // backgroundColor: '#313131',
        // boxShadow: '11px 10px 38px rgb(0 0 0 / 38%)',
        zIndex: 2
    },
    inputAdornmentContainer: {
        marginTop: theme.spacing(1),
        zIndex: 3
    },
    inputAdornmentTextBlockContainer: {
        position: "relative",
        top: -34,
        zIndex: 3
    },
    formTitle: {
        marginBottom: theme.spacing(1)
    },
    socialMediaContainer: {
        marginTop: theme.spacing(1)
    },
    lhsContainer: {
        // width: "500px",
        // height: "650px"
    },
    formInput: {
        color: "white",
    },
    sectionTitle: {
        fontWeight: 800,
        color: "white !important"
    }
}))

const StyledTextField = withStyles({
    root: {
        transition: "all 0.3s ease-in-out",
        "& label": {
            // display: "inline-block",
            // fontSize: "16px",
            // fontWeight: 700,
            position: "relative",
            top: "8px",
            left: "-14px",
        },
        "& legend": {
            maxWidth: "0px"
        },
        "& input": {
            zIndex: 2
        },
        "& textarea": {
            zIndex: 2
        },
        "& fieldset": {
            backgroundColor: "#292929",
        },
        "& .MuiOutlinedInput-root": {
            borderColor: `${MixedFeelingsByTTheme.palette.primary.main} !important`,
            "&.Mui-focused": {
                borderColor: `${MixedFeelingsByTTheme.palette.primary.main} !important`,
                "&:hover": {
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: `${MixedFeelingsByTTheme.palette.primary.main} !important`
                    }
                }
            },
            "&:hover": {
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: `#212121 !important`
                }
            }
        }
    }
})(TextField);

export type ContactUsProps = {
    sectionData: MfbtContactUsSectionType
}

const MFBTContactUsSection: FunctionComponent<ContactUsProps> = (props) => {
    const classes = useStyles(MixedFeelingsByTTheme)

    const globalClasses = useCustomStyles({})
    const mediaQueriesContext = useContext(MediaQueriesContext)


    const [leadName, setleadName] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [leadPhone, setLeadPhone] = useState<string>()
    const [leadMessage, setLeadMessage] = useState<string>()
    const [alignment, setAlignment] = useState<any>('right')
    const [justifyContent, setJustifyContent] = useState<any>('flex-end')
    useEffect(() => {
        if (mediaQueriesContext.smDown) {
            setAlignment('center')
            setJustifyContent('center')
        } else {
            setAlignment('right')
            setJustifyContent('flex-end')
        }
    }, [mediaQueriesContext.smDown])

    const {isLoading, isError, data, refetch, isRefetching} = useQuery(
        ['submitContactUsForm'],
        () => {
            if (email && email.length > 0 && (!data && !isError)) {
                return leadClient.createLead({
                    email,
                    leadName,
                    leadMessage,
                    leadPhone,
                    source: "Contact Us"
                }).then((response) => {
                    return response.response
                });
            }
            return undefined
        }
    );

    useEffect(() => {
        console.log("data", data)
    }, [data])

    const getHelperText = () => {
        if (data) {
            return <Typography style={{color: MixedFeelingsByTTheme.palette.success.main}} variant='subtitle1'>Thank you for
                your submission!</Typography>
        }
        if (isError) {
            return <Typography style={{color: MixedFeelingsByTTheme.palette.error.main}} variant='subtitle1'>Please Try your
                submission again later or contact jgreene@transformHW.org.</Typography>
        }

        return <Typography variant='subtitle1'>&nbsp;</Typography>
    }

    const pageContext = useContext(PageContext)
    const createLead = async (e: any): Promise<any> => {
        firebaseAnalyticsClient.ctaClick('contact-us', 'send-message', pageContext.analyticsId,)
        return refetch()
    }

    return (
        <Parallax blur={1} bgImage={urlFor(props.sectionData.bgImageSrc).url() ?? undefined} bgImageAlt="the cat"
                  strength={600}
        >
            <Grid container item className={classes.root} style={{
                position: "relative",
                minHeight: "145px",
            }}>
                <Grid container item
                      className={clsx(globalClasses.fullSectionOverlay)}/>
                <Grid spacing={mediaQueriesContext.smDown ? 0 : 4} container item style={{
                    padding: MixedFeelingsByTTheme.spacing(0, mediaQueriesContext.smDown ? 2 : 8, 6)
                }} justifyContent={"center"}>
                    <Grid container item md={6}>
                        <Grid container direction="column" item className={classes.lhsContainer}
                              justifyContent='center' style={{
                            zIndex: 2,
                            paddingTop: "64px",
                        }}>
                            <Grid container item justifyContent={justifyContent}>
                                <Typography variant="h2" align={alignment}> {props.sectionData.lhsTitle}</Typography>
                            </Grid>
                            <Grid container item justifyContent={justifyContent}>
                                <Typography gutterBottom variant='h4'
                                            display='inline'
                                            color='secondary'
                                            style={{
                                                letterSpacing: "-.25em",
                                                paddingBottom: "16px",
                                                lineHeight: .2
                                            }}>________</Typography>
                            </Grid>
                            <Grid container item justifyContent={justifyContent}>
                                <Grid item xs={8}>
                                    <Typography style={{wordWrap: "break-word"}} align={alignment}>
                                        {props.sectionData.lhsContentText}</Typography>
                                </Grid>
                            </Grid>
                            {/*<Grid container item spacing={1}>*/}
                            {/*  <Grid item>*/}
                            {/*    <Typography ><MailOutline/></Typography>*/}
                            {/*  </Grid>*/}
                            {/*  <Grid item>*/}
                            {/*    <Typography className={classes.sectionTitle}>Address:</Typography>*/}
                            {/*    <Typography >{props.address}</Typography>*/}
                            {/*  </Grid>*/}
                            {/*</Grid>*/}
                            {/*<Grid container item spacing={1}>*/}
                            {/*  <Grid item>*/}
                            {/*    <Typography ><PhoneOutlined/></Typography>*/}
                            {/*  </Grid>*/}
                            {/*  <Grid item>*/}
                            {/*    <Typography  className={classes.sectionTitle}>Phone:</Typography>*/}
                            {/*    <Typography >{props.leadPhone}</Typography>*/}
                            {/*  </Grid>*/}
                            {/*</Grid>*/}
                            {/*<Grid item>*/}
                            {/*  <Typography ><EmailOutlined/></Typography>*/}
                            {/*</Grid>*/}
                            {/*    <Grid container item>*/}

                            {/*      <Typography  className={classes.sectionTitle}>Email:</Typography>*/}
                            {/*      <Typography >{props.email}</Typography>*/}
                            {/*    </Grid>*/}
                            <Grid container item>
                                <Grid container item justifyContent={justifyContent}
                                      className={classes.socialMediaContainer}
                                      spacing={1}>
                                    {props.sectionData?.facebook && <Grid item>
                                        <IconButton>
                                            <Typography>
                                                <Link
                                                    href={"http://facebook.com/" + props.sectionData.facebook}><Facebook
                                                    fontSize="large"/></Link>
                                            </Typography>
                                        </IconButton>
                                    </Grid>}
                                    {props.sectionData?.twitter && <Grid item>
                                        <IconButton>

                                        <Typography>
                                            <Link href={"http://twitter.com/" + props.sectionData.twitter}><Twitter
                                                fontSize="large"/></Link>
                                        </Typography>
                                        </IconButton>
                                    </Grid>}
                                    {props.sectionData?.linkedIn && <Grid item>
                                        <Typography>
                                            <Link href={"http://linkedIn.com/" + props.sectionData.linkedIn}><LinkedIn
                                                fontSize="large"/></Link>
                                        </Typography>
                                    </Grid>}
                                    {props.sectionData?.youtube && <Grid item>
                                        <Typography>
                                            <Link href={"http://youtube.com/" + props.sectionData.youtube}><YouTube
                                                fontSize="large"/></Link>
                                        </Typography>
                                    </Grid>}
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid container item xs={12} sm={11} md={6} justifyContent="center">
                        <Grid container item className={classes.formContainer} spacing={1}>
                            {/*<Grid container item justifyContent="center" className={classes.formTitle}>*/}
                            {/*    <Typography variant="h3" className={classes.header}>*/}
                            {/*        Get in*/}
                            {/*        <Typography component="span" variant="h3"*/}
                            {/*                    className={`${classes.header} ${classes.headerAccent}`}*/}
                            {/*                    color="primary">*/}
                            {/*            Touch*/}
                            {/*        </Typography>*/}
                            {/*    </Typography>*/}
                            {/*</Grid>*/}
                            <Grid container item style={{marginTop: MixedFeelingsByTTheme.spacing(8)}}>
                                <StyledTextField
                                    fullWidth
                                    id="contact-name-input"
                                    value={leadName}
                                    onChange={(e) => {
                                        setleadName(e.target.value)
                                    }}
                                    label={<Typography variant='body2' style={{color: "white"}}>Name</Typography>}
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Typography className={classes.inputAdornmentContainer}>
                                                    <AccountCircle/>
                                                </Typography>
                                            </InputAdornment>
                                        ),
                                        className: classes.formInput
                                    }}
                                />
                            </Grid>
                            <Grid container item>
                                <StyledTextField
                                    fullWidth
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                    id="contact-email-input"
                                    label={<Typography variant='body2' style={{color: "white"}}>Email</Typography>}
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Typography className={classes.inputAdornmentContainer}>
                                                    <Email/>
                                                </Typography>
                                            </InputAdornment>
                                        ),
                                        className: classes.formInput
                                    }}
                                />
                            </Grid>
                            <Grid container item>
                                <StyledTextField
                                    fullWidth
                                    value={leadPhone}
                                    onChange={(e) => {
                                        setLeadPhone(e.target.value)
                                    }}
                                    id="contact-phone-input"
                                    label={<Typography variant='body2' style={{color: "white"}}>Phone</Typography>}
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Typography
                                                    className={classes.inputAdornmentContainer}><Phone/></Typography>
                                            </InputAdornment>
                                        ),
                                        className: classes.formInput
                                    }}
                                />
                            </Grid>
                            <Grid container item>
                                <StyledTextField
                                    fullWidth
                                    id="contact-message-input"
                                    value={leadMessage}
                                    onChange={(e) => {
                                        setLeadMessage(e.target.value)
                                    }}
                                    label={<Typography variant='body2' style={{color: "white"}}>Message</Typography>}
                                    variant="outlined"
                                    multiline
                                    minRows="4"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Typography

                                                    className={classes.inputAdornmentTextBlockContainer}>
                                                    <Message/>
                                                </Typography>
                                            </InputAdornment>
                                        ),
                                        className: classes.formInput
                                    }}
                                />
                            </Grid>
                            <Grid container item alignItems="center" justifyContent="center"
                                  style={{marginTop: MixedFeelingsByTTheme.spacing(4)}}>
                                {/*<Button color="primary" variant="contained"><Typography variant="button">Send*/}
                                {/*    Button</Typography></Button>*/}
                                <LoadingButton
                                    width={200}
                                    isLoading={isLoading || isRefetching}
                                    disabled={!!(data || isError || (email && (email.length > 0) && !isEmail(email)))}
                                    clickHandler={createLead}
                                    color="secondary" variant="contained">Send Message</LoadingButton>
                            </Grid>
                            <Grid item container justifyContent='center'>
                                {getHelperText()}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid></Parallax>
    )
}

export default MFBTContactUsSection