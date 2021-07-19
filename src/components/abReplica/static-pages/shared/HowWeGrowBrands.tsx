import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Grid} from '@material-ui/core'
import BlockContentContainer from '../../BlockContentContainer'
import BlockContentLayoutContainer from '../../BlockContentLayoutContainer'

export const useStyles = makeStyles((theme: Theme) => ({}))

export type HowWeGrowBrandsProps = {
  title?: string
  content?: any
}

const HowWeGrowBrands: FunctionComponent<HowWeGrowBrandsProps> = (props) => {
  return (
    <Grid container item direction="column" spacing={2}>
      <Grid item>
        {props?.title && <BlockContentContainer body={props.title}/>}
      </Grid>
      <Grid item container>
        {props?.content && <BlockContentLayoutContainer content={props?.content}/>}
      </Grid>
    </Grid>
  )
}

export default HowWeGrowBrands