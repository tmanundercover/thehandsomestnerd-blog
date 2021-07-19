import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {SanityHeroImageWithText} from '../cmsStaticPagesClient'
import {Grid, Hidden, Typography, useMediaQuery} from '@material-ui/core'
import abTheme from '../../common/Theme'

export const useStyles = makeStyles<Theme, HeroImageWithTextProps>((theme: Theme) => ({
  heroImageContainer: props => ({
    backgroundSize: 'contain',
    backgroundImage: `url(${props.heroImage?.mainImage?.asset?.url}), linear-gradient(103deg, ${props.heroImage?.gradient?.color1?.value}, ${props.heroImage?.gradient?.color2?.value})`,
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.up('md')]: {
      minHeight: '604px',
    },
    minHeight: '300px',
    zIndex: 1000,
  }),
  root: {
    marginLeft: -1 * theme.spacing(4),
    marginRight: -1 * theme.spacing(4),
    width: `calc(100vw + ${theme.spacing(8)}px)`,
  },
  firstIndent: {
    marginRight: theme.spacing(1),
    opacity: .11,
  },
  secondIndent: {
    marginRight: theme.spacing(5),
    opacity: .11,
  },
  mainIndent: {
    marginRight: theme.spacing(9),
  },
  lightText: {
    fontWeight: 300
  },
  underline: {
    textDecoration: 'underline',
    textDecorationColor: abTheme.palette.accentText.blue.main,
  },
  smallTitle: {
    textAlign: 'center',
  },
}))


export type HeroImageWithTextProps = {
  heroImage?: SanityHeroImageWithText
}

const HomePageHeroImage: FunctionComponent<HeroImageWithTextProps> = (props) => {
  const classes = useStyles(props)
  const smDown = useMediaQuery(abTheme.breakpoints.down('sm'))

  return (
    <Grid container item alignItems="center" justify="center" className={classes.root}>
      <Grid container item xs={12} alignContent="center" className={classes.heroImageContainer} spacing={2}>
        <Hidden smDown>
          <Grid container item justify={smDown ? 'center' : 'flex-end'} alignItems="center" xs={smDown ? 12 : 6}>
            <Grid item>
              <Typography color="textPrimary" variant="h1" className={classes.lightText}>Skincare for</Typography>
            </Grid>
          </Grid>
          <Grid container direction="column" alignItems={smDown ? 'center' : 'flex-end'} item xs={smDown ? 12 : 1}>
            <Hidden smDown>
              <Grid item className={classes.firstIndent} data-aos="flip-down">
                <Typography color="primary" variant="h1" className={classes.lightText} style={{color: abTheme.palette.accentText.blue.main
                }}>all</Typography>
              </Grid>
              <Grid item className={classes.secondIndent} data-aos="flip-down">
                <Typography color="primary" variant="h1" className={classes.lightText} style={{color: abTheme.palette.accentText.blue.main
                }}>her</Typography>
              </Grid>
            </Hidden>
            <Grid item className={classes.mainIndent}>
              <Typography color="textPrimary" variant="h1"><b>y<span
                className={classes.underline}>ou</span>.</b></Typography>
            </Grid>
            <Hidden smDown>
              <Grid item className={classes.secondIndent} data-aos="flip-down">
                <Typography color="primary" variant="h1" className={classes.lightText} style={{color: abTheme.palette.accentText.blue.main
                }}>him</Typography>
              </Grid>
              <Grid item className={classes.firstIndent} data-aos="flip-down">
                <Typography color="primary" variant="h1" className={classes.lightText} style={{color: abTheme.palette.accentText.blue.main
                }}>kids</Typography>
              </Grid>
            </Hidden>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container justify="center">
            <Grid item className={classes.smallTitle}>
              <Typography component="span" color="secondary" variant="h2" className={classes.lightText}>Capital
                to </Typography>
              <Typography component="span" color="secondary" variant="h2"><b>g<span
                className={classes.underline}>row</span>.</b></Typography>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
    </Grid>
  )
}

export default HomePageHeroImage
