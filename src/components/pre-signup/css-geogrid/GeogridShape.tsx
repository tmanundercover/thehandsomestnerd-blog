import React, {FunctionComponent} from "react";
import {Collapse} from "@material-ui/core";
import {GeoGridColors, GeogridShapes} from "./CssGeogrid";
import {makeStyles, Theme} from "@material-ui/core/styles";

  const xsmallPageIndicator = {size:24, hypotenuse:17}
  const smallPageIndicatorSize = {size:32,hypotenuse:23}
  const defaultShapeSize = {size:122,hypotenuse: 86}


export const useGeogridShapeStyles = makeStyles<Theme, GeogridShapeProps>((theme: Theme) => ({
  root: props => ({
    position: 'relative',
    width: props.pageIndicator ? '32px' : '122px',
    height: props.pageIndicator ? '32px' : '122px',
    [theme.breakpoints.down('xs')]: {
      width: props.pageIndicator ? '24px' : '122px',
      height: props.pageIndicator ? '24px' : '122px',
    },
  }),
  innerRoot: props => ({
    width: props.pageIndicator ? '32px' : '122px',
    height: props.pageIndicator ? '32px' : '122px',
    top: props.pageIndicator ? -16 : -61,
    [theme.breakpoints.down('xs')]: {
      width: props.pageIndicator ? '24px' : '122px',
      height: props.pageIndicator ? '24px' : '122px',
      top: props.pageIndicator ? -16 : -61,
    },
    position: 'absolute',
    backgroundColor: 'white'
  }),
  circle: {
    borderRadius: '61px'
  },
  triangle: props => ({
    width: 0,
    height: 0,
    borderWidth: props.pageIndicator ? '23px' : '86px',
    [theme.breakpoints.down('xs')]: {
      borderWidth: props.pageIndicator ? '17px' : '86px',
    },
    borderStyle: 'solid',
    position: 'absolute'
  }),
  triangleUpRight: props => ({
    borderTopColor: 'transparent !important',
    borderLeftColor: 'transparent !important',
    borderRightColor: 'transparent !important',
    transform: 'rotate(45deg)',
    bottom: props.pageIndicator ? '10px' : '36px',
    left: props.pageIndicator ? '10px' : '36px',
    [theme.breakpoints.down('xs')]: {
      bottom: props.pageIndicator ? '7px' : '36px',
      left: props.pageIndicator ? '7px' : '36px',
    }
  }),
  triangleDownRight: {
    borderTopColor: 'transparent !important',
    borderBottomColor: 'transparent !important',
    borderRightColor: 'transparent !important',
    bottom: '-86px',
    transform: 'rotate(45deg)',
    left: '36px'
  },
  triangleUpLeft: {
    borderTopColor: 'transparent !important',
    borderLeftColor: 'transparent !important',
    borderRightColor: 'transparent !important',
    transform: 'rotate(315deg)',
    top: '-86px',
    right: '36px'
  },
  triangleDownLeft: {
    borderBottomColor: 'transparent !important',
    borderLeftColor: 'transparent !important',
    borderRightColor: 'transparent !important',
    transform: 'rotate(45deg)',
    top: '36px',
    right: '36px'
  },
  semiCircleMask: {
    overflow: 'hidden'
  },
  semiCircleDown: {
    width: '122px',
    height: '122px',
    position: 'absolute',
    top: '61px'
  },
  shadowShape: {
    position: "absolute",
    top: 0
  }
}))

export type GeogridShapeProps = {
  color: GeoGridColors,
  fade?: boolean,
  shadow?: boolean,
  secondaryColor?: GeoGridColors,
  shape: GeogridShapes,
  pageIndicator?: boolean
}

const GeogridShape: FunctionComponent<GeogridShapeProps> = (props) => {
  const classes = useGeogridShapeStyles(props)

  const [halfShapeColor, setHalfShapeColor] = React.useState('')
  const [halfAndHalfShape, setHalfAndHalfShape] = React.useState(false)
  const [shapeStyles, setShapeStyles] = React.useState('')
  const [innerShapeBackgroundColor, setInnerShapeBackgroundColor] = React.useState('')
  const [backgroundColor, setBackgroundColor] = React.useState('')
  const [borderColor, setBorderColor] = React.useState('')
  const [innerShapeStyles, setInnerShapeStyles] = React.useState('')

  React.useEffect(() => {
    let classNames = [classes.root]
    let bgColor = 'transparent'
    let innerBGColor = 'transparent'
    let bdColor = 'transparent'
    let innerClassNames = []

    switch (props.shape) {
      case 'square':
        bgColor = props.color
        break

      case 'circle':
        classNames.push(classes.circle)
        bgColor = props.color
        break

      case 'semicirclesUp':
        classNames.push(classes.root)
        classNames.push(classes.semiCircleMask)
        setHalfAndHalfShape(true)
        innerClassNames.push(classes.root)
        innerClassNames.push(classes.circle)
        innerBGColor = props.color
        setHalfShapeColor(props.secondaryColor ? props.secondaryColor : 'transparent')
        break

      case 'semicircleDown':
        classNames.push(classes.root)
        classNames.push(classes.semiCircleMask)
        innerClassNames.push(classes.root)
        innerClassNames.push(classes.circle)
        innerClassNames.push(classes.semiCircleDown)
        innerBGColor = props.color
        break

      case 'triangleUpRight':
        innerClassNames.push(classes.triangle)
        innerClassNames.push(classes.triangleUpRight)
        bdColor = props.color
        break

      case 'triangleDownRight':
        innerClassNames.push(classes.triangle)
        innerClassNames.push(classes.triangleDownRight)
        bdColor = props.color
        break

      case 'triangleUpLeft':
        innerClassNames.push(classes.triangle)
        innerClassNames.push(classes.triangleUpLeft)
        bdColor = props.color
        break

      case 'triangleDownLeft':
        innerClassNames.push(classes.triangle)
        innerClassNames.push(classes.triangleDownLeft)
        bdColor = props.color
        break
    }

    setShapeStyles(classNames.join(' '))
    setBackgroundColor(bgColor)
    setInnerShapeBackgroundColor(innerBGColor)
    setBorderColor(bdColor)
    setInnerShapeStyles(innerClassNames.join(' '))
  })

  return (
    <div style={{overflow: 'hidden'}} className={props.shadow ? classes.shadowShape : ""}>
      <Collapse in={true} timeout={props.pageIndicator ? 400 : 1000} appear={props.fade} enter={props.shadow}>
        <div className={shapeStyles} style={{backgroundColor: backgroundColor}}>
          <div className={innerShapeStyles}
               style={{borderColor: borderColor, backgroundColor: innerShapeBackgroundColor}}></div>
          {halfAndHalfShape && <div className={classes.innerRoot}>
              <div className={innerShapeStyles} style={{backgroundColor: halfShapeColor}}>
              </div>
          </div>}
        </div>
      </Collapse>
    </div>
  )
}

export default GeogridShape