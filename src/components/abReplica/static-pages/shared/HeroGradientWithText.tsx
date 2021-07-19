import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {SanityGradient} from '../cmsStaticPagesClient'
import {Grid, Typography} from '@material-ui/core'
import {SanityImage} from '../../cmsClient'


export const useStyles = makeStyles<Theme, HeroImageWithTextProps>((theme: Theme) => ({
  root: {
    width: `calc(100vw)`
  },
  heroImageContainer: props => ({
    backgroundImage: `url(${props.mainImage?.asset?.url}), linear-gradient(103deg, ${props.gradient?.color1?.value}, ${props.gradient?.color2?.value})`,
    backgroundRepeat: 'no-repeat',
    minHeight: '604px',
    [theme.breakpoints.down('sm')]: {
      minHeight: '248px',
    },
    zIndex: 1000,
  }),
  titleText: {
    color: theme.palette.background.default,
  },
}))


export type HeroImageWithTextProps = {
  text?: string
  mainImage?: SanityImage
  gradient?: SanityGradient
}

const HeroGradientWithText: FunctionComponent<HeroImageWithTextProps> = (props) => {
  const classes = useStyles(props)



  return (
    <Grid container item alignItems="center" justify="center" className={classes.root}>
      <Grid container item xs={12} alignContent="center" justify="center" className={classes.heroImageContainer} spacing={2}>
        {props?.text &&
        <Grid item className={classes.titleText}> <Typography variant="h1">{props?.text}</Typography> </Grid>
        }
      </Grid>
    </Grid>
  )
}

export default HeroGradientWithText
