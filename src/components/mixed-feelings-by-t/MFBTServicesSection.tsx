import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Grid, Typography} from '@material-ui/core'
import {MfbtServiceItemNoRefType, MfbtServicesSectionType} from "../BlockContentTypes";
import PageContext from "../page-context/PageContext";
import MfbtServiceItem from "./MfbtServiceItem";
import bgImage from "./Shutterstock_290377286 (1).png";
import clsx from "clsx";
import useCustomStyles from "../mackenzies-mind/pages/Styles";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {

        padding: theme.spacing(6),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(5, 2, 5)
        },
        position:"relative",
        backgroundImage:`url("${bgImage}")`,
        minHeight: '500px',
        backgroundPosition: "bottom right",
        backgroundColor: 'white',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
    },
    contentBottom: {
        border: `1px solid ${theme.palette.secondary.main}`,
        padding: '20px'
    }
}))


interface IProps {
    sectionData: MfbtServicesSectionType
}

const MfbtServicesSection: FunctionComponent<IProps> = (props) => {
    const classes = useStyles()

    const pageContext = useContext(PageContext)
    const globalClasses = useCustomStyles({})

    return (
        <Grid container item className={classes.root} xs={12} direction='column' spacing={2} alignItems='center'>
            <Grid container item
                  className={clsx(globalClasses.fullSection, globalClasses.fullscreenWhiteOverlay)}>
            </Grid>
            <Grid container item>
                <Grid item container>
                    <Typography variant='body1'
                                gutterBottom
                                style={{fontStyle: "italic", paddingBottom: 24}}>{props.sectionData.contentPreTitle}</Typography>
                </Grid>
                <Grid item container justifyContent='center'>
                        <Typography color='primary' variant='h4' align='center'
                                    display='inline'
                                    style={{
                                        zIndex: 10
                                        // color: "#444444"
                            // backgroundColor: "#8a8989",
                            // color: "transparent",
                            // textShadow: "1px 1px 2px rgba(215, 215, 215,0.8)",
                            // WebkitBackgroundClip: "text",
                            // MozBackgroundClip: "text"
                        }}
                        >{props.sectionData.contentTitle}</Typography>
                </Grid>
            </Grid>
            <Grid item container>
                {props.sectionData?.contentTexts?.map((segment: string, index: number) => (<Grid item key={index}>
                    <Typography variant='body1' gutterBottom>{segment}</Typography>
                </Grid>))}
            </Grid>
                {props.sectionData.servicesList?.map((service: MfbtServiceItemNoRefType, index: number) => {
                    return <MfbtServiceItem showAmenities key={index} service={service}/>
                })}
        </Grid>
    )
}

export default MfbtServicesSection