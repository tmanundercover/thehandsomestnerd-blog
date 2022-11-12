import React, {FunctionComponent, useState} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Grid, Typography, useMediaQuery} from '@material-ui/core'
import {ThwServiceItemNoRefType, ThwServiceItemType, ThwServicesSectionType} from "../BlockContentTypes";
import ImageWIthButtonOverlay from "../image-with-button-overlay/ImageWithButtonOverlay";
import cmsClient from "../block-content-ui/cmsClient";
import {ImageWithButtonOverlayAligmentEnum} from "../image-with-button-overlay/ImageWithButtonOverlayAligmentEnum";
import MediaQueries from "../../utils/mediaQueries";
import mediaQueries from "../../utils/mediaQueries";
import LoadingButton from "../loading-button/LoadingButton";
import ThwServiceItem from "./ThwServiceItem";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: (props: any) => props.xsDown ? theme.spacing(5, 2, 5) : theme.spacing(6),
        minHeight: 'max-content',
        backgroundColor: '#f6f6f6'
    },
    contentBottom: {
        border: `1px solid ${theme.palette.secondary.main}`,
        padding: '20px'
    }
}))


interface IProps {
    sectionData: ThwServicesSectionType
}

const ThwServicesSection: FunctionComponent<IProps> = (props) => {
    const xsDown = mediaQueries.useXsDown()
    const mdDown = mediaQueries.useMdDown()
    const classes = useStyles({xsDown})

    const [servicesList, setServicesList] = useState<ThwServiceItemNoRefType[]>()

    React.useEffect(() => {
        const realizedServices = props.sectionData?.servicesList?.map((service) => {
            return cmsClient.fetchRef(service).then((serviceResp) => {
                return serviceResp
            })
        })

        Promise.all(realizedServices).then((response) => {
            setServicesList(response)
        }).catch(console.log)
    }, [props.sectionData])

    return (

        <Grid container item className={classes.root} xs={12} direction='column' spacing={2} alignItems='center'>
            <Grid container item>
                <Grid item container>
                    <Typography variant='body1'
                                style={{fontStyle: "italic"}}>{props.sectionData.contentPreTitle}</Typography>
                </Grid>
                <Grid item container wrap='nowrap'>
                    <Grid item>
                        <Typography color='secondary' variant='h4' align='center'
                                    display='inline'>{props.sectionData.contentTitle}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='h4'
                                    color='secondary' display='inline'
                                    style={{letterSpacing: "-.25em"}}>____</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container>
                {props.sectionData?.contentTexts?.map((segment: string, index: number) => (<Grid item key={index}>
                    <Typography variant='body1' gutterBottom>{segment}</Typography>
                </Grid>))}
            </Grid>
            <Grid item container spacing={4} justifyContent='center'>
                {servicesList?.map((service: ThwServiceItemNoRefType) => {
                    return <ThwServiceItem service={service}/>
                })}
            </Grid>
        </Grid>
    )
}

export default ThwServicesSection