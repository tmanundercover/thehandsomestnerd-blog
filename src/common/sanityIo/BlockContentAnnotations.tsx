import React from 'react'
import {BlockContentPropsType, LinkType} from './BlockContentRenderer'
import {Grid, Link, List, ListItem, ListItemIcon, ListItemText, Typography} from '@material-ui/core'
import {FiberManualRecord} from '@material-ui/icons'
import {useCommonStyles} from './CommonStyles'

export const UtmLinkRender: React.FunctionComponent = (props: React.PropsWithChildren<{}> & BlockContentPropsType<LinkType>) => {

  return <Link href={props?.mark?.href}>{props.children}</Link>
}

export const ListRender: React.FunctionComponent = (props: React.PropsWithChildren<{}>) => {
  return <Grid container direction="column">
    <List>{props.children}</List>
  </Grid>
}

export const ListItemRender: React.FunctionComponent = (props: React.PropsWithChildren<{ node?: any, index?: number }>) => {
  const classes = useCommonStyles(props)
  return (<Grid item>
    <ListItem className={classes.listItemRoot}>
      <Grid container wrap="nowrap" alignItems="flex-start">
        <Grid item>
          <ListItemIcon className={classes.bulletIconContainer}>
            {props.node?.listItem && props.node?.listItem === 'bullet' ?
              <FiberManualRecord className={classes.bulletIcon}/>
              : <Typography variant="subtitle1"
                            className={classes.orderedListIndex}>{(props?.index ?? 0) + 1}.</Typography>}
          </ListItemIcon>
        </Grid>
        <Grid item wrap="nowrap">
          <ListItemText>{props.children}</ListItemText>
        </Grid>
      </Grid>

    </ListItem>
  </Grid>)
}

export default {
  UtmLinkRender,
  ListRender,
  ListItemRender,
}
