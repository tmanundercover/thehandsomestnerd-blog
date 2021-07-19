import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {SanityImage} from '../../cmsClient'
import {Grid, Typography} from '@material-ui/core'
import BlockContentContainer from '../../BlockContentContainer'
import abTheme from '../../common/Theme'

export const useStyles = makeStyles((theme: Theme) => ({
  left3: {
    color: abTheme.palette.accentText.blue.main,
  },
  rightImage: {
    minWidth: '150px',
    maxWidth: '496px',
  }
}))

export type StoryStartProps = {
  title?: string
  left1?: string
  left2?: string
  left3?: string
  rightImage?: SanityImage
}

const StoryStart: FunctionComponent<StoryStartProps> = (props) => {
  const classes = useStyles(abTheme)

  return (
    <Grid container item direction="column" spacing={2}>
      <Grid item>
        {props?.title && <BlockContentContainer body={props?.title}/>}
      </Grid>
      <Grid container item spacing={4}>
        <Grid item xs={12} md={6}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="overline" color="primary">{props?.left1}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" color="textSecondary">
                {props?.left2}
              </Typography>
            </Grid>
            <Grid item className={classes.left3}>
              <Typography variant="caption">{props?.left3}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={12} md={6} direction="column" alignItems="center">
          <Grid item xs={12}>
            <img className={classes.rightImage} src={props?.rightImage?.asset.url} width="100%"/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default StoryStart