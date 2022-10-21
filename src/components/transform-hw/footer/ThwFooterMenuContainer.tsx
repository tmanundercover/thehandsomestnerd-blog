import React, {FunctionComponent} from 'react'
import {Divider, Grid, Typography, useMediaQuery} from '@material-ui/core'
import ThwFooterMenuGroup from './ThwFooterMenuGroup'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {SanityTransformHwHomePage} from "../../../common/sanityIo/Types";
import {urlFor} from "../../abReplica/static-pages/cmsStaticPagesClient";
import {SanityMenuContainer, SanityMenuGroup} from "../../../sanity/Menu";
import cmsClient from '../../abReplica/cmsClient'
import TransformHWTheme from "../../../theme/transform-hw/TransformHWTheme";
import MediaQueries from "../../layout/MediaQueries";


export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        // width: '100vw',
        color: theme.palette.text.secondary,

    }
}))


interface IProps {
    menuContainerSlug?: string
    homePage?: SanityTransformHwHomePage
}

const ThwFooterMenuContainer: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useStyles(TransformHWTheme)

    const [menu, setMenu] = React.useState<SanityMenuContainer>()
    const xsOnly = useMediaQuery(MediaQueries.xsOnly)
    const smDown = useMediaQuery(MediaQueries.smDown)

    const getMenuData = (): Promise<any> => {
        return cmsClient.fetchLandingPageFooterMenu(props.menuContainerSlug)
    }

    React.useEffect(() => {
        getMenuData().then((data) => setMenu(data))
    }, [])

    return (
        <Grid container item className={classes.root} spacing={5}>
            <Grid container item xs={12} md={4} style={smDown?{
                borderLeft: `4px solid ${TransformHWTheme.palette.primary.main}`,
                backgroundColor: "rgba(117,117,117,.5)",
                borderRight: `4px solid ${TransformHWTheme.palette.primary.main}`,
            }:{}}>
                {
                    menu?.menuItems?.map((menuGroup: SanityMenuGroup, index: number) => {
                        return (
                            <Grid key={index} item>
                                <ThwFooterMenuGroup menuGroup={menuGroup}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Grid item container xs={12} md={4} justifyContent='flex-start'>
                {menu?.logoImageSrc &&<Grid item container style={{
                    backgroundImage: `url(${urlFor(menu.logoImageSrc).url() ?? ''})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat:'no-repeat',
                    height: 200
                }}/>}
                <Grid item container justifyContent='center' style={{paddingBottom: "16px",
                    marginTop: "12px",}}>

                    <Grid item><Divider style={{
                        width:"70px",
                        backgroundColor:"white"
                    }}></Divider></Grid>

                </Grid>
                <Grid item container>
                    <Grid container item spacing={1} justifyContent='center'>
                        {/*<Grid item>*/}
                        {/*    <Typography color='inherit'><MailOutline/></Typography>*/}
                        {/*</Grid>*/}
                        <Grid item>
                            <Typography color='inherit' style={{width:"180px"}} align='center'  variant='subtitle1'>{props.homePage?.address}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1} justifyContent='center'>
                        {/*<Grid item>*/}
                        {/*    <Typography color='inherit'><PhoneOutlined/></Typography>*/}
                        {/*</Grid>*/}
                        <Grid item>
                            <Typography color='inherit' align='center' variant='subtitle1'>{props.homePage?.phone}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1} justifyContent='center'>
                        {/*<Grid item>*/}
                        {/*    <Typography color='inherit'><AlternateEmail/></Typography>*/}
                        {/*</Grid>*/}
                        <Grid item>
                            <Typography color='inherit' align='center' variant='subtitle1'>{props.homePage?.email}</Typography>
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
                            <Typography variant='subtitle1' color='inherit'>Mon-Wed</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='subtitle1' color='inherit'>8pm-9pm</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item><Divider style={{width:"100%", backgroundColor:"white"}}></Divider></Grid>
                    <Grid container item>
                        <Grid item xs={6}>
                            <Typography variant='subtitle1' color='inherit'>Th-F</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='subtitle1' color='inherit'>8pm-10pm</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item><Divider style={{width:"100%",backgroundColor:"white"}}></Divider></Grid>
                    <Grid container item>
                        <Grid item xs={6}>
                            <Typography variant='subtitle1' color='inherit'>Sunday</Typography>
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