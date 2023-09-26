import React from 'react';
import {ServiceAmenityType} from "../BlockContentTypes";

export type QrCodeContextType = {
    qr_code_value?: string
    openSnackbar?: (url: string) => any
};

const QrCodeContext = React.createContext<QrCodeContextType>({});

export default QrCodeContext;
