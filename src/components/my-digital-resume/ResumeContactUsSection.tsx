import React, {FunctionComponent, useContext, useEffect, useState} from 'react'
import {makeStyles, MuiThemeProvider, Theme} from "@material-ui/core/styles"
import {Grid, TextField, Typography, useTheme, withStyles} from "@material-ui/core";
import DigitalResumeTheme from "../../theme/DigitalResumeTheme";
import {ResumeContactUsSectionType} from "../BlockContentTypes";
import useCustomStyles from "../mackenzies-mind/pages/Styles";
import isEmail from "validator/lib/isEmail";
import LoadingButton from "../loading-button/LoadingButton";
import {useQuery} from "react-query";
import MediaQueriesContext from "../media-queries-context/MediaQueriesContext";
import firebaseAnalyticsClient from "../../utils/firebase/FirebaseAnalyticsClient";
import PageContext from "../page-context/PageContext";
import leadClient from "../transform-hw/pages/under-construction-page/leadClient";
import SnackbarContext from "../modal-context/SnackbarContext";

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
        // color: "white",
    },
    sectionTitle: {
        fontWeight: 800,
        // color: "white !important"
    }
}))

const StyledTextField = withStyles({
    root: {
        // marginTop: "16px",
        minHeight: 90,
        transition: "all 0.3s ease-in-out",
        "& label": {
            // display: "inline-block",
            // fontSize: "16px",
            // fontWeight: 700,
            position: "relative",
            top: "8px",
            // left: "-14px",
        },
        "& legend": {
            maxWidth: "0px"
        },
        "& input": {
            zIndex: 2,
        },
        "& textarea": {
            zIndex: 2
        },
        "& fieldset": {
            // backgroundColor: "#292929",
        },
        "& .MuiOutlinedInput-root": {
            borderColor: `${DigitalResumeTheme.palette.primary.main} !important`,
            borderRadius: 0,
            "&.Mui-focused": {
                borderColor: `${DigitalResumeTheme.palette.primary.main} !important`,
                "&:hover": {
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: `${DigitalResumeTheme.palette.primary.main} !important`
                    },

                },

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
    sectionData: ResumeContactUsSectionType
}
const ResumeContactUsSection: FunctionComponent<ContactUsProps> = (props) => {

    const classes = useStyles(DigitalResumeTheme)

    const snackbarContext = useContext(SnackbarContext)

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
                    snackbarContext.openSnackbar && snackbarContext.openSnackbar(response.message)
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
            return <Typography style={{color: DigitalResumeTheme.palette.success.main}} variant='subtitle1'>Thank you
                for
                your submission!</Typography>
        }
        if (isError) {
            return <Typography style={{color: DigitalResumeTheme.palette.error.main}} variant='subtitle1'>Please Try
                your
                submission again later or contact jgreene@transformHW.org.</Typography>
        }

        return <Typography variant='subtitle1'>&nbsp;</Typography>
    }

    const pageContext = useContext(PageContext)
    const createLead = async (e: any): Promise<any> => {
        firebaseAnalyticsClient.ctaClick('contact-us', 'send-message', pageContext.analyticsId,)
        return refetch()
    }

    const theme = useTheme()

    return (
        <MuiThemeProvider theme={DigitalResumeTheme}>
        <Grid
            container
            item
            style={{
                padding: theme.spacing(4)
            }}
            className={globalClasses.resumeSection}
        >
            <Grid container item spacing={3}>
                <Grid item container sm={4} alignContent='flex-start' spacing={1}>
                    <Grid item>
                        <Typography
                            variant='h6'
                        >{props.sectionData.title}
                            <Typography
                                variant='h6'
                                color='primary'
                                display='inline'
                            >.</Typography>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='body1'>{props.sectionData.introduction}</Typography></Grid>
                </Grid>
                <Grid item container sm={8} spacing={2} justifyContent='space-between'>
                    <Grid container item md={6} alignContent='flex-start'>
                        <Grid container item>
                            <StyledTextField
                                fullWidth
                                id="contact-name-input"
                                value={leadName}
                                onChange={(e) => {
                                    setleadName(e.target.value)
                                }}
                                label={<Typography color='textPrimary'>Name</Typography>}
                                variant="outlined"
                                InputProps={{
                                    // startAdornment: (
                                    //     <InputAdornment position="start">
                                    //         <Typography className={classes.inputAdornmentContainer}>
                                    //             <AccountCircle/>
                                    //         </Typography>
                                    //     </InputAdornment>
                                    // ),
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
                                label={<Typography color='textPrimary'>Email</Typography>}
                                variant="outlined"
                                InputProps={{
                                    // startAdornment: (
                                    //     <InputAdornment position="start">
                                    //         <Typography className={classes.inputAdornmentContainer}>
                                    //             <Email/>
                                    //         </Typography>
                                    //     </InputAdornment>
                                    // ),
                                    className: classes.formInput
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item md={6}>
                        <Grid container item>
                            <StyledTextField
                                fullWidth
                                id="contact-message-input"
                                value={leadMessage}
                                onChange={(e) => {
                                    setLeadMessage(e.target.value)
                                }}
                                label={<Typography color='textPrimary'>Message</Typography>}
                                variant="outlined"
                                multiline
                                minRows="6"
                                InputProps={{
                                    // startAdornment: (
                                    //     <InputAdornment position="start">
                                    //         <Typography
                                    //
                                    //             className={classes.inputAdornmentTextBlockContainer}>
                                    //             <Message/>
                                    //         </Typography>
                                    //     </InputAdornment>
                                    // ),
                                    className: classes.formInput
                                }}
                            />
                        </Grid>
                        <Grid container item justifyContent='flex-end' style={{marginTop: theme.spacing(1)}}>
                            <LoadingButton
                                width={200}
                                isLoading={isLoading || isRefetching}
                                disabled={!!(data || isError || (email && (email.length > 0) && !isEmail(email)))}
                                clickHandler={createLead}
                                color="primary" variant="contained"><Typography>Send
                                Message</Typography></LoadingButton>
                        </Grid>
                    </Grid>


                </Grid>
            </Grid></Grid></MuiThemeProvider>)
}
export default ResumeContactUsSection