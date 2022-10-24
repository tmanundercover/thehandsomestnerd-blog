import React, {FunctionComponent, useState} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {
    AppBar,
    Button, Divider,
    Drawer,
    Grid, Hidden,
    List,
    ListItem,
    ListItemIcon, ListItemText,
    Popover,
    Typography,
    useMediaQuery
} from '@material-ui/core'
import TransformHWTheme, {COLORS} from "../../../theme/transform-hw/TransformHWTheme";
import {SanityMenuContainer, SanityMenuGroup, SanityMenuItem} from "../../../sanity/Menu";
import GroqQueries from "../../../utils/groqQueries";
import sanityClient from "../../../sanityClient";
import {ArrowDropDown, Close, Inbox, Mail, Menu} from "@material-ui/icons";
import Logo from "../logo/Logo";
import SubMenu from "./SubMenu";
import MediaQueries from "../../layout/MediaQueries";
import clsx from "clsx";
import MainMenu from "./MainMenu";
import FilteredMenuItems from "./FilteredMenuItems";

export const useStyles = makeStyles((theme: Theme) => ({
    root: (props) => ({
        height: 'max-content',
        // padding: theme.spacing(1.2, 5, 1.2, 0),
        // backgroundColor: 'rgba(16, 43, 136, .5)',
        // zIndex: 9999
    }),
    // headerMenuItem: {
    //     fontWeight: 600,
    //     fontSize: '15px',
    //     lineHeight: '30px',
    //     letterSpacing: '1px'
    // }
}))

export type HeaderProps = {
    menuSlug?: string
}

const ThwHeader: FunctionComponent<HeaderProps> = (props) => {
    const classes = useStyles({})

    const [menu, setMenu] = React.useState<SanityMenuContainer>({})


    React.useEffect(() => {
        sanityClient
            .fetch(
                `*[slug.current == $menuSlug]{
          ${GroqQueries.MENUGROUPCONTAINER}
       }`, {menuSlug: props.menuSlug ?? 'header-menu'}
            )
            .then((data: SanityMenuContainer[]) => {
                console.log(data[0])
                setMenu(data[0])
            })
            .catch(console.error)
    }, [])

    const mdDown = useMediaQuery(MediaQueries.mdDown)
    const xsOnly = useMediaQuery(MediaQueries.xsOnly)

    return (
        <AppBar color='primary' className={classes.root}>{menu?.title ?
                    <Grid item xs={12} container justifyContent="space-between" spacing={mdDown?3:0}>
                        <Grid item container xs={2} md={2} lg={4} justifyContent='flex-start'>
                            {
                                menu?.logoImageSrc && <Logo isResponsive logoImageSrc={menu.logoImageSrc}/>
                            }
                        </Grid>
                        <Grid item container xs={10} md={10} lg={8} justifyContent='space-between'>
                            <Hidden xsDown>
                                <Grid xs={4} md={10} lg={12} container item justifyContent='flex-end'
                                      alignItems='stretch'
                                      style={{
                                          height: "100%",
                                          paddingRight: mdDown ? TransformHWTheme.spacing(0) : TransformHWTheme.spacing(4)
                                      }}>
                                    <FilteredMenuItems subMenus={menu.subMenus ?? []} onlyButtons={mdDown} includeMenuItems={!mdDown} includeMenuGroups={!mdDown}/>
                                </Grid>
                            </Hidden>
                            <Hidden lgUp>
                                <Grid item xs={12} sm={2} container justifyContent='flex-end'>
                                    <Grid container item
                                          justifyContent='flex-end'
                                          alignItems='center'
                                          // style={{paddingRight: TransformHWTheme.spacing(4)}}
                                    >
                                        <Grid item>
                                            <MainMenu menu={menu}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Hidden>
                        </Grid>
                    </Grid>
            : <></>
        }</AppBar>
    )
}

export default ThwHeader