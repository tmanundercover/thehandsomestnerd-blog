import {CircularProgress, Grid, makeStyles, Theme, Typography, useTheme} from '@material-ui/core'
import React, {FunctionComponent} from 'react'
import MixedFeelingsByTTheme, {raleway} from "../../../../theme/MixedFeelingsByTTheme";
import useCustomStyles from "../Styles";
import Logo from "../../../transform-hw/logo/Logo";


export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100vw',
        // backgroundColor: "whitesmoke"
    }
}))

const LoadingPage: FunctionComponent = (props) => {
    const theme = useTheme()
    const globalClasses = useCustomStyles(MixedFeelingsByTTheme)

    return (
        <Grid container item justifyContent='center' alignItems='center'
              alignContent='center'  className={globalClasses.fullscreen}>
            <Logo isCenter height={200}/>
            <Grid item container justifyContent='center' spacing={3}>
                <Grid item container justifyContent='center'>
                    <Typography  align='center' variant='h6' style={{...raleway,color:"black"}}>Loading...</Typography>
                </Grid>
                <Grid item>
                    <CircularProgress size={40}/>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default LoadingPage