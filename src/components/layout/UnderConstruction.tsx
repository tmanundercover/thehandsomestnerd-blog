import React, {FunctionComponent} from 'react'
import {Grid} from '@material-ui/core'

const UnderConstruction: FunctionComponent = (props) => {
    return (
        <Grid container justifyContent='center' alignItems='center' style={{width: '100vw', height: '100vh'}} direction='column'>
            <Grid item>
                Transform Health and Wellness Under Construction
            </Grid>
            <Grid item>
                by
            </Grid>
            <Grid item>
                The Handsomest Nerd
            </Grid>
        </Grid>
    )
}

export default UnderConstruction