import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Grid, Hidden, Typography} from '@material-ui/core'
import {ProcessStep} from './ProcessSteps'
import abTheme from '../../../common/Theme'

export const useStyles = makeStyles<Theme, StepDescriptionProps>((theme: Theme) => ({
  root: {
    maxWidth: '450px'
  },
  preTitle: props => ({
    color: `${props.step.preTitleColor}`
  })
}))

export type StepDescriptionProps = {
  step: ProcessStep
}

const StepDescription: FunctionComponent<StepDescriptionProps> = (props) => {
  const classes = useStyles(props)

  return (
    <Grid container direction="column" spacing={1} className={classes.root}>
      <Grid container item justify="flex-start">
        <Hidden mdUp>
          <Grid item xs={2}>
            <img src={props.step.icon} alt="step icon"/>
          </Grid>
        </Hidden>
        <Grid container item direction="column" xs={10}>
          <Grid item>
            <Typography variant="overline" className={classes.preTitle}> {props.step.preTitle}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3" style={{color: "#3D3D3D"}}>
              {props.step.title}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="body1" color="textSecondary">
          {props.children}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default StepDescription