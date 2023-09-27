import React, {FunctionComponent, useContext, useEffect, useState} from 'react'
import {Divider, Grid, IconButton, Link, Typography} from '@material-ui/core'
import FooterMenuGroup from './FooterMenuGroup'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {SanityTransformHwHomePage} from "../../../common/sanityIo/Types";
import MixedFeelingsByTTheme, {COLORS} from "../../../theme/MixedFeelingsByTTheme";
import PageContext from "../../page-context/PageContext";
import MediaQueriesContext from "../../media-queries-context/MediaQueriesContext";
import MailTo from "../../mail-to/MailTo";
import Logo from "../../transform-hw/logo/Logo";
import {Facebook, Instagram, LinkedIn, Twitter, YouTube} from "@material-ui/icons";


export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        color: theme.palette.text.secondary,
    },
    socialMediaContainer: {
        // marginTop: theme.spacing(1)
    },
}))


interface IProps {
    menuContainerSlug?: string
    homePage: SanityTransformHwHomePage
    updateIsLoading?: (value: boolean) => void
}

const FooterMenuContainer: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useStyles(MixedFeelingsByTTheme)

    const pageContext = useContext(PageContext)
    const mediaQueriesContext = useContext(MediaQueriesContext)
    // const [justifyContent, setJustifyContent] = useState<any>('flex-end')
    // useEffect(() => {
    //     if (mediaQueriesContext.smDown) {
    //         setAlignment('center')
    //         setJustifyContent('center')
    //     } else {
    //         setAlignment('right')
    //         setJustifyContent('flex-end')
    //     }
    // }, [mediaQueriesContext.smDown])

    return (
        <Grid container item className={classes.root} spacing={2}>
            <Grid container item direction={mediaQueriesContext.smDown?'column':'row'} style={mediaQueriesContext.smDown ? {
                borderLeft: `4px solid ${MixedFeelingsByTTheme.palette.primary.main}`,
                // backgroundColor: "rgba(117,117,117,.5)",
                borderRight: `4px solid ${MixedFeelingsByTTheme.palette.primary.main}`,
            } : {}} spacing={5} justifyContent='center' alignContent='center'>
                {
                    pageContext.pageFooter?.subMenus?.map((menuGroup: any, index: number) => {
                        return (
                            <Grid key={index} item>
                                <FooterMenuGroup menuGroup={menuGroup}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Grid item container justifyContent='center'>
                <Grid container item>
                    <Grid container item justifyContent={'center'}
                          className={classes.socialMediaContainer}
                          spacing={1}>
                        {props.homePage?.facebook && <Grid item>
                            <IconButton>
                                <Typography>
                                    <Link
                                        href={"http://facebook.com/" + props.homePage.facebook}><Facebook
                                        fontSize="medium" /></Link>
                                </Typography>
                            </IconButton>
                        </Grid>}
                        {props.homePage?.twitter && <Grid item>
                            <IconButton>

                                <Typography>
                                    <Link href={"http://twitter.com/" + props.homePage.twitter}><Twitter
                                        fontSize="medium" /></Link>
                                </Typography>
                            </IconButton>
                        </Grid>}
                        {props.homePage?.instagram && <Grid item>
                            <IconButton>

                                <Typography>
                                    <Link href={"http://instagram.com/" + props.homePage.instagram}><Instagram
                                        fontSize="medium" /></Link>
                                </Typography>
                            </IconButton>
                        </Grid>}
                    </Grid>
                </Grid>
                {pageContext.pageFooter?.logoImageSrc &&
                    <Logo isCenter logoImageSrc={pageContext.pageFooter.logoImageSrc} height={108}/>}
                <Grid item container justifyContent='center' style={{
                    paddingBottom: "16px",
                    marginTop: "12px",
                }}>

                    <Grid item>
                        <Divider style={{
                            width: "70px",
                            backgroundColor: "white"
                        }}/>
                    </Grid>

                </Grid>
                <Grid item container>
                    <Grid container item spacing={1} justifyContent='center'>
                        <Grid item>
                            <Typography color='inherit' style={{width: "180px"}} align='center' variant='subtitle1'
                                        gutterBottom>{props.homePage.address}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1} justifyContent='center'>
                        <Grid item>
                            <Typography color='inherit' align='center'
                                        variant='subtitle1'>{props.homePage.phone}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1} justifyContent='center'>
                        {<Grid item>
                            <MailTo color={"#dd4f11"} email={props.homePage.email??""} subject={"Information Request"} body={""}><Typography>{props.homePage.email??""}</Typography></MailTo>
                        </Grid>}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container xs={12} md={4} alignContent='flex-start' spacing={2}>

            </Grid>
        </Grid>
    )
}

export default FooterMenuContainer