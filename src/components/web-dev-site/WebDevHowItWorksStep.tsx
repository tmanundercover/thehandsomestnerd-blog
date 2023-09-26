import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, MuiThemeProvider, Theme} from "@material-ui/core/styles"
import {Button, Grid, Typography} from '@material-ui/core'
import {v4 as uuidv4} from 'uuid'
import WebDevSiteTheme, {elainSansExtraBold, raleway} from "../../theme/WebDevSiteTheme";
import PageContext from "../page-context/PageContext";
import {HowItWorksStepNoRefType} from "../BlockContentTypes";
import firebaseAnalyticsClient from "../../utils/firebase/FirebaseAnalyticsClient";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(4)
    },
}))

interface IProps {
    step: HowItWorksStepNoRefType
    hideLearnMoreButton?: boolean
    hideCtaButton?: boolean
    source?: string
    showAmenities?: boolean
    index?: number
}

const COLOR_ROTATION = ["#cd3647", "#343656", "#333784"]

const WebDevHowItWorksStep: FunctionComponent<IProps> = (props: IProps) => {
    const pageContext = useContext(PageContext)
    const classes = useStyles(WebDevSiteTheme)

    const LearnMoreButton = () => {
        return <Grid item container sm={8}>
            {props.step.learnMoreText && props.step?.learnMoreText.length > 0 &&
                <Button fullWidth
                        onClick={() =>
                            firebaseAnalyticsClient.ctaClick(props.step.slug?.current ?? "", props.step.learnMoreText, pageContext.analyticsId,)

                        } color='primary' href={props.step.learnMoreLink}
                        variant='outlined'><Typography variant='button'
                                                        noWrap>{props.step.learnMoreText}</Typography></Button>}
        </Grid>
    }

    return (
        <MuiThemeProvider theme={WebDevSiteTheme}>
            <Grid className={classes.root} key={uuidv4()} container item xs={12} sm={12} md={6}
                  style={{backgroundColor: COLOR_ROTATION[(props.index ?? 0) % 3]}}>
                <Grid container item direction='column'>
                    <Grid container item spacing={2}>
                        <Grid container item alignContent='center' justifyContent='space-between' alignItems='center'>
                            <Grid item xs={6}><Typography
                                variant='h4' style={{...elainSansExtraBold}}
                                color='primary'>{props.step.title}</Typography></Grid>
                            <Grid item>
                                <Grid item xs={6}><Typography
                                    variant='h1' style={{...elainSansExtraBold, color: "rgba(255,255,255,.3)"}}
                                    color='primary'>{(props.index??0)+1}</Typography></Grid>
                            </Grid>
                        </Grid>
                        <Grid container item>
                            <Typography variant='body1'
                                        color='primary'
                                        style={{...raleway}}
                            >{props.step.contentText}</Typography>
                        </Grid>
                        <Grid container item>
                            {!props.hideLearnMoreButton && <LearnMoreButton/>}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid></MuiThemeProvider>)
}

export default WebDevHowItWorksStep