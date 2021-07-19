import React, {FunctionComponent} from 'react'
import BlockContent from '@sanity/block-content-to-react'
import {Grid} from '@material-ui/core'
import {abBlockSerializers} from './common/sanityIo/BlockContentRenderer'
import {useCommonStyles} from './common/sanityIo/CommonStyles'
import theme from './common/Theme'
import sanityClient from '../../sanityClient'

export type BlockContentLayoutContainerProps = { content?: any }

const BlockContentLayoutContainer: FunctionComponent<BlockContentLayoutContainerProps> = (props) => {
  const classes = useCommonStyles(theme)

  return <Grid container direction="column" spacing={2}>
    {props?.content?.content?.map((columnLayoutContainer: any, index: number) => {
      switch (columnLayoutContainer._type) {
        case 'column1BlockContent':
          return <Grid key={index} container item xs={12} className={classes.layoutContainer}>
            <Grid item xs={12}>
              {columnLayoutContainer.content && <BlockContent
                blocks={columnLayoutContainer.content}
                serializers={abBlockSerializers}
                projectId={sanityClient.config().projectId}
                dataset={sanityClient.config().dataset}
              />}
            </Grid>
          </Grid>
        case 'column2BlockContent':
          return <Grid key={index} container item className={classes.layoutContainer} spacing={2}>
            <Grid item xs={12} md={6}>
              {columnLayoutContainer.column1.content && <BlockContent
                blocks={columnLayoutContainer.column1.content}
                serializers={abBlockSerializers}
                projectId={sanityClient.config().projectId}
                dataset={sanityClient.config().dataset}
              />}
            </Grid>
            <Grid item xs={12} md={6}>
              {columnLayoutContainer.column2.content && <BlockContent
                blocks={columnLayoutContainer.column2.content}
                serializers={abBlockSerializers}
                projectId={sanityClient.config().projectId}
                dataset={sanityClient.config().dataset}
              />}
            </Grid>
          </Grid>
      }
    })}</Grid>
}

export default BlockContentLayoutContainer
