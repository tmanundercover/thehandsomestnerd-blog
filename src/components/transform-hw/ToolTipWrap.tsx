import React, {FunctionComponent, PropsWithChildren, ReactElement, useContext} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Grid, Tooltip, Typography} from '@material-ui/core'
import {ServiceAmenityType} from "../BlockContentTypes";
import MediaQueriesContext from "../media-queries-context/MediaQueriesContext";
import AmenityContext from "../amenity-context/AmenityContext";
import SnackbarContext from "../modal-context/SnackbarContext";

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
    const amenityContext = useContext(AmenityContext)

    return <Grid container xs={6} item
                 onClick={() => {
                     amenityContext.openSnackbar && amenityContext.openSnackbar(props.serviceTitle, props.amenity)
                 }}>
        <Grid item>
            <Tooltip disableHoverListener={mediaQueriesContext.smDown} title={
                <Grid container style={{maxWidth: "160px"}} justifyContent='center'>
                    <Typography
                        variant='subtitle1' color='textSecondary'>{props.amenity.title}</Typography>
                    <Typography
                        variant='subtitle2' color='textSecondary'>{props.amenity.description}</Typography>
                </Grid>
            }>
                {props.children as ReactElement}
            </Tooltip>
        </Grid>
    </Grid>
}

export default ToolTipWrap