import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {ListItemType, SanityOurServices} from '../cmsStaticPagesClient'
import {Grid, Typography} from '@material-ui/core'
import ListItem from './ListItem'
import abTheme from '../../common/Theme'

export const useStyles = makeStyles((theme: Theme) => ({
  title: {
    textTransform: 'uppercase',
    color: abTheme.palette.accentText.green.main,
  },
}))

export type HeadlineWithListProps = {
  sectionData?: SanityOurServices
  anchor?:string
}

const HeadlineWithList: FunctionComponent<HeadlineWithListProps> = (props) => {
  const classes = useStyles(abTheme)

  React.useEffect(() => {

  }, [])

  return (
    <Grid container direction="column" item spacing={2}>
      <Grid item xs={12} data-aos="slide-right" data-aos-anchor={`#${props.anchor}`}>
        <Typography variant="h6" className={classes.title}>
          {props?.sectionData?.title}
        </Typography>
      </Grid>
      <Grid item xs={12} >
        <Grid container alignItems="flex-start" spacing={4}>
          <Grid item xs={12} md={6} data-aos="slide-right" data-aos-anchor={`#${props.anchor}`}>
            <Typography variant="h4" color="textPrimary">
              {props?.sectionData?.sectionHeader}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} data-aos="slide-left" data-aos-anchor={`#${props.anchor}`}>
            <Grid container spacing={4}>
              {props?.sectionData?.serviceList?.map((item: ListItemType, index: number) => {
                return <ListItem key={'service-list-item-' + index} title={item.title} description={item.description}/>
              })
              }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HeadlineWithList