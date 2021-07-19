import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import theme from '../../common/Theme'

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderTop: '1px solid rgba(0, 0, 0, 0.12)',
    borderBottom: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    width: '100%',
    height: '1px',
  },
}))

const HorizontalDivider: FunctionComponent = () => {
  const classes = useStyles(theme)

  return (
    <hr className={classes.root}/>
  )
}

export default HorizontalDivider