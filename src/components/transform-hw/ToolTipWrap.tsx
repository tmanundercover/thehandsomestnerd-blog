import React, {FunctionComponent, PropsWithChildren, ReactElement, useContext} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Grid, Tooltip, Typography} from '@material-ui/core'
import ColoredPng from "../colored-png/ColoredPng";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import SnackbarContext from "../snackbar-context/SnackbarContext";
import mediaQueries from "../../utils/mediaQueries";
import {ServiceAmenityType} from "../BlockContentTypes";
import PageContext from "../page-context/PageContext";
import MediaQueriesContext from "../media-queries-context/MediaQueriesContext";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {},
}))

interface IProps {
    amenity: ServiceAmenityType
    serviceTitle: string
}

const ToolTipWrap: FunctionComponent<PropsWithChildren & IProps> = (props: PropsWithChildren & IProps) => {
    const snackbarContext = useContext(SnackbarContext)
    const mediaQueriesContext = useContext(MediaQueriesContext)

    return !mediaQueriesContext.smDown ? <Tooltip title={
            <Grid container style={{maxWidth: "160px"}}>
                <Typography
                    variant='subtitle1' color='textSecondary'>{props.amenity.title}</Typography>
                <Typography
                    variant='subtitle2' color='textSecondary'>{props.amenity.description}</Typography>
            </Grid>
        }>
            {props.children as ReactElement}
        </Tooltip> :
        <Grid container xs={6} item
              onClick={() => {
                  snackbarContext.openSnackbar
                  && snackbarContext.openSnackbar(
                      <Grid
                          container
                          style={{minWidth: "200px"}}
                      >
                          <Grid item container xs={12} justifyContent='flex-end' alignItems='center' spacing={1} style={{marginBottom: "8px"}}>
                              <Typography gutterBottom
                                          variant='subtitle2'
                                          color='textSecondary'>{props.serviceTitle} Amenity</Typography>
                          </Grid>
                          <Grid item container xs={12}>
                              <Typography
                                  variant='body2' color='textSecondary'
                                  gutterBottom>{props.amenity.title}</Typography>
                          </Grid>
                          <Grid container item spacing={2} alignContent='center'
                                alignItems='stretch' wrap={"nowrap"}>
                              <Grid style={{maxWidth: "72px"}} item xs={2} container justifyContent='center'
                                    alignContent='center' alignItems='center'>
                                  <ColoredPng size={48} maskUrl={urlFor(props.amenity.imageSrc).url() ?? ""}
                                              color={"white"}/>
                              </Grid>
                              <Grid item container alignItems='center' alignContent='center'>
                                  <Typography gutterBottom
                                              variant='body1' color='textSecondary' style={{
                                      fontWeight: "normal",
                                  }}>{props.amenity.description}</Typography>
                              </Grid>
                          </Grid>

                      </Grid>)
              }}>{props.children}</Grid>
}

export default ToolTipWrap