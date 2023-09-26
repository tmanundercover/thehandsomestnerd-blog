import React, {FunctionComponent, PropsWithChildren, useMemo,} from 'react';
import SnackbarContext from './SnackbarContext';
import {Grid, Snackbar} from "@material-ui/core";
import Countdown from "react-countdown";
import SecondsCountdownButton from "./SecondsCountdownButton";

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
            <Grid container item justifyContent='center'>
            <Snackbar
                key={messageInfo ? messageInfo.key : undefined}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                TransitionProps={{onExited: handleExited}}
                open={snackbarOpen}
                autoHideDuration={autoCloseTime == null ? null : autoCloseTime}
                onClose={handleSnackbarClose}
                message={messageInfo ? messageInfo.message : undefined}
                action={
                    <Grid item container alignContent='center' alignItems='center'>
                        <Grid item>
                            {autoCloseTime ? <Countdown
                                date={autoCloseTime ? (new Date(Date.now() + (autoCloseTime - 1000))) : undefined}
                                renderer={
                                    (date) => (<SecondsCountdownButton date={date} totalTimeSeconds={autoCloseTime}/>)
                                }
                            />:<Grid item container justifyContent='center'><SecondsCountdownButton totalTimeSeconds={autoCloseTime}/></Grid>}
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
