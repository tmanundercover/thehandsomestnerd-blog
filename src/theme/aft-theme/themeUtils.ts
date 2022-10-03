import { useMediaQuery } from '@material-ui/core'
import AndaTheme from './AftTheme'

const useSmUp = (): boolean => {
  return useMediaQuery(AndaTheme.breakpoints.up('sm'))
}

const useSmDown = (): boolean => {
  return useMediaQuery(AndaTheme.breakpoints.down('xs'))
}

export { useSmDown, useSmUp }
