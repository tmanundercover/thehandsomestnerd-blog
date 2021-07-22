import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Grid} from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) => ({

}))

export type MainPaneProps = {

}

const MainPane: FunctionComponent<MainPaneProps> = (props) => {
  const classes = useStyles()
  React.useEffect(() => {

  }, [])

  return (
    <Grid container>
      <Grid item>transparent header</Grid>
      <Grid item></Grid>
    </Grid>
  )
}

export default MainPane