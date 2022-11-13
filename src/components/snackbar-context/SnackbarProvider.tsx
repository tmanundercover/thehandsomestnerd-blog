import React, {FunctionComponent, PropsWithChildren, useMemo,} from 'react';
import SnackbarContext from './SnackbarContext';
import {Snackbar} from "@material-ui/core";

type IProps = {
    setLoginSnackbar?: (isOpen: boolean) => void
    setSnackbarMessage?: (message: string) => void
};

const SnackbarProvider: FunctionComponent<IProps & PropsWithChildren> = (
    props: PropsWithChildren<IProps>,
) => {
    const [snackbarMessage, setSnackbarMessage] = React.useState<any>()
    const [snackbarOpen, setSnackbarOpen] = React.useState<boolean>(false)

    const handleSnackbarClose = () => {
        setSnackbarOpen(false)
    }

    const openSnackbar = (message: any) => {
        setSnackbarMessage(message)
        setSnackbarOpen(true)
    }

    const newValue = useMemo(
        () => ({
            openSnackbar,
            handleSnackbarClose
        }),
        [
            openSnackbar,
            handleSnackbarClose
        ],
    );

    return (
        <SnackbarContext.Provider value={newValue}>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                open={snackbarOpen}
                autoHideDuration={15000}
                onClose={handleSnackbarClose}
                message={snackbarMessage}
            />
            {props.children}
        </SnackbarContext.Provider>
    );
};

export default SnackbarProvider;
