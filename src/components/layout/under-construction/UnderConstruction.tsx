import React, {ChangeEvent, FunctionComponent, useState} from 'react'
import {
    Box,
    Button,
    CircularProgress,
    Grid,
    InputAdornment,
    makeStyles,
    TextField,
    Theme,
    Typography, useMediaQuery
} from '@material-ui/core'
import {useThwStyles} from "../Styles";
import TransformHWTheme from "../../../theme/transform-hw/TransformHWTheme";
import CountdownToLaunch from "./CountdownToLaunch";
import therapistHoldingHand from "./assets/therapistHoldingHand.jpg"
import clsx from "clsx";
import leadClient from "./leadClient";
import {useQuery} from "react-query";
import isEmail from 'validator/lib/isEmail';


const useStyles = makeStyles((theme: Theme) => ({
    fullscreenOverlay: {
        position: "absolute",
        backgroundColor: `rgba(0, 0, 0, .5)`
    },
    fullScreenImage: {
        position: "relative",
        backgroundImage: `url(${therapistHoldingHand})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    endAdornedInput: {
        "& .MuiFilledInput-adornedEnd": {
            paddingRight: 0
        },
        "& .MuiOutlinedInput-adornedEnd": {
            paddingRight: 0
        }
    }
}))

const UnderConstruction: FunctionComponent = (props) => {
    const classes = useThwStyles(TransformHWTheme)
    const underConstructionClasses = useStyles(TransformHWTheme)

    const smDown = useMediaQuery(TransformHWTheme.breakpoints.down('sm'))

    const [email, setEmail] = useState("")

    const {isLoading, isError, data, refetch, isRefetching} = useQuery(
        ['createLead'],
        () => {
            if ((!data && !isError) && email && email.length > 0) {
                return leadClient.createLead(email);
            }
            return undefined
        }
    );


    const createLead = async () => {
        refetch()
    }

    const getHelperText = () => {
        if ((data || isError) && !isEmail(email)) {
            return <Typography style={{color: TransformHWTheme.palette.error.main}} variant='subtitle1'>This is not a
                valid email address.</Typography>
        }

        if (data) {
            return <Typography style={{color: TransformHWTheme.palette.success.main}} variant='subtitle1'>Thank you for
                your submission!</Typography>
        }
        if (isError) {
            return <Typography style={{color: TransformHWTheme.palette.error.main}} variant='subtitle1'>Please Try your
                submission again later.</Typography>
        }

        return <Typography variant='subtitle1'>&nbsp;</Typography>
    }

    return (
        <Grid container className={clsx(classes.fullscreen, underConstructionClasses.fullScreenImage)}>
            <Grid container className={clsx(classes.fullscreen, underConstructionClasses.fullscreenOverlay)}
                  style={{
                      paddingBottom: smDown?0:TransformHWTheme.spacing(10)
                  }}
                  justifyContent='center' alignItems='center'>
                <Grid container item xs={11}>
                    <Typography variant={smDown ? 'h2' : 'h1'} align='center' color='textSecondary'>Transformative
                        Healing and Wellness is
                        Coming Soon...</Typography>
                </Grid>
                <Grid container item justifyContent='center'>
                    <CountdownToLaunch/>
                </Grid>
                <Grid container item justifyContent='center'>
                    <Grid item xs={10} md={8}>
                        <Typography variant='body1' color='textSecondary' align='center'>The Transformative Healing and
                            Wellness
                            Website is under
                            construction by the Handsomest Nerd. We will
                            be here soon
                            with exciting alternative psychology concepts, Subscribe to be notified.</Typography>
                    </Grid>
                </Grid>
                <Grid container item justifyContent='center'>
                    <Grid item container xs={11} md={5}>
                        <TextField fullWidth
                                   label={'Please Enter your Email'}
                                   variant='filled'
                                   type='email'
                                   value={email}
                                   onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                       setEmail(event.target.value)
                                   }}
                                   className={classes.endAdornedInput}
                                   InputProps={{
                                       endAdornment:
                                           <Button
                                               disabled={data || isError || (email && (email.length > 0) && !isEmail(email))}

                                               onClick={createLead}
                                               style={{height: "100%", width: "200px", borderRadius: " 0 5px 5px 0"}}
                                               color='primary'
                                               variant='contained'>{isLoading || isRefetching ?
                                               <CircularProgress style={{
                                                   color: "black",
                                                   width: "25px",
                                                   height: "25px"
                                               }}/> : "Subscribe"}</Button>
                                       ,
                                   }}/>
                    </Grid>
                    <Grid item container justifyContent='center'>
                        {getHelperText()}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default UnderConstruction