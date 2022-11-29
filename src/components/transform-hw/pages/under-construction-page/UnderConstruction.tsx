import React, {FunctionComponent, useEffect, useState} from 'react'
import {Grid, Typography, useMediaQuery, useTheme} from '@material-ui/core'
import useCustomStyles from "../../../mackenzies-mind/pages/Styles";
import {COLORS} from "../../../../theme/MackenziesMindTheme";
import CountdownToLaunch from "./CountdownToLaunch";
import therapistHoldingHand from "./assets/therapistHoldingHand.jpg"
import clsx from "clsx";
import CssFadeToColor from "../../../css-fade-to-color/CssFadeToColor";
import {SanityRef, SanityUnderConstructionPageType} from "../../../../common/sanityIo/Types";
import cmsClient from "../../../block-content-ui/cmsClient";
import SubmitEmail from "../SubmitEmail";


interface IProps {
    email?: string
    underConstructionPageRef: SanityRef
}

const UnderConstruction: FunctionComponent<IProps> = (props) => {
    const classes = useCustomStyles({bgImage: therapistHoldingHand})
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const xsDown = useMediaQuery(theme.breakpoints.down('xs'))

    const [releaseDate, setReleaseDate] = useState<Date>()
    const [cmsPageData, setCmsPageData] = useState<SanityUnderConstructionPageType>()

    React.useEffect(() => {
        const getPage = async () => {
            return cmsClient.fetchRef(props.underConstructionPageRef).then((pageResponse) => {
                return pageResponse
            })
        }

        getPage().then((page) => {
            setCmsPageData(page)
        })
    }, [props.underConstructionPageRef])

    useEffect(() => {
        let releaseDateHolder = new Date(Date.now() + 2000000000)
        if (cmsPageData && cmsPageData.releaseDate) {
            releaseDateHolder = cmsPageData.releaseDate
        }
        setReleaseDate(releaseDateHolder)

    }, [cmsPageData])

    return (
        <Grid container className={clsx(xsDown ? classes.fullscreenPlus : classes.fullscreen, classes.fullScreenImage)}
              style={{position: "relative"}}>
            <CssFadeToColor
                toColor='rgba(0,0,90,.9)'
                isResponsive/>
            <Grid container item
                  className={clsx(xsDown ? classes.fullscreenPlus : classes.fullscreen, classes.fullscreenOverlay)}>
            </Grid>
            <Grid item container className={clsx(classes.fullscreen)}
                  style={{
                      position: 'absolute',
                      paddingBottom: smDown ? 0 : theme.spacing(10)
                  }}
                  justifyContent='center' alignItems='center'>
                <Grid container item xs={11} className={classes.spacer} justifyContent='center'>
                    <Typography variant={smDown ? 'h2' : 'h1'} align='center'
                                color='textSecondary'>{cmsPageData?.contentTitle}</Typography>
                </Grid>
                <Grid xs={10} container item justifyContent='center' className={classes.spacer}>
                    <CountdownToLaunch launchDate={releaseDate ?? new Date(Date.now() + 2000000000)}/>
                </Grid>
                <Grid container item justifyContent='center' style={{marginTop: theme.spacing(2.5)}}>
                    <Grid item xs={10} md={8}>
                        <Typography variant='body1' color='textSecondary'
                                    align='center'>{cmsPageData?.contentText}</Typography>

                    </Grid>
                </Grid>
                <Grid container item justifyContent='center' style={{marginTop: theme.spacing(5.75)}}>
                    <Grid container item justifyContent='center' style={{marginTop: theme.spacing(5.75)}}>
                        <SubmitEmail emailFieldText={cmsPageData?.emailFieldText ?? ""}
                                     emailButtonText={cmsPageData?.emailButtonText ?? ""}
                                     subscribeText={cmsPageData?.subscribeText ?? ""}/>
                    </Grid>
                    <Grid item container style={{
                        backgroundColor: xsDown ? theme.palette.background.default : "transparent",
                        position: 'static',
                        bottom: 0,
                        height: "84px"
                    }}>
                        <Grid item xs={12} container justifyContent='center' direction='column' alignItems='center'>
                            {
                                cmsPageData?.footerTextLines.map(
                                    (footerLine, index) => <Grid item key={index}><Typography align='center'
                                                                                              color='textSecondary'
                                                                                              variant='body1'>
                                        {footerLine}
                                    </Typography></Grid>)
                            }
                        </Grid>
                        <Grid item container justifyContent='center' style={{color: COLORS.DARK_GRAY}}>
                            <Typography color='inherit' variant='h6'>{props.email}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default UnderConstruction