import React, {FunctionComponent} from 'react'
import {Grid} from '@material-ui/core'
import GeogridShapeContainer from './GeoGridShapeContainer'

export type GeogridShapes =
  'semicircleDown' | 'semicirclesUp' |
  'square' | 'circle' |
  'triangleUpRight' | 'triangleDownRight' | 'triangleUpLeft' | 'triangleDownLeft'


export type CssGeogridProps = {
  stepNumber: number
}

export type GeoGridColors = '#FDF3EB' | '#FB7C6A' | '#CEE4D1' | '#565190'

const CssGeogrid: FunctionComponent<CssGeogridProps> = (props) => {

  const step0Colors: GeoGridColors[] = [
    '#FDF3EB', '#FDF3EB', '#FDF3EB', '#FDF3EB',
    '#FDF3EB', '#FDF3EB', '#FDF3EB', '#FDF3EB',
    '#FDF3EB', '#FDF3EB', '#FDF3EB', '#FDF3EB',
    '#FDF3EB', '#FDF3EB', '#FDF3EB', '#FDF3EB'
  ]

  const step1Colors: GeoGridColors[] = [
    '#FB7C6A', '#FDF3EB', '#FDF3EB', '#FDF3EB',
    '#FDF3EB', '#FDF3EB', '#FDF3EB', '#FB7C6A',
    '#FDF3EB', '#FDF3EB', '#FDF3EB', '#FB7C6A',
    '#FDF3EB', '#FDF3EB', '#FB7C6A', '#FDF3EB'
  ]

  const step2Colors: GeoGridColors[] = [
    '#FB7C6A', '#FDF3EB', '#CEE4D1', '#FDF3EB',
    '#FDF3EB', '#FDF3EB', '#CEE4D1', '#FB7C6A',
    '#CEE4D1', '#FDF3EB', '#FDF3EB', '#FB7C6A',
    '#FDF3EB', '#CEE4D1', '#FB7C6A', '#FDF3EB'
  ]

  const step3Colors: GeoGridColors[] = [
    '#FB7C6A', '#FDF3EB', '#CEE4D1', '#565190',
    '#FDF3EB', '#565190', '#CEE4D1', '#FB7C6A',
    '#CEE4D1', '#FDF3EB', '#565190', '#FB7C6A',
    '#FDF3EB', '#CEE4D1', '#FB7C6A', '#565190'
  ]

  const nextstepColors: GeoGridColors[] = [
    '#FB7C6A', '#CEE4D1', '#CEE4D1', '#565190',
    '#FB7C6A', '#565190', '#CEE4D1', '#FB7C6A',
    '#CEE4D1', '#FB7C6A', '#565190', '#FB7C6A',
    '#565190', '#CEE4D1', '#FB7C6A', '#565190'
  ]

  const getStepColors = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return step1Colors
      case 2:
        return step2Colors
      case 3:
        return step3Colors
      case 4:
        return nextstepColors
      default:
        return step0Colors
    }
  }

  const [currentStepColors, setCurrentStepColors] = React.useState<GeoGridColors[]>(getStepColors(props.stepNumber - 1))
  const [currentStepSecondaryColor, setCurrentStepSecondaryColor] = React.useState<GeoGridColors>('#FDF3EB')

  React.useEffect(() => {
    switch (props.stepNumber) {
      case 1:
        setCurrentStepColors(step1Colors)
        break
      case 2:
        setCurrentStepColors(step2Colors)
        break
      case 3:
        setCurrentStepColors(step3Colors)
        break
      case 4:
        setCurrentStepColors(nextstepColors)
        setCurrentStepSecondaryColor('#565190')
        break
    }
  }, [props.stepNumber])

  const checkFade = (index: number) => {
    return getStepColors(props.stepNumber)[index] !== getStepColors(props.stepNumber - 1)[index]
  }

  return (
    <Grid container direction="column">
      <Grid container>
        <GeogridShapeContainer color={currentStepColors[0]}
                               shape="triangleUpRight"
                               fade={checkFade(0)}/>
        <GeogridShapeContainer color={currentStepColors[1]}
                               secondaryColor={currentStepSecondaryColor}
                               shape="semicirclesUp"
                               fade={checkFade(1)}/>
        <GeogridShapeContainer color={currentStepColors[2]}
                               shape="triangleUpRight"
                               fade={checkFade(2)}/>
        <GeogridShapeContainer color={currentStepColors[3]}
                               shape="circle"
                               fade={checkFade(3)}/>
      </Grid>
      <Grid container>
        <GeogridShapeContainer color={currentStepColors[4]}
                               shape="circle"
                               fade={checkFade(4)}/>
        <GeogridShapeContainer color={currentStepColors[5]}
                               shape="square"
                               fade={checkFade(5)}/>
        <GeogridShapeContainer color={currentStepColors[6]}
                               shape="triangleDownRight"
                               fade={checkFade(6)}/>
        <GeogridShapeContainer color={currentStepColors[7]}
                               shape="triangleUpLeft"
                               fade={checkFade(7)}/>
      </Grid>
      <Grid container>
        <GeogridShapeContainer color={currentStepColors[8]}
                               shape="square"
                               fade={checkFade(8)}/>
        <GeogridShapeContainer color={currentStepColors[9]}
                               shape="triangleUpLeft"
                               fade={checkFade(9)}/>
        <GeogridShapeContainer color={currentStepColors[10]}
                               shape="triangleDownLeft"
                               fade={checkFade(10)}/>
        <GeogridShapeContainer color={currentStepColors[11]}
                               shape="square"
                               fade={checkFade(11)}/>
      </Grid>
      <Grid container>
        <GeogridShapeContainer color={currentStepColors[12]}
                               shape="semicircleDown"
                               fade={checkFade(12)}/>
        <GeogridShapeContainer color={currentStepColors[13]}
                               shape="square"
                               fade={checkFade(13)}/>
        <GeogridShapeContainer color={currentStepColors[14]}
                               shape="circle"
                               fade={checkFade(14)}/>
        <GeogridShapeContainer color={currentStepColors[15]}
                               shape="square"
                               fade={checkFade(15)}/>
      </Grid>
    </Grid>
  )
}

export default CssGeogrid