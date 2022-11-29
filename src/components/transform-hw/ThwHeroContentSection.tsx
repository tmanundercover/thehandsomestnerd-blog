import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Button, Grid, Typography, useTheme} from '@material-ui/core'
import {urlFor} from '../block-content-ui/static-pages/cmsStaticPagesClient'
import {ThwHeroContentSectionType} from "../BlockContentTypes";
import clsx from "clsx";
import useCustomStyles from "../mackenzies-mind/pages/Styles";
import MackenziesMindTheme, {rainbow, raleway, ralewayBold, singa} from "../../theme/MackenziesMindTheme";
import firebaseAnalyticsClient from "../../utils/firebase/FirebaseAnalyticsClient";
import PageContext from "../page-context/PageContext";
import {Speaker} from "@material-ui/icons";

interface IProps {
    sectionData: ThwHeroContentSectionType
}

interface CSSProps {
    heroBaseImageUrl: string,
    heroOverlay?: string | null
}

export const useStyles = makeStyles((theme: Theme) => ({
    marketingBackground: (props: CSSProps) => ({
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url('${props.heroBaseImageUrl}'), url('${props.heroOverlay}')`,
        backgroundSize: 'cover, contain',
        backgroundPosition: "center",
        minHeight: '521px',
        backgroundColor: 'transparent',
        position: "relative"
    }),
    contentSection: {
        height: '510px',
        marginTop: '16px',
        backgroundColor: 'transparent',
    },
    contentBullets: {
        // borderLeft: `4px solid ${theme.palette.primary.main}`,
        // paddingLeft: '26px',
    }
}))

const ThwHeroContentSection: FunctionComponent<IProps> = (props) => {
    let classParameters: CSSProps = {
        heroBaseImageUrl: urlFor(props.sectionData.heroImage).url() ?? '',
    }

    if (props.sectionData.heroImageBackground) {
        classParameters = {
            ...classParameters,
            heroOverlay: urlFor(props.sectionData.heroImageBackground).url()
        }
    }

    const theme = useTheme()
    const pageContext = useContext(PageContext)

    const classes = useStyles(classParameters)
    const globalClasses = useCustomStyles({})
    return (
        <Grid container item className={classes.marketingBackground}>
            <Grid container item
                  className={clsx(globalClasses.fullSection, globalClasses.fullSectionOverlay)}>
            </Grid>
            <Grid container direction='column' style={{zIndex: 2}}>
                <Grid item>
                    <Grid container className={classes.contentSection} item xs={12}>
                        <Grid container direction='column' style={{position: "relative"}} alignItems='center'
                              alignContent='center' justifyContent='center'>
                            <Grid item>
                                <Typography variant='subtitle1'
                                            style={{color: MackenziesMindTheme.palette.text.secondary}}>{props.sectionData.contentWelcomeMessage}</Typography>
                            </Grid>
                            <Grid item justifyContent='center'>
                                <Typography variant='h1'
                                            color={'textSecondary'}
                                            style={{...rainbow}}>{props.sectionData.contentTitle}</Typography>
                            </Grid>
                            <Grid container item className={classes.contentBullets} justifyContent='center'>
                                <Typography variant='body1'
                                            color='textSecondary'
                                            style={{...raleway}}>{props.sectionData.contentText}</Typography>
                            </Grid>
                            <Grid item style={{position: "absolute", bottom: 16, right: 16}}>
                                <Button color='primary' variant='contained'
                                        onClick={() => {
                                            firebaseAnalyticsClient.ctaClick("hero-section", props.sectionData.ctaButtonTitle, pageContext.analyticsId,)
                                        }}
                                        href={props.sectionData.ctaButtonLink ?? ""} >
                                    <Grid container alignItems='center' spacing={1}>
                                        <Grid item>
                                            <Speaker fontSize='large'/>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='button'
                                                        color='secondary'>{props.sectionData.ctaButtonTitle}</Typography>
                                        </Grid>
                                    </Grid>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    )
}

export default ThwHeroContentSection