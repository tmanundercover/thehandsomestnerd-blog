import {CircularProgress, Grid, makeStyles, Theme, Typography, useTheme} from '@material-ui/core'
import React, {FunctionComponent} from 'react'
import TransformHWTheme, {COLORS} from "../../../../theme/transform-hw/TransformHWTheme";
import {useThwStyles} from "../Styles";
import Logo from "../../logo/Logo";


export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100vw',
        // backgroundColor: "whitesmoke"
    }
}))

const LoadingPage: FunctionComponent = (props) => {
    const theme = useTheme()
    const globalClasses = useThwStyles(TransformHWTheme)

    return (
        <Grid container item justifyContent='center' alignItems='center'
              alignContent='center' style={{backgroundColor: COLORS.DARKBLUE}} className={globalClasses.fullscreen}>
            <Logo isCenter height={200}/>
            <Grid item container justifyContent='center' spacing={3}>
                <Grid item container justifyContent='center'>
                    <Typography align='center' color='primary' variant='h6'>Loading...</Typography>
                </Grid>
                <Grid item>
                    <CircularProgress size={40}/>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default LoadingPage