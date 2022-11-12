import React, {FunctionComponent} from 'react'
import {Grid, Typography} from '@material-ui/core'
import {Check} from "@material-ui/icons";
import {v4 as uuidv4} from 'uuid'


interface IProps {
    text: string
    color: 'inherit' | 'primary' | 'secondary' | 'action' | 'disabled' | 'error'
}

const ResponsiveBullet: FunctionComponent<IProps> = (props: IProps) => {
    return (<Grid key={uuidv4()} container item sm={6} alignItems='center'>
        <Grid container item spacing={2}>
            <Grid item xs={2} container justifyContent='flex-end'><Check color={props.color}/></Grid>
            <Grid item xs={10}>
                <Typography>{props.text}</Typography>
            </Grid>
        </Grid>
    </Grid>)
}

export default ResponsiveBullet