import React, {FunctionComponent, useContext, useState} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {
    Avatar,
    Button,
    createStyles,
    Divider,
    Drawer,
    Grid,
    List,
    ListItem,
    Typography,
    useTheme
} from '@material-ui/core'
import {Close, FileCopy} from "@material-ui/icons";
import DigitalResumeTheme, {COLORS} from "../theme/DigitalResumeTheme";
import ResumeSocialMedia from "./my-digital-resume/ResumeSocialMedia";
import {urlFor} from "./block-content-ui/static-pages/cmsStaticPagesClient";
import {MainMenuAnchorType, SanityMenuContainer} from "../common/sanityIo/Types";
import PageContext from "./page-context/PageContext";
import Logo from "./transform-hw/logo/Logo";
import {ResumeBioSectionType} from "./BlockContentTypes";
import MailTo from "./mail-to/MailTo";
import QrCodeContext from "./qr-code-context/QrCodeContext";
import SnackbarContext from "./modal-context/SnackbarContext";
import firebaseAnalyticsClient from "../utils/firebase/FirebaseAnalyticsClient";
import {useLocation} from "react-router";
import BusinessCardSubmitEmail from "./transform-hw/pages/BusinessCardSubmitEmail";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            "& .MuiDrawer-paper": {
                backgroundColor: "transparent"
            }
        },
        listItem: {
            "&.MuiListItem-gutters": {
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                paddingRight: 0
            }
        }
    }),
);

interface MainMenuProps {
    menu: SanityMenuContainer
    anchor: MainMenuAnchorType
}

