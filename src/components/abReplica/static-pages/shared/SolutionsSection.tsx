import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {ListItemType, SanitySolutions} from '../cmsStaticPagesClient'
import {Grid} from '@material-ui/core'
import ListItem from './ListItem'
import BlockContentContainer from '../../BlockContentContainer'
import ImageCarousel from './ImageCarousel'

export type SolutionsSectionProps = {
  sectionData?: SanitySolutions
  anchor?: string
}

const SolutionsSection: FunctionComponent<SolutionsSectionProps> = (props) => {
  return (
    <Grid container item direction="column" spacing={4} id="solutions-anchor">
      <Grid item xs={12} md={10} data-aos="fade-down" data-aos-anchor={`#${props.anchor}`}>
        {props.sectionData?.sectionHeader && <BlockContentContainer body={props.sectionData?.sectionHeader}/>}
      </Grid>
      <Grid container item spacing={4} alignItems="stretch" >
        <Grid item xs={12} md={6} data-aos="slide-right" data-aos-anchor={`#${props.anchor}`}>
          <Grid container spacing={4}>
            {props?.sectionData?.solutionList?.map((item: ListItemType, index: number) => {
              return <ListItem key={'solution-list-item-' + index} title={item.title} description={item.description}/>
            })
            }
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} data-aos="slide-left" data-aos-anchor={`#${props.anchor}`}>
          <ImageCarousel slug="home-page-carousel"/>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SolutionsSection