import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {SanityImageAssetProj, SanityWeWorkWith, urlFor} from '../cmsStaticPagesClient'
import {Grid, Typography} from '@material-ui/core'
import BlockContentLayoutContainer from '../../BlockContentLayoutContainer'
import abTheme from '../../common/Theme'
import {SanityImageAsset} from "@sanity/asset-utils";


export const useStyles = makeStyles((theme: Theme) => ({
    title: {
        textTransform: 'uppercase',
        color: abTheme.palette.accentText.green.main,
    },
    logo: {
        maxWidth: 210,
    },
}))

export type PortfolioCompaniesProps = {
    weWorkWithSection?: SanityWeWorkWith
    anchor?: string
}

const PortfolioCompanies: FunctionComponent<PortfolioCompaniesProps> = (props) => {
    const classes = useStyles(abTheme)

    return (<Grid container direction="column" item spacing={2}>
        <Grid item container>
            <Typography variant='h6' className={classes.title}>
                {props?.weWorkWithSection?.title}
            </Typography>
        </Grid>
        <Grid container item justify="flex-start" spacing={6}>
            <Grid item xs={12} md={6}>
                <Grid container direction='column' spacing={2}>
                    <Grid item>
                        <Typography variant='h4' color='textSecondary'>
                            {props?.weWorkWithSection?.sectionHeader}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <BlockContentLayoutContainer content={props?.weWorkWithSection?.description}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
                <Grid container spacing={4}>
                    {props?.weWorkWithSection?.companyPartnerLogos?.map((partnerLogo: SanityImageAssetProj, index: number) => {
                        return <Grid key={'partner-logo-' + index} container item xs={12} md={6} justifyContent='center'
                                     alignItems='center'>
                            <Grid item>
                                {partnerLogo.mainImage &&
                                    <img src={urlFor(partnerLogo.mainImage).url() ?? ""} className={classes.logo}/>}
                            </Grid>
                        </Grid>
                    })
                    }
                </Grid>
            </Grid>
        </Grid>
    </Grid>)
}

export default PortfolioCompanies