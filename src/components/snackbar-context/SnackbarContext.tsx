import React from 'react';

export type SnackbarContextType = {
    openSnackbar?: (message: any) => void,
    handleSnackbarClose?: () => void
};

const SnackbarContext = React.createContext<SnackbarContextType>({});

export default SnackbarContext;
