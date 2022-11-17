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
import AmenityContext from "../amenity-context/AmenityContext";

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
                                                   amenityContext.openSnackbar && amenityContext.openSnackbar(props.serviceTitle,props.amenity)
                                               }}>
        <Tooltip disableHoverListener={mediaQueriesContext.smDown} title={
            <Grid container style={{maxWidth: "160px"}}>
                <Typography
                    variant='subtitle1' color='textSecondary'>{props.amenity.title}</Typography>
                <Typography
                    variant='subtitle2' color='textSecondary'>{props.amenity.description}</Typography>
            </Grid>
        }>
            {props.children as ReactElement}
        </Tooltip>
    </Grid>
}

export default ToolTipWrap