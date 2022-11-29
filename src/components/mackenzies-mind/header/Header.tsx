import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {AppBar, Grid, Hidden} from '@material-ui/core'
import MackenziesMindTheme, {COLORS} from "../../../theme/MackenziesMindTheme";
import MainMenu from "./MainMenu";
import FilteredMenuItems from "../../filtered-menu-items/FilteredMenuItems";
import clsx from "clsx";
import MediaQueriesContext from "../../media-queries-context/MediaQueriesContext";
import Logo from "../../transform-hw/logo/Logo";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: '104px',
        backgroundColor: COLORS.TRANSPARENTWHITE,
        transition: 'background-color .5s ease 0s',
        paddingLeft: theme.spacing(4)
    },
    opaque: {
        backgroundColor: `${COLORS.LIGHTGRAY} !important`,
    }
}))

export type HeaderProps = {
    pageHeader?: any
    updateIsLoading?: (value: boolean) => void
}

const Header: FunctionComponent<HeaderProps> = (props) => {
    const classes = useStyles()
    const mediaQueriesContext = useContext(MediaQueriesContext)

    React.useEffect(() => {
        console.log("Page header in the header", props.pageHeader)
    }, [props.pageHeader])

    return (
        <AppBar className={clsx({[classes.opaque]: true}, classes.root)}>{props.pageHeader?.title ?
            <Grid item xs={12} container justifyContent="space-between" spacing={mediaQueriesContext.mdDown ? 3 : 0}>
                <Grid item container xs={2} md={2} lg={4} justifyContent='flex-start'>
                    {
                        props.pageHeader?.logoImageSrc && <Logo logoImageSrc={props.pageHeader.logoImageSrc}/>
                    }
                </Grid>
                <Grid item container xs={10} md={10} lg={8} justifyContent='space-between'>
                    {/*// @ts-ignore*/}
                    <Hidden xsDown>
                        <Grid xs={4} md={10} lg={12} container item justifyContent='flex-end'
                              alignItems='stretch'
                              style={{
                                  height: "100%",
                                  paddingRight: mediaQueriesContext.mdDown ? MackenziesMindTheme.spacing(0) : MackenziesMindTheme.spacing(4)
                              }}>
                            <FilteredMenuItems
                                // bgColor={!mdDown ? TransformHWTheme.palette.primary.main : COLORS.TRANSPARENTWHITE}
                                subMenus={props.pageHeader.subMenus ?? []} onlyButtons={mediaQueriesContext.mdDown}
                                includeMenuItems={!mediaQueriesContext.mdDown}
                                includeMenuGroups={!mediaQueriesContext.mdDown}/>
                        </Grid>
                    </Hidden>
                    {/*// @ts-ignore*/}
                    <Hidden lgUp>
                        <Grid item xs={12} sm={2} container justifyContent='flex-end'>
                            <Grid container item
                                  justifyContent='flex-end'
                                  alignItems='center'
                            >
                                <Grid item>
                                    <MainMenu menu={props.pageHeader} anchor='top'/>
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

export default Header