import React, {FunctionComponent, useState} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Grid, Typography, useMediaQuery} from '@material-ui/core'
import {ThwServiceItemType, ThwServicesSectionType} from "../BlockContentTypes";
import TransformHWTheme from "../../theme/transform-hw/TransformHWTheme";
import ImageWIthButtonOverlay from "../image-with-button-overlay/ImageWithButtonOverlay";
import cmsClient from "../abReplica/cmsClient";
import {ImageWithButtonOverlayAligmentEnum} from "../image-with-button-overlay/ImageWithButtonOverlayAligmentEnum";
import MediaQueries from "../layout/MediaQueries";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: '40px',
        height: 'max-content',
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
    const classes = useStyles(TransformHWTheme)
    console.log(props.sectionData)

    const [servicesList, setServicesList] = useState<ThwServiceItemType[]>()

    const mdDown = useMediaQuery(MediaQueries.mdDown)

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
            <Grid item container>
                <Typography variant='h4' align='center'>{props.sectionData.contentTitle}</Typography>
            </Grid>
            <Grid item container>
                <Typography variant='body1'>{props.sectionData.contentText}</Typography>
            </Grid>
            <Grid item container spacing={4} justifyContent='center'>
                {servicesList?.map((service: ThwServiceItemType, index: number) => {
                    return <Grid key={index} container item xs={12} sm={6} md={4} direction='column'>
                        <Grid container item>
                            <Grid item container>

                                <ImageWIthButtonOverlay
                                    buttonAlignment={mdDown? ImageWithButtonOverlayAligmentEnum.CENTER:ImageWithButtonOverlayAligmentEnum.RIGHT}
                                    imageAltText={service.imageSrcAltText}
                                                        variant='contained'
                                                        imageSrc={service.imageSrc} height={352}
                                                        ctaButtonText={service.ctaButtonText}/>
                            </Grid>
                            <Grid item container justifyContent='center'
                                  style={{marginTop: "16px", marginBottom: "16px"}}>
                                <Typography variant='body2'>{service.contentTitle}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1' align='center'>{service.contentText}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                })}
            </Grid>
        </Grid>
    )
}

export default ThwServicesSection