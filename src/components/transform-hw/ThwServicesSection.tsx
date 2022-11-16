import React, {FunctionComponent, useContext, useState} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Grid, Typography} from '@material-ui/core'
import {ThwServiceItemNoRefType, ThwServicesSectionType} from "../BlockContentTypes";
import cmsClient from "../block-content-ui/cmsClient";
import mediaQueries from "../../utils/mediaQueries";
import ThwServiceItem from "./ThwServiceItem";
import thwClient from "./thwClient";
import PageContext from "../page-context/PageContext";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(6),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(5, 2, 5)
        },
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
    const classes = useStyles()

    const pageContext = useContext(PageContext)

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
                {pageContext.allServices?.map((service: ThwServiceItemNoRefType, index: number) => {
                    return <ThwServiceItem key={index} service={service}/>
                })}
            </Grid>
        </Grid>
    )
}

export default ThwServicesSection