import React, {FunctionComponent, useEffect, useState} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {AppBar, Grid, Hidden, useMediaQuery, withWidth} from '@material-ui/core'
import TransformHWTheme from "../../../theme/transform-hw/TransformHWTheme";
import GroqQueries from "../../../utils/groqQueries";
import sanityClient from "../../../sanityClient";
import Logo from "../logo/Logo";
import MediaQueries from "../../../utils/mediaQueries";
import MainMenu from "./MainMenu";
import FilteredMenuItems from "../filtered-menu-items/FilteredMenuItems";
import clsx from "clsx";
import {useQuery} from "react-query";
import {SanityMenuContainer} from "../../../common/sanityIo/Types";
import mediaQueries from "../../../utils/mediaQueries";

const TRANSPARENTWHITE = 'rgba(255,255,255,0.75)'

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: 'max-content',
        backgroundColor: TRANSPARENTWHITE,
        transition: 'background-color .5s ease 0s',
        paddingLeft: theme.spacing(4)
    },
    opaque: {
        backgroundColor: `${theme.palette.primary.main} !important`,
    }
}))

export type HeaderProps = {
    menuSlug?: string
    isOpaque?: boolean
    updateIsLoading?: (value:boolean) => void
}

const ThwHeader: FunctionComponent<HeaderProps> = (props) => {
    const classes = useStyles()

    const [menu, setMenu] = React.useState<SanityMenuContainer>()

    const { data, isLoading, isRefetching} = useQuery(
        ['getHeader'],
        () => {
            // if ((!data && !isError)) {
            return sanityClient
                .fetch(
                    `*[slug.current == $menuSlug]{
          ${GroqQueries.MENUGROUPCONTAINER}
       }`, {menuSlug: props.menuSlug ?? 'header-menu'}
                )
        }
        // }
    );

    useEffect(()=>{
        console.log("header done", menu)
        props.updateIsLoading && props.updateIsLoading(!menu)
    }, [menu])

    React.useEffect(() => {
        // console.log("data", data)
        data && data[0] && setMenu(data[0])
    }, [data])

    const mdDown = mediaQueries.useMdDown()

    return (
        <AppBar className={clsx({[classes.opaque]: !props.isOpaque && !mdDown}, classes.root)}>{menu?.title ?
            <Grid item xs={12} container justifyContent="space-between" spacing={mdDown ? 3 : 0}>
                <Grid item container xs={2} md={2} lg={4} justifyContent='flex-start'>
                    {
                        menu?.logoImageSrc && <Logo logoImageSrc={menu.logoImageSrc}/>
                    }
                </Grid>
                <Grid item container xs={10} md={10} lg={8} justifyContent='space-between'>
                    {/*// @ts-ignore*/}
                    <Hidden xsDown>
                        <Grid xs={4} md={10} lg={12} container item justifyContent='flex-end'
                              alignItems='stretch'
                              style={{
                                  height: "100%",
                                  paddingRight: mdDown ? TransformHWTheme.spacing(0) : TransformHWTheme.spacing(4)
                              }}>
                            <FilteredMenuItems
                                bgColor={!props.isOpaque && !mdDown ? TransformHWTheme.palette.primary.main : TRANSPARENTWHITE}
                                 subMenus={menu.subMenus ?? []} onlyButtons={mdDown}
                                includeMenuItems={!mdDown} includeMenuGroups={!mdDown}/>
                        </Grid>
                    </Hidden>
                    {/*// @ts-ignore*/}
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

export default withWidth()(ThwHeader)