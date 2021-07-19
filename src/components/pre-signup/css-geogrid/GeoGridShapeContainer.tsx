import React, {FunctionComponent} from 'react'
import {Grid} from '@material-ui/core'
import {GeoGridColors, GeogridShapes} from './CssGeogrid'
import GeogridShape, {GeogridShapeProps} from './GeogridShape'
import {makeStyles, Theme} from '@material-ui/core/styles'

export const useStyles = makeStyles<Theme, GeogridShapeProps>((theme: Theme) => ({
  shapeContainer: props => ({
    width: props.pageIndicator ? '32px' : '122px',
    height: props.pageIndicator ? '32px' : '122px',
    [theme.breakpoints.down('xs')]: {
      width: props.pageIndicator ? '24px' : '122px',
      height: props.pageIndicator ? '24px' : '122px'
    },
  })
}))
export type GeogridShapeContainerProps = {
  color: GeoGridColors,
  fade?: boolean,
  shape: GeogridShapes,
  secondaryColor?: GeoGridColors,
  pageIndicator?: boolean
}

const GeogridShapeContainer: FunctionComponent<GeogridShapeContainerProps> = (props) => {
  const classes = useStyles(props)

  return (
    <Grid item className={classes.shapeContainer} style={{position: 'relative', overflow: 'hidden'}}>
      <GeogridShape color="#FDF3EB"
                    shape={props.shape}
                    shadow
                    pageIndicator={props.pageIndicator}/>
      <GeogridShape color={props.color}
                    shape={props.shape}
                    fade={props.fade}
                    secondaryColor={props.secondaryColor}
                    pageIndicator={props.pageIndicator}/>
    </Grid>
  )
}

export default GeogridShapeContainer