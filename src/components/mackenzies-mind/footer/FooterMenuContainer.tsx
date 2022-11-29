import React, {FunctionComponent, useContext} from 'react'
import {Divider, Grid, Typography} from '@material-ui/core'
import FooterMenuGroup from './FooterMenuGroup'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {SanityTransformHwHomePage} from "../../../common/sanityIo/Types";
import MixedFeelingsByTTheme, {COLORS} from "../../../theme/MixedFeelingsByTTheme";
import PageContext from "../../page-context/PageContext";
import MediaQueriesContext from "../../media-queries-context/MediaQueriesContext";
import MailTo from "../../mail-to/MailTo";
import Logo from "../../transform-hw/logo/Logo";


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

const FooterMenuContainer: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useStyles(MixedFeelingsByTTheme)

    const pageContext = useContext(PageContext)
    const mediaQueriesContext = useContext(MediaQueriesContext)


    return (
        <Grid container item className={classes.root} spacing={5}>
            <Grid container item xs={12} md={4} style={mediaQueriesContext.smDown ? {
                borderLeft: `4px solid ${MixedFeelingsByTTheme.palette.primary.main}`,
                backgroundColor: "rgba(117,117,117,.5)",
                borderRight: `4px solid ${MixedFeelingsByTTheme.palette.primary.main}`,
            } : {}}>
                {
                    pageContext.pageFooter?.subMenus?.map((menuGroup: any, index: number) => {
                        return (
                            <Grid key={index} item xs={6}>
                                <FooterMenuGroup menuGroup={menuGroup}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Grid item container xs={12} md={4} justifyContent='center'>
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
                            <MailTo color={COLORS.DARK_GRAY} email={props.homePage.email??""} subject={"Information Request"} body={""}/>
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