import React, {FunctionComponent, useEffect, useState} from 'react'
import {Grid, Typography, useMediaQuery, useTheme} from '@material-ui/core'
import useCustomStyles from "../../../mackenzies-mind/pages/Styles";
import MixedFeelingsByTTheme, {COLORS, raleway, ralewayBold} from "../../../../theme/MixedFeelingsByTTheme";
import CountdownToLaunch from "./CountdownToLaunch";
import clsx from "clsx";
import CssFadeToColor from "../../../css-fade-to-color/CssFadeToColor";
import {SanityRef, SanityUnderConstructionPageType} from "../../../../common/sanityIo/Types";
import cmsClient from "../../../block-content-ui/cmsClient";
import SubmitEmail from "../SubmitEmail";
import Logo from "../../logo/Logo";
import {urlFor} from "../../../block-content-ui/static-pages/cmsStaticPagesClient";
import MailTo from "../../../mail-to/MailTo";

interface IProps {
    email?: string
    underConstructionPageRef: SanityRef
}

const UnderConstruction: FunctionComponent<IProps> = (props) => {
    const [cmsPageData, setCmsPageData] = useState<SanityUnderConstructionPageType>()
    const classes = useCustomStyles({bgImage: urlFor(cmsPageData?.bgImage ?? "").url()})
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const xsDown = useMediaQuery(theme.breakpoints.down('xs'))

    const [releaseDate, setReleaseDate] = useState<Date>()

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
                toColor={COLORS.LIGHTGRAY}
                isResponsive/>
            <Grid container item
                  className={clsx(xsDown ? classes.fullscreenPlus : classes.fullscreen, classes.fullscreenWhiteOverlay)}>
            </Grid>
            <Grid item container className={clsx(classes.fullscreen)}
                  style={{
                      position: 'absolute',
                      paddingBottom: smDown ? 0 : theme.spacing(10)
                  }}
                  justifyContent='center' alignItems='center'>
                {cmsPageData?.contentTitle && cmsPageData?.contentTitle.length > 0 && <Grid container item xs={11} className={classes.spacer} justifyContent='center'>
                    <Typography variant={smDown ? 'h2' : 'h1'} align='center'
                                color='textSecondary'>{cmsPageData?.contentTitle}</Typography>
                </Grid>}
                {<Grid container item xs={11} className={classes.spacer} justifyContent='center' style={{marginBottom: smDown? theme.spacing(15):0}}>
                    <Logo isCenter={smDown} height={250}/>
                </Grid>}
                <Grid xs={10} container item justifyContent='center' className={classes.spacer}>
                    <CountdownToLaunch launchDate={releaseDate ?? new Date(Date.now() + 2000000000)}/>
                </Grid>
                <Grid container item sm={10} className={classes.transparentBacking} style={{paddingBottom: theme.spacing(5), marginBottom: xsDown? 0: theme.spacing(1)}}>
                    <Grid container item justifyContent='center' style={{marginTop: theme.spacing(2.5)}}>
                        <Grid item xs={11} sm={10}>
                            <Typography variant='body1'
                                        align='center' style={{...raleway, color: "black"}}>{cmsPageData?.contentText}</Typography>

                        </Grid>
                    </Grid>
                    <Grid container item justifyContent='center'>
                        <Grid container item justifyContent='center' style={{marginTop: theme.spacing(5.75)}}>
                            <SubmitEmail emailFieldText={cmsPageData?.emailFieldText ?? ""}
                                         emailButtonText={cmsPageData?.emailButtonText ?? ""}
                                         subscribeText={cmsPageData?.subscribeText ?? ""}/>
                        </Grid>
                        <Grid item container style={{
                            // backgroundColor: xsDown ? theme.palette.background.default : "transparent",
                            // position: 'static',
                            bottom: 0,
                            // height: "84px"
                        }}>
                            <Grid item container justifyContent='center'>
                                <Grid item>

                                    <MailTo color={MixedFeelingsByTTheme.palette.primary.main} email={props.email??""} subject={"Information Request"} body={""}>
                                        {props.email}
                                    </MailTo>
                                </Grid>
                                {/*<Typography color='primary' variant='h6'>{props.email}</Typography>*/}
                            </Grid>
                            <Grid item sm={12} container justifyContent='center' direction='column' alignItems='center'>
                                {
                                    cmsPageData?.footerTextLines?.map(
                                        (footerLine, index) => <Grid item key={index}><Typography align='center'
                                                                                                  variant='subtitle1' style={{...ralewayBold}}>
                                            {footerLine}
                                        </Typography></Grid>)
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default UnderConstruction