const BusinessCard: FunctionComponent<MainMenuProps> = ({menu, anchor}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>()

    const location = useLocation()
    const toggleDrawer = (anchor: MainMenuAnchorType, open: boolean) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        if(open){
            firebaseAnalyticsClient.ctaClick(location.pathname ?? "", "Open Business Card")
        }

        setIsDrawerOpen(open);
    };

    const snackbarContext = useContext(SnackbarContext)
    const classes = useStyles(DigitalResumeTheme)
    const theme = useTheme()

    const pageContext = useContext(PageContext)

    const [userBio, setUserBio] = React.useState<ResumeBioSectionType>()

    React.useEffect(() => {
        //find the bio in pagecontent
        const bioSection = pageContext.page?.pageContent.content.filter((content: any) => {
            if (content._type === "ResumeBioSection") {
                return true
            }
            return false
        })

        console.log("Found bio", bioSection[0])
        setUserBio(bioSection[0])


    }, [pageContext.page?.pageContent])

    const qrCodeContext = useContext(QrCodeContext)
    const share = async (url: string) => {
        console.log("share")
        //
        qrCodeContext.openSnackbar && qrCodeContext.openSnackbar(url)
        // qrCodeContext.init && await qrCodeContext.init(url)
    }

    // React.useEffect(() => {
    //     qrCodeContext.qr_code_value && qrCodeContext.openSnackbar && qrCodeContext.openSnackbar(['email'])
    //
    // }, [qrCodeContext.qr_code_value])

    const list = (anchor: MainMenuAnchorType) => (
        <Grid xs={12} md={6} container item
              role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            // onKeyDown={toggleDrawer(anchor, false)}
              style={{backgroundColor: COLORS.LIGHTGRAY}}
        >
            <Grid container item alignContent='flex-end'>
                <Grid item container style={{
                    marginBottom: theme.spacing(4),
                    backgroundRepeat: "none",
                    minHeight: 250,
                    backgroundSize: "cover",
                    overflow: "visible",
                    position: "relative",
                    backgroundImage: `url(${urlFor(pageContext.page?.businessCardImageSrc ?? "").url()})`
                }} justifyContent='center' alignContent='flex-end'>
                    <Grid container item style={{
                        position: "relative",
                        bottom: -45,
                        height: "max-content",
                        padding: theme.spacing(2, 3)
                    }}>
                        <ResumeSocialMedia spacing={1} bgColor color='secondary' homePage={pageContext.page}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item>
                <List style={{width: "100%",}}>
                    <ListItem>
                        <Grid container>

                            <Grid container justifyContent='center'>
                                <Typography color='primary' variant='h6'>{userBio?.name}</Typography>
                            </Grid>
                            <Grid container justifyContent='center'>
                                <Typography variant='body2'>{userBio?.careerTitle}</Typography>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem>
                        <Grid container>
                            <Grid item xs={3}>
                                <Typography variant='body2'>Phone:</Typography>

                            </Grid>
                            <Grid item xs={9} container justifyContent='flex-end'>
                                <Typography variant='body2'>{pageContext.page?.phone}</Typography>

                            </Grid>
                        </Grid>
                    </ListItem>

                    <Divider/>
                    <ListItem>
                        <Grid item xs={3}>
                            <Typography variant='body2'>Email:</Typography>

                        </Grid>
                        <Grid item xs={9} container justifyContent='flex-end'>
                            <MailTo color={theme.palette.primary.main} email={pageContext.page?.email ?? ""}
                                    subject={"Information Request"} body={""}>
                                <Typography color='textPrimary' variant='button'
                                            align='right'>{pageContext.page?.email}</Typography>
                            </MailTo>
                            {/*<Typography variant='body2'>{pageContext.page?.email}</Typography>*/}
                        </Grid>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <Grid container>
                            <Grid item xs={8} container alignContent='flex-end'>
                                <Typography variant='h6' gutterBottom>Website</Typography>
                                <Button variant='outlined' size='small' fullWidth color='primary'
                                        href={pageContext.page?.website}><Grid style={{height: "48px"}} container
                                                                               justifyContent='center'
                                                                               alignContent='center'
                                                                               alignItems='center'><Grid
                                    item><Typography

                                    variant='subtitle1'
                                    align='center'>{pageContext.page?.website}</Typography></Grid></Grid></Button>
                            </Grid>
                            <Grid item xs={3} container>
                                <Grid container item justifyContent='flex-end'>

                                    <Grid item xs={2} container justifyContent='flex-end'>
                                        <Button variant='contained' color='primary' fullWidth onClick={() => {
                                            navigator.clipboard.writeText(pageContext.page?.website ?? "")
                                            const snack = <Grid container item>
                                                Copied!
                                            </Grid>

                                            snackbarContext.openSnackbar && snackbarContext.openSnackbar(snack, 15000)
                                        }}>
                                            <Grid item>
                                                <FileCopy style={{height: "42px"}}/>
                                                <Typography variant='subtitle1'>Copy</Typography>
                                            </Grid>
                                        </Button>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Button variant='contained' color='primary' fullWidth
                                                onClick={() => share(pageContext.page?.website ?? "")}>
                                            <Grid item>
                                                <img height={42}
                                                     src={urlFor(pageContext.page?.websiteQrCode ?? "").url() ?? ""}/>
                                                <Typography variant='subtitle1'>Qr</Typography>
                                            </Grid>
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <Grid container>
                            <Grid item xs={8} container alignContent='flex-end'>
                                <Typography variant='h6' gutterBottom>Virtual Meeting</Typography>
                                <Button variant='outlined' size='small' fullWidth color='primary'
                                        href={pageContext.page?.bookAppointmentLink}><Grid style={{height: "48px"}}
                                                                                           container
                                                                                           justifyContent='center'
                                                                                           alignContent='center'
                                                                                           alignItems='center'><Grid
                                    item><Typography

                                    variant='subtitle1'
                                    align='center'>{pageContext.page?.bookAppointmentLink}</Typography></Grid></Grid></Button>
                            </Grid>
                            <Grid item xs={3} container>
                                <Grid container item justifyContent='flex-end'>

                                    <Grid item xs={2} container justifyContent='flex-end'>
                                        <Button variant='contained' color='primary' fullWidth onClick={() => {
                                            navigator.clipboard.writeText(pageContext.page?.bookAppointmentLink ?? "")
                                            const snack = <Grid container item>
                                                Copied!
                                            </Grid>

                                            snackbarContext.openSnackbar && snackbarContext.openSnackbar(snack, 15000)
                                        }}
                                        >
                                            <Grid item>
                                                <FileCopy style={{height: "42px"}}/>
                                                <Typography variant='subtitle1'>Copy</Typography>
                                            </Grid>
                                        </Button>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Button variant='contained' color='primary' fullWidth
                                                onClick={() => share(pageContext.page?.bookAppointmentLink ?? "")}>
                                            <Grid item>
                                                <img height={42}
                                                     src={urlFor(pageContext.page?.bookAppointmentQrCode ?? "").url() ?? ""}/>
                                                <Typography variant='subtitle1'>Qr</Typography>
                                            </Grid>
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <Grid item xs={12}>
                            <BusinessCardSubmitEmail emailFieldText={'Email Address'}
                                                     emailButtonText={'Submit'}
                                                     subscribeText={'Get an email with my contact information below'}/>
                        </Grid>
                    </ListItem>
                </List>
            </Grid>
            {/*<Divider/>*/}
            {/*{menu?.subMenus?.map((subMenu: any, index: number) => {*/}
            {/*    switch (subMenu._type) {*/}
            {/*        case 'menuGroup':*/}
            {/*            const menuGroup: SanityMenuGroup = subMenu*/}
            {/*            return <MainMenuSubMenu key={index} menuGroup={menuGroup}/>*/}
            {/*        case 'menuItem':*/}
            {/*        default:*/}
            {/*            const menuItem: SanityMenuItem = subMenu*/}
            {/*            return <List style={{padding: 0}} key={menuItem.displayText}>*/}
            {/*                <ListItem href={menuItem.url ?? ""} className={classes.listItem} button>*/}
            {/*                    <Button variant='text' href={menuItem.isModalButton ? undefined : menuItem.url}*/}
            {/*                            onClick={menuItem.isModalButton ? () => {*/}
            {/*                                console.log()*/}
            {/*                                if (menuItem.isModalButton) {*/}
            {/*                                    modalContext.openModal && modalContext.openModal(menuItem.modalRef)*/}
            {/*                                }*/}
            {/*                            } : undefined}*/}
            {/*                            style={{*/}
            {/*                                paddingTop: DigitalResumeTheme.spacing(2.25),*/}
            {/*                                paddingLeft: DigitalResumeTheme.spacing(2),*/}
            {/*                                paddingBottom: DigitalResumeTheme.spacing(2.25),*/}
            {/*                                height: "100%",*/}
            {/*                                margin: 0*/}
            {/*                            }} fullWidth>*/}
            {/*                        <ListItemText primary={menuItem.displayText}/>*/}
            {/*                    </Button>*/}

            {/*                </ListItem>*/}
            {/*                <Divider/>*/}
            {/*            </List>*/}
            {/*    }*/}

            {/*})}*/}
        </Grid>
    );

    return (<Grid item container>
            <Grid  item container justifyContent='flex-end' style={{padding: theme.spacing(2, 3)}}>

                <Button variant='contained' color='primary' onClick={toggleDrawer(anchor, true)}>
                    <Grid container spacing={2} alignItems='center'>
                        <Grid item>
                            <Avatar style={{backgroundColor: "whitesmoke"}}
                                    src={urlFor(menu.logoImageSrc ?? "").url() ?? ""}/>

                        </Grid>
                        <Grid item>
                            <Typography color='secondary' variant='button'>Contact Info</Typography>

                        </Grid>
                    </Grid>
                </Button>
            </Grid>

            <Drawer
                className={classes.drawer}
                anchor={anchor} open={isDrawerOpen}
                onClose={toggleDrawer(anchor, false)}
            >
                <Grid container alignItems='center' justifyContent='space-between'
                      style={{

                          position: "absolute",
                          zIndex: 1000,
                          paddingLeft: DigitalResumeTheme.spacing(4),
                          paddingRight: DigitalResumeTheme.spacing(6),
                      }}>

                    {/*<Grid item xs={3}>*/}
                    {/*    {menu.logoImageSrc && <Logo logoImageSrc={pageContext.page?.imgSrc}/>}*/}
                    {/*</Grid>*/}
                    <Grid item xs={1}><Button onClick={() => {
                        setIsDrawerOpen(false)
                    }}><Close color='primary' fontSize='large'/></Button></Grid>
                </Grid>
                <Grid container item justifyContent='center'>
                    {list(anchor)}
                </Grid>
            </Drawer>
        </Grid>
    )
}

export default BusinessCard