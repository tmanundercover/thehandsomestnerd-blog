import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Button, Grid, MuiThemeProvider, Typography, useTheme} from '@material-ui/core'
import {WebDevAboutUsSectionType} from "../BlockContentTypes";
import WebDevSiteTheme, {elainSansExtraBold, raleway} from "../../theme/WebDevSiteTheme";
import {COLORS} from "../../theme/DigitalResumeTheme";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minHeight: '521px',
        backgroundColor: "#131313",
    },
    contentBullets: {
        marginBottom: theme.spacing(5)
    }
}))


interface IProps {
    sectionData: WebDevAboutUsSectionType
}

const WebDevAboutUsSection: FunctionComponent<IProps> = (props) => {

    const classes = useStyles(WebDevSiteTheme)
    const theme = useTheme()

    return (
        <MuiThemeProvider theme={WebDevSiteTheme}>
            <Grid container item className={classes.root} alignItems='stretch'>
                <Grid
                    item
                    xs={12}
                    md={6}
                    container
                    justifyContent='center'
                    alignContent='flex-start'
                    alignItems='flex-start'
                    style={{
                        overflow: "hidden",
                        minHeight: 500,
                        position: "relative",
                        backgroundColor: "white",
                        backgroundImage: `url(${urlFor(props.sectionData.imageSrc).url()})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                    }}
                />
                <Grid
                    item
                    xs={12}
                    md={6}
                    container
                    spacing={2}
                    justifyContent='center'
                    style={{
                        padding: theme.spacing(8, 0)
                    }}>
                    <Grid container item alignContent='space-around' xs={11} spacing={3}>
                        <Grid item container direction='column' spacing={1}>
                            <Grid item>
                                <Typography variant='subtitle2'
                                            style={{color: COLORS.AQUA}}
                                >{props.sectionData.welcomeMessage}</Typography>
                            </Grid>
                            <Grid item>
                                <Grid item>
                                    <Typography variant='h2'
                                                color='primary'
                                                style={{...elainSansExtraBold}}
                                                display='inline'>{props.sectionData.contentTitle}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container item
                              spacing={1}>
                            {
                                props.sectionData?.contentText?.map((text, index: number) =>
                                    <Grid key={index} item container>
                                        <Typography variant='body1'
                                                    style={{...raleway}}
                                                    color='primary'>{text}</Typography>
                                    </Grid>
                                )}
                        </Grid>
                        <Grid container item>
                            {
                                props.sectionData.ctaButtonText &&
                                <Grid item>
                                    <Button color='primary' variant='outlined'
                                            href={props.sectionData.ctaButtonLink ?? ''}>
                                        <Grid container alignItems='center'>
                                            <Grid item>
                                                <Typography variant='button'
                                                            color='primary'>{props.sectionData.ctaButtonText}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Button>
                                </Grid>
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </MuiThemeProvider>
    )
}

export default WebDevAboutUsSection