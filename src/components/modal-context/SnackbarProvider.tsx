import React, {FunctionComponent, PropsWithChildren, useMemo,} from 'react';
import SnackbarContext from './SnackbarContext';
import {Grid, Snackbar} from "@material-ui/core";
import Countdown from "react-countdown";
import SecondsCountdownButton from "./SecondsCountdownButton";
import {useCommonStyles} from "../../common/sanityIo/CommonStyles";
import MixedFeelingsByTTheme from "../../theme/MixedFeelingsByTTheme";
import {makeStyles, Theme} from "@material-ui/core/styles";


export const useStyles = makeStyles((theme: Theme) => ({
    snackRoot: {
        // "& .MuiSnackbarContent-root": {
        //     backgroundColor: 'gray',
        //
        // }


    },
}))

type IProps = {
    setLoginSnackbar?: (isOpen: boolean) => void
    setSnackbarMessage?: (message: string) => void
};

export interface SnackbarMessage {
    message: string;
    key: number;
}

const SnackbarProvider: FunctionComponent<IProps & PropsWithChildren> = (
    props: PropsWithChildren<IProps>,
) => {

    const classes = useStyles(MixedFeelingsByTTheme)
    const [snackbarOpen, setSnackbarOpen] = React.useState<boolean>(false)
    const [snackPack, setSnackPack] = React.useState<readonly SnackbarMessage[]>([]);
    const [autoCloseTime, setAutoCloseTime] = React.useState<number | undefined>(15)
    const [messageInfo, setMessageInfo] = React.useState<SnackbarMessage | undefined>(
        undefined,
    );

    React.useEffect(() => {
        if (snackPack.length && !messageInfo) {
            // Set a new snack when we don't have an active one
            setMessageInfo({...snackPack[0]});
            setSnackPack((prev) => (prev.slice(1)));

            setSnackbarOpen(true);
        } else if (snackPack.length && messageInfo && snackbarOpen) {
            // Close an active snack when a new one is added
            setSnackbarOpen(false);
        }
    }, [snackPack, messageInfo, snackbarOpen]);

    const handleSnackbarClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {

            return;
        }

        setSnackbarOpen(false)
    }

    const handleExited = () => {
        setMessageInfo(undefined);
        setSnackbarOpen(false)
    };

    const openSnackbar = (message: any, time?: number) => {
        setAutoCloseTime(time)
        setSnackPack((prev) => [...prev, {message, key: new Date().getTime()}]);

        // setSnackbarOpen(state=>!state)
    }

    const newValue = useMemo(
        () => ({
            openSnackbar,
            handleSnackbarClose
        }),
        []
    );
    return (
        <SnackbarContext.Provider value={newValue}>
            <Grid container item>
                <Snackbar
                    className={classes.snackRoot}
                    key={messageInfo ? messageInfo.key : undefined}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center'
                    }}
                    TransitionProps={{onExited: handleExited}}
                    open={snackbarOpen}
                    autoHideDuration={15000}
                    onClose={handleSnackbarClose}
                    message={messageInfo ? messageInfo.message : undefined}
                    action={
                        <Grid item container alignContent='center' alignItems='center'>
                            <Grid item>
                                <Countdown
                                    date={(new Date(Date.now() + 14000))}
                                    renderer={
                                        (date) => (<SecondsCountdownButton date={date}/>)
                                    }
                                />
                            </Grid>
                        </Grid>
                    }
                />
            </Grid>
            <Grid container item>
            {props.children}
            </Grid>
        </SnackbarContext.Provider>
    );
};

export default SnackbarProvider;
