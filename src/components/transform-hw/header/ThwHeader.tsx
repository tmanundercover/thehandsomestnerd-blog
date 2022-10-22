import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {AppBar, Button, Divider, Grid, Popover, Typography} from '@material-ui/core'
import TransformHWTheme, {COLORS} from "../../../theme/transform-hw/TransformHWTheme";
import {SanityMenuContainer, SanityMenuGroup, SanityMenuItem} from "../../../sanity/Menu";
import GroqQueries from "../../../utils/groqQueries";
import sanityClient from "../../../sanityClient";
import {ArrowDropDown} from "@material-ui/icons";
import Logo from "../logo/Logo";
import SubMenu from "./SubMenu";

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
    const [links, setLinks] = React.useState<SanityMenuItem[]>([])
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleClose = () => {
        setAnchorEl(null);
    };

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

    return (
        <AppBar color='primary' className={classes.root}>{menu?.title ?
            <Grid container justifyContent="space-between" alignItems='stretch'>
                <Grid item xs={2} container justifyContent='center' spacing={2} alignContent='center'>
                    {
                        menu?.logoImageSrc && <Logo logoImageSrc={menu.logoImageSrc}/>
                    }
                    {/*<Grid item container xs={3} style={{marginBottom: TransformHWTheme.spacing(2)}}><Divider style={{width: "100%"}}/></Grid>*/}
                </Grid>
                <Grid item xs={10} container alignContent='center'>
                    <Grid container item justifyContent='flex-end' alignItems='stretch' style={{height: "100%", paddingRight: TransformHWTheme.spacing(4)}}>
                        {
                            menu?.subMenus?.map(
                                (menuLink, index) => {
                                    if (menuLink["_type"] === "menuItem") {
                                        const menuItem: SanityMenuItem = menuLink
                                        return <Grid item key={menuLink._type + index}>
                                            <Button href={menuItem.url ?? ""}
                                                    color={menuItem.isOutlinedButton || menuItem.isContainedButton ? 'secondary' : "primary"}
                                                    style={{
                                                        borderRadius:(menuItem.isOutlinedButton || menuItem.isContainedButton)?TransformHWTheme.shape.borderRadius:0,
                                                        paddingLeft:(menuItem.isOutlinedButton || menuItem.isContainedButton) ? TransformHWTheme.spacing(4):TransformHWTheme.spacing(2),
                                                        paddingRight:(menuItem.isOutlinedButton || menuItem.isContainedButton) ? TransformHWTheme.spacing(4):TransformHWTheme.spacing(2),
                                                        marginTop: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? TransformHWTheme.spacing(2): 0,
                                                        marginBottom: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? TransformHWTheme.spacing(2): 0,
                                                        height: menuItem.isOutlinedButton || menuItem.isContainedButton ?"48px":"100%",
                                                        color: menuItem.isOutlinedButton || menuItem.isContainedButton ? 'white' : TransformHWTheme.palette.secondary.main
                                                    }}
                                                    variant={menuItem.isContainedButton ? 'contained' : (menuItem.isOutlinedButton ? 'outlined' : 'text')}>
                                                <Typography noWrap variant={menuItem.isOutlinedButton || menuItem.isContainedButton ?"button":'body2'} style={{ fontSize:"18px"}}>{menuItem.displayText}</Typography>
                                            </Button>
                                        </Grid>
                                    } else {
                                        console.log("menuGroup", menuLink)
                                        const menuGroup: SanityMenuGroup = menuLink
                                        return <Grid item key={menuLink._type + index}>
                                            <Button
                                                ref={() => {
                                                    return anchorEl
                                                }}
                                                color={"secondary"}
                                                style={{
                                                    borderRadius:0,
                                                    paddingLeft:TransformHWTheme.spacing(2),
                                                    paddingRight:TransformHWTheme.spacing(5.5),
                                                    height: "100%",
                                                    color: TransformHWTheme.palette.secondary.main
                                                }}
                                                onClick={handleClick}
                                                endIcon={<ArrowDropDown></ArrowDropDown>}
                                            >
                                                <Typography noWrap variant='body2' style={{ fontSize:"18px"}}>{menuGroup.menuGroupTitle}</Typography>
                                            </Button>
                                            <Popover
                                                // id={menuLink._type + "-" + menu + "-" + index}
                                                id={id}
                                                open={open}
                                                elevation={1}
                                                anchorEl={anchorEl}
                                                onClose={handleClose}
                                                PaperProps={{style:{borderTopLeftRadius: 0, borderTopRightRadius: 0}}}
                                                anchorOrigin={{
                                                    vertical: 84,
                                                    horizontal: 'left',
                                                }}
                                            >
                                                <Grid container item style={{backgroundColor: COLORS.GRAY}}>
                                                    <SubMenu subMenu={menuGroup}/>
                                                </Grid>
                                            </Popover>
                                        </Grid>
                                    }

                                })??<></>
                        }
                    </Grid>
                </Grid>
            </Grid> : <></>}</AppBar>
    )
}

export default ThwHeader