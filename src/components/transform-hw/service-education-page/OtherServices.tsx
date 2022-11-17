import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {CircularProgress, Grid, Typography} from '@material-ui/core'
import thwClient from "../thwClient";
import {v4 as uuidv4} from 'uuid'
import {ThwServiceItemType} from "../../BlockContentTypes";
import ThwServiceItem from "../ThwServiceItem";
import TransformHWTheme from "../../../theme/transform-hw/TransformHWTheme";
import ProgressBar
    from "@sanity/types/parts/part.@sanity/components/build-snapshot/__legacy/@sanity/components/progress/ProgressBar";
import PageContext from "../../page-context/PageContext";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {},
}))

interface IProps {
    thisServiceSlug?: string
}

const OtherServices: FunctionComponent<IProps> = (props: IProps) => {
    const pageContext = useContext(PageContext)

    return (<Grid container item>
        <Grid container item justifyContent='center' style={{marginBottom: TransformHWTheme.spacing(4)}}>
            <Typography variant='h4' color='secondary'>Other Services</Typography>
        </Grid>
        <Grid container item spacing={3} justifyContent='center'>
            {
                pageContext.page?.servicesAvailable?.map((service) => {
                    return <ThwServiceItem key={uuidv4()} showAmenities service={service} hideLearnMoreButton
                                           hideCtaButton/>
                })
            }
        </Grid></Grid>)
}

export default OtherServices