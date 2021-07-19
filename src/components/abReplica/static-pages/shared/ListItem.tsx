import React, {FunctionComponent} from 'react'
import {Grid, Typography} from '@material-ui/core'

export type ListItemProps = {
  title?: string
  description?: string
}

const ListItem: FunctionComponent<ListItemProps> = ({title, description}) => {
  return (
    <Grid container item alignItems="center" spacing={2}>
      <Grid item xs={12}>
        <Typography variant="overline" color="primary">{title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" color="textPrimary">{description}</Typography>
      </Grid>
    </Grid>
  )
}

export default ListItem