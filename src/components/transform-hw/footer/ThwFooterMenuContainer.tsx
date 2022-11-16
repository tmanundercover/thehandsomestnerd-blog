import React, {FunctionComponent, useContext, useEffect} from 'react'
import {Divider, Grid, Typography, useMediaQuery} from '@material-ui/core'
import ThwFooterMenuGroup from './ThwFooterMenuGroup'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {SanityMenuContainer, SanityTransformHwHomePage} from "../../../common/sanityIo/Types";
import cmsClient from '../../block-content-ui/cmsClient'
import TransformHWTheme, {COLORS} from "../../../theme/transform-hw/TransformHWTheme";
import MediaQueries from "../../../utils/mediaQueries";
import Logo from "../logo/Logo";
import {useQuery} from "react-query";
import mediaQueries from "../../../utils/mediaQueries";
import PageContext from "../../page-context/PageContext";
import MediaQueriesContext from "../../media-queries-context/MediaQueriesContext";


export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        color: theme.palette.text.secondary,
    }
}))


interface IProps {
    menuContainerSlug?: string
    homePage: SanityTransformHwHomePage
    updateIsLoading?: (value: boolean) => void
}

const ThwFooterMenuContainer: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useStyles(TransformHWTheme)

    const pageContext = useContext(PageContext)
    const mediaQueriesContext = useContext(MediaQueriesContext)


    return (
        <Grid container item className={classes.root} spacing={5}>
            <Grid container item xs={12} md={4} style={mediaQueriesContext.smDown ? {
                borderLeft: `4px solid ${TransformHWTheme.palette.primary.main}`,
                backgroundColor: "rgba(117,117,117,.5)",
                borderRight: `4px solid ${TransformHWTheme.palette.primary.main}`,
            } : {}}>
                {
                    pageContext.pageFooter?.subMenus?.map((menuGroup: any, index: number) => {
                        return (
                            <Grid key={index} item xs={6}>
                                <ThwFooterMenuGroup menuGroup={menuGroup}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Grid item container xs={12} md={4} justifyContent='center'>
                {pageContext.pageFooter?.logoImageSrc && <Logo isCenter logoImageSrc={pageContext.pageFooter.logoImageSrc} height={108}/>}
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
                        <Grid item style={{color: COLORS.DARK_GRAY}}>
                            <Typography color='inherit' align='center'
                                        variant='subtitle1'>{props.homePage.email}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container xs={12} md={4} alignContent='flex-start' spacing={2}>
                <Grid container item>
                    <Typography variant='body2' color='primary'>Open Hours</Typography>
                </Grid>
                <Grid container item spacing={1}>
                    <Grid container item>
                        <Grid item xs={6}>
                            <Typography variant='subtitle1' color='inherit'>Mon</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='subtitle1' color='inherit'>10am - 7pm</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item><Divider style={{width: "100%", backgroundColor: "white"}}/></Grid>
                    <Grid container item>
                        <Grid item xs={6}>
                            <Typography variant='subtitle1' color='inherit'>Tue & Wed</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='subtitle1' color='inherit'>9am - 8pm</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item><Divider style={{width: "100%", backgroundColor: "white"}}/></Grid>
                    <Grid container item>
                        <Grid item xs={6}>
                            <Typography variant='subtitle1' color='inherit'>Thu</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='subtitle1' color='inherit'>10am - 7pm</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item><Divider style={{width: "100%", backgroundColor: "white"}}/></Grid>
                    <Grid container item>
                        <Grid item xs={6}>
                            <Typography variant='subtitle1' color='inherit'>Fri</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='subtitle1' color='inherit'>9am - 7pm</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item><Divider style={{width: "100%", backgroundColor: "white"}}/></Grid>
                    <Grid container item>
                        <Grid item xs={6}>
                            <Typography variant='subtitle1' color='inherit'>Sat</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='subtitle1' color='inherit'> 8am - 4pm</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item><Divider style={{width: "100%", backgroundColor: "white"}}></Divider></Grid>
                    <Grid container item>
                        <Grid item xs={6}>
                            <Typography variant='subtitle1' color='inherit'>Sun</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='subtitle1' color='inherit'>closed</Typography>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    )
}

export default ThwFooterMenuContainer