import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Grid, Typography, useMediaQuery} from '@material-ui/core'
import Countdown from "react-countdown";
import MixedFeelingsByTTheme, {COLORS} from "../../../../theme/MixedFeelingsByTTheme";

export const useStyles = makeStyles((theme: Theme) => ({
    counterSection: {
        height: "155px",
        width: "155px",
        borderRadius: "85px",
        backgroundColor: COLORS.TRANSPARENTWHITE,
        border: `4px solid ${theme.palette.primary.main}`
    }
}))


interface IProps {
    launchDate: Date
}

const CountdownToLaunch: FunctionComponent<IProps> = (props) => {
    const classes = useStyles(MixedFeelingsByTTheme)
    const Completionist = () => <span>Congratulations! If your site is not already here please contact hello@thehandsomestnerd.com launched!</span>

    const smDown = useMediaQuery(MixedFeelingsByTTheme.breakpoints.down('sm'))

    const pluralize = (subject: string) => {
        return subject + 's'
    }

    const CounterNumberRender = (props: { value: number, units: string }) => {
        return <Grid container item alignItems='center' justifyContent='center' direction='column'
                     className={classes.counterSection}>
            <Grid item><Typography variant='h1' color='primary'
                                   style={{textTransform: "uppercase"}}>{props.value}</Typography></Grid>
            <Grid item><Typography variant='h6'
                                   style={{textTransform: "uppercase", color: "black"}}>{props.value !== 1 ? pluralize(props.units) : props.units}</Typography></Grid>
        </Grid>
    }

    const renderer = (date: { days: number, hours: number, minutes: number, seconds: number, completed: boolean }) => {
        if (date.completed) {
            // Render a complete state
            return <Completionist/>;
        } else {
            // Render a countdown
            return (
                <Grid container item spacing={smDown ? 1 : 6} justifyContent='center'>
                    <Grid item xs={6} md={3} container justifyContent='center'>
                        <CounterNumberRender value={date.days} units={'day'}/>
                    </Grid>
                    <Grid item xs={6} md={3} container justifyContent='center'>
                        <CounterNumberRender value={date.hours} units={'hour'}/>
                    </Grid>
                    <Grid item xs={6} md={3} container justifyContent='center'>
                        <CounterNumberRender value={date.minutes}
                                             units={'minute'}/>
                    </Grid>
                    <Grid item xs={6} md={3} container justifyContent='center'>
                        <CounterNumberRender
                            value={date.seconds} units={'second'}/>
                    </Grid>
                </Grid>
            );
        }
    };

    return (
        <Grid item container justifyContent='center'>
                <Countdown date={props.launchDate} renderer={renderer}/>
        </Grid>
    )
}

export default CountdownToLaunch