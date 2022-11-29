import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Button, Grid, Typography} from '@material-ui/core'
import {urlFor} from '../block-content-ui/static-pages/cmsStaticPagesClient'
import {ThwHeroContentSectionType} from "../BlockContentTypes";
import clsx from "clsx";
import MackenziesMindTheme, {rainbow, raleway} from "../../theme/MackenziesMindTheme";
import firebaseAnalyticsClient from "../../utils/firebase/FirebaseAnalyticsClient";
import PageContext from "../page-context/PageContext";
import useCustomStyles from "./pages/Styles";
import ImageWIthButtonOverlay from "../image-with-button-overlay/ImageWithButtonOverlay";

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
        borderLeft: `4px solid ${theme.palette.primary.main}`,
        paddingLeft: '26px',
    }
}))

const SingleListeningSection: FunctionComponent<IProps> = (props) => {
    let classParameters: CSSProps = {
        heroBaseImageUrl: urlFor(props.sectionData.heroImage).url() ?? '',
    }

    if (props.sectionData.heroImageBackground) {
        classParameters = {
            ...classParameters,
            heroOverlay: urlFor(props.sectionData.heroImageBackground).url()
        }
    }

    const pageContext = useContext(PageContext)

    const classes = useStyles(classParameters)
    const globalClasses = useCustomStyles({})
    return (
        <Grid container item className={classes.marketingBackground}>
            <Grid container item
                  className={clsx(globalClasses.fullSection, globalClasses.fullSectionOverlay)}>
            </Grid>
            <Grid container item>
                <Grid item xs={6}>
                    <Grid container item>
                        <ImageWIthButtonOverlay height={500} />
                    </Grid>
                    <Grid container item>
                        {/* player */}
                    </Grid>
                </Grid>
                <Grid item xs={6} container direction='column'>
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
                    <Grid container item>
                        <Grid item xs={6}>
                        {/*    apple store badge*/}
                        </Grid>
                   <Grid item  xs={6}>
                        {/*    spotify badge*/}

                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    )
}

export default SingleListeningSection