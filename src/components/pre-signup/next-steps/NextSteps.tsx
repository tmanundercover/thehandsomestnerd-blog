import {Button, Grid, Hidden, Typography} from '@material-ui/core'
import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import theme from '../../../common/Theme'
import {StepProps} from '../PreSignup'
import CssGeogrid from '../css-geogrid/CssGeogrid'
import GeogridShapeContainer from '../css-geogrid/GeoGridShapeContainer'

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
      paddingTop: theme.spacing(16),
    },
  },
  formContainer: {
    zIndex: 1200,
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '492px',
    },
  },
  button: {
    height: '40px',
    boxShadow: '8px 8px #FDF3EB',
    [theme.breakpoints.down('xs')]: {
      boxShadow: '4px 4px #FDF3EB',
    },
  },
  nextStepTextContainer: {
    height: '200px',
    width: '364px',
    [theme.breakpoints.down('xs')]: {
      width: '296px',
    },
  },
  pageIndicator: {
    display: 'block',
    [theme.breakpoints.down('xs')]: {
      width: '24px',
    },
  },
  footer: {
    position: 'fixed',
    bottom: 0,
    right: 0,
  },
  responsiveTitle: {
    [theme.breakpoints.only('xs')]: {
      fontSize: '34px',
      lineHeight: '39px',
    },
  },
  geogrid: {
    marginLeft: theme.spacing(5),
  },
  formFieldsContainer: {
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(13.375),
      marginBottom: theme.spacing(11.5),
      height: '145px',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(4),
      height: '212px',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: theme.spacing(9),
      marginBottom: theme.spacing(7),
      height: '200px',
    },
  },
}))

const NextSteps: FunctionComponent<StepProps> = ({lead}: StepProps) => {
  const classes = useStyles(theme)

  React.useEffect(() => {
  }, [])

  return (
    <Grid container alignItems="stretch" className={classes.root}>
      <Grid container direction="column" alignContent="center" className={classes.formContainer}>
        <Grid container item>
          <Typography
            variant="h3"
            color="textSecondary"
            className={classes.responsiveTitle}>
            <Typography
              component="span"
              variant="h3"
              color="primary"
              display="inline"
              className={classes.responsiveTitle}>
              Got it!
            </Typography>
            &nbsp;Let's talk about next steps:
          </Typography>
        </Grid>
        <Grid container item direction="column" alignItems="center" justify="space-between"
              className={classes.formFieldsContainer}>
          <Grid container justify="center" item className={classes.nextStepTextContainer}>
            <Typography variant="body1" color="textPrimary">
              Get a head start on approval by completing your brand profile, or schedule with a meeting with your
              dedicated loan originator
              <br/>
              <br/>
              We know how busy founders can be, so we’ll make sure everything is in your inbox, too.
            </Typography>
          </Grid>
        </Grid>
        <Grid container item>
          <Button
            color="primary"
            variant="contained"
            aria-label="start brand profile"
            className={classes.button}
            fullWidth={true}
            href={`/apply`}
          >
            <Typography variant="button" align="center">Start Brand Profile</Typography>
          </Button>
        </Grid>
      </Grid>
      <Hidden mdDown>
        <Grid item className={classes.geogrid}>
          <CssGeogrid stepNumber={4}/>
        </Grid>
      </Hidden>
      <Hidden lgUp>
        <Grid container item direction="column" className={classes.footer} alignContent="flex-end">
          <GeogridShapeContainer color="#FB7C6A" shape='triangleUpRight' pageIndicator/>
          <GeogridShapeContainer color="#CEE4D1" shape='triangleUpRight' pageIndicator/>
          <GeogridShapeContainer color="#565190" shape='triangleUpRight' pageIndicator/>
        </Grid>
      </Hidden>
    </Grid>
  )
}


export default NextSteps

