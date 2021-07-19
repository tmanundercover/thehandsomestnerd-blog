import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Grid, Hidden, Link, Typography} from '@material-ui/core'
import step1WithCube from '../../../common/assets/processSteps/step-1-next-to-cube.svg'
import step2WithCube from '../../../common/assets/processSteps/step-2-next-to-cube.svg'
import step3WithCube from '../../../common/assets/processSteps/step-3-next-to-cube.svg'
import step1OnCube from '../../../common/assets/processSteps/step-1-on-cube.svg'
import step2OnCube from '../../../common/assets/processSteps/step-2-on-cube.svg'
import step3OnCube from '../../../common/assets/processSteps/step-3-on-cube.svg'
import step1Step2Separator from '../../../common/assets/processSteps/1-2-separator.svg'
import step2Step3Separator from '../../../common/assets/processSteps/2-3-separator.svg'
import StepDescription from './StepDescription'
import abTheme from '../../../common/Theme'

export const useStyles = makeStyles((theme: Theme) => ({
  root:{
    overflow: "hidden"
  },
  titleSection: {
    marginBottom: theme.spacing(4),
    textAlign: 'center'
  },
  title: {
    fontWeight: 300
  },
  accent: {
    color: abTheme.palette.accentText.green.main
  },
  step1: {
    marginLeft: '52px'
  },
  step2: {
    marginTop: '-35px',
    marginRight: '52px'
  },
  step3: {
    marginTop: '-35px',
    marginLeft: '52px'
  },
  applyLink: {
    textDecoration: 'underline',
    color: abTheme.palette.accentText.blue.main
  }
}))

export type ProcessStep = {
  preTitle: string
  preTitleColor: string
  title: string
  icon: string
}

const ProcessSteps: FunctionComponent<{ anchor: string }> = (props) => {
  const classes = useStyles(abTheme)

  const theme = abTheme

  const steps: ProcessStep[] = [
    {
      preTitle: 'In less than one minute:',
      preTitleColor: theme.palette.primary.main,
      title: 'Apply online',
      icon: step1OnCube
    },
    {
      preTitle: 'Get to know each other:',
      preTitleColor: abTheme.palette.accentText.blue.main,
      title: 'Build a profile',
      icon: step2OnCube
    },
    {
      preTitle: 'Put your capital to work:',
      preTitleColor: abTheme.palette.accentText.green.main,
      title: 'Close your funds',
      icon: step3OnCube
    }
  ]

  React.useEffect(() => {
  }, [])

  return (
    <Grid container item className={classes.root}>
      <Grid container justify="center" className={classes.titleSection} id={props.anchor}>
        <Grid item>
          <Typography variant="h2" color="textPrimary" className={classes.title}>
            We made the process <Typography component="span" variant="h2" className={classes.accent}>simple</Typography>.
          </Typography>
        </Grid>
      </Grid>
      <Hidden mdUp>
        <Grid container direction="column" alignItems="center" spacing={3}>
          <Grid xs={12} item data-aos="slide-right">
            <StepDescription step={steps[0]}>
              <Link href="/apply" className={classes.applyLink}>Apply now</Link> with a few clicks and a couple easy
              questions.
            </StepDescription>
          </Grid>
          <Grid item>
            <img src={step1Step2Separator}/>
          </Grid>
          <Grid container item data-aos="slide-left" data-aos-anchor={`#${props.anchor}`}>
            <StepDescription step={steps[1]}>
              Connect with your Originator and provide details about your brand’s performance.
            </StepDescription>
          </Grid>
          <Grid item>
            <img src={step2Step3Separator}/>
          </Grid>
          <Grid container item data-aos="slide-right" data-aos-anchor={`#${props.anchor}`}>
            <StepDescription step={steps[2]}>
              Once your profile is approved, funds are quickly transferred to your brand’s account.
            </StepDescription>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden smDown>
        <Grid container>
          <Grid container item direction="column" xs={5} justify="space-between" alignItems="flex-end">
            <Grid item data-aos="slide-right">
              <StepDescription step={steps[0]}>
                <Link href="/apply" className={classes.applyLink}>Apply now</Link> with a few clicks and a couple easy
                questions.
              </StepDescription>
            </Grid>
            <Grid item data-aos="slide-right">
              <StepDescription step={steps[2]}>
                Once your profile is approved, funds are quickly transferred to your brand’s account.
              </StepDescription>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Grid container direction="column" alignItems="center" spacing={1}>
              <Grid item className={classes.step1} data-aos="slide-down">
                <img src={step1WithCube}/>
              </Grid>
              <Grid item data-aos="fade-in">
                <img src={step1Step2Separator}/>
              </Grid>
              <Grid item className={classes.step2} data-aos="slide-down">
                <img src={step2WithCube}/>
              </Grid>
              <Grid item data-aos="fade-in" data-aos-duration={4000}>
                <img src={step2Step3Separator}/>
              </Grid>
              <Grid item className={classes.step3} data-aos="slide-down">
                <img src={step3WithCube}/>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item xs={5} alignItems="center" data-aos="slide-left">
            <StepDescription step={steps[1]}>
              Connect with your Originator and provide details about your brand’s performance.
            </StepDescription>
          </Grid>
        </Grid>
      </Hidden>
    </Grid>
)
}

export default ProcessSteps