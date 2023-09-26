import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Button, Grid, MuiThemeProvider, Typography, useTheme} from '@material-ui/core'
import {urlFor} from '../block-content-ui/static-pages/cmsStaticPagesClient'
import {
    ThwHeroContentSectionType,
    WebDevHeroContentSectionType,
    WebDevStatsCounterSectionType
} from "../BlockContentTypes";
import clsx from "clsx";
import useCustomStyles from "../mackenzies-mind/pages/Styles";
import DigitalResumeTheme, {COLORS, rainbow, raleway} from "../../theme/DigitalResumeTheme";
import firebaseAnalyticsClient from "../../utils/firebase/FirebaseAnalyticsClient";
import PageContext from "../page-context/PageContext";
import {Speaker} from "@material-ui/icons";
import WebDevSiteTheme, {elainSansExtraBold} from "../../theme/WebDevSiteTheme";

interface IProps {
    sectionData: WebDevStatsCounterSectionType
}

interface CSSProps {
    heroBaseImageUrl: string,
}

export const useStyles = makeStyles((theme: Theme) => ({
    marketingBackground: {
        backgroundColor: COLORS.AQUA,
        minHeight: '100px',
        position: "relative",
        padding: theme.spacing(3,8)
    },
    contentSection: {
        marginTop: '16px',
        padding: theme.spacing(8),
        backgroundColor: 'transparent',
    },
    contentBullets: {
        // borderLeft: `4px solid ${theme.palette.primary.main}`,
        // paddingLeft: '26px',
    }
}))

const WebDevStatsCounterSection: FunctionComponent<IProps> = (props) => {
    const classes = useStyles(WebDevSiteTheme)
    return (
        <MuiThemeProvider theme={WebDevSiteTheme}>
            <Grid container item className={classes.marketingBackground}>
                <Grid container spacing={3}>
                    {
                        props.sectionData?.stats?.map((particularStat, index:number)=><Grid key={index} item sm={6} md={3} container spacing={1}  alignItems='center' alignContent='center'>
                            <Grid item xs={4}><Typography variant='h4'
                                                          align='right'
                                                   color={'textPrimary'}
                                                   style={{...elainSansExtraBold}}>{particularStat.statValue}</Typography></Grid>
                            <Grid item xs={8}><Typography variant='body1'
                                                   color={'textPrimary'}
                                                   style={{...elainSansExtraBold}}>{particularStat.statContent}</Typography></Grid>
                        </Grid>)
                    }
                </Grid>
            </Grid>
        </MuiThemeProvider>
    )
}

export default WebDevStatsCounterSection