import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Grid, Typography} from '@material-ui/core'
import thwClient from "../thwClient";
import cmsClient from "../../block-content-ui/cmsClient";
import {ThwServiceItemType} from "../../BlockContentTypes";
import ThwServiceItem from "../ThwServiceItem";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
    },
}))

interface IProps {
    thisServiceSlug?:string
}

const OtherServices: FunctionComponent<IProps> = (props:IProps) => {
    const classes = useStyles()

    const [theServices, setTheServices] = React.useState<ThwServiceItemType[]>([])

    const {isLoading, isError, data, isRefetching} = thwClient.useFetchServicesQuery(props.thisServiceSlug)

    React.useEffect(() => {
        console.log("services data",data)
        if (data)
            setTheServices(data)
    }, [data])

    return (<Grid container item>
        <Grid container item justifyContent='center'>
            <Typography variant='h4' color='secondary' gutterBottom>Other Services</Typography>
        </Grid>
        <Grid container item spacing={3} justifyContent='center'>
        {
            theServices.map((service)=>{
                return <ThwServiceItem showAmenities service={service} hideLearnMoreButton hideCtaButton/>
            })
        }
    </Grid></Grid>)
}

export default OtherServices