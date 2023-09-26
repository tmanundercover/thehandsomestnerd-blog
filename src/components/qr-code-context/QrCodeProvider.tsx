import React, {FunctionComponent, PropsWithChildren, useContext, useMemo, useReducer,} from 'react';
import {ServiceAmenityType} from "../BlockContentTypes";
import {Grid, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import {v4 as uuidv4} from "uuid";
import ToolTipWrap from "../transform-hw/ToolTipWrap";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import PageContext from "../page-context/PageContext";
import ColoredPng from "../colored-png/ColoredPng";
import SnackbarContext from "../modal-context/SnackbarContext";
import firebaseAnalyticsClient from "../../utils/firebase/FirebaseAnalyticsClient";
import QrCodeContext from "./QrCodeContext";
import QRCode from "react-qr-code";

type IProps = {};


const QrCodeProvider: FunctionComponent<IProps & PropsWithChildren> = (
    props: PropsWithChildren<IProps>,
) => {
    const pageContext = useContext(PageContext)
    const [qrCodeValue, setQrCodeValue] = React.useState<string>("")

    const snackbarContext = useContext(SnackbarContext)

    const openSnackbar = async (url: string) => {
        pageContext.analyticsId && firebaseAnalyticsClient.qrCodeShown && firebaseAnalyticsClient.qrCodeShown(url ?? "", pageContext.analyticsId)
        // await dispatch({type: "LOAD_QR_CODE", payload: {qr_code_value: qr_code_value}})
        setQrCodeValue(url)
        const snack = <Grid
            container
            style={{minWidth: "200px"}}
        >
            <div style={{ height: "256px",width: "256px" }}>
                {url && <QRCode
                    size={256}
                    style={{height: "auto", maxWidth: "100%", width: "100%"}}
                    value={url}
                    viewBox={`0 0 256 256`}
                />}
        </div>
        </Grid>

        snackbarContext.openSnackbar && await snackbarContext.openSnackbar(snack)
    }

    const newValue = useMemo(
        () => ({
            qr_code_value: qrCodeValue,
            openSnackbar
        }),
        [
            qrCodeValue,
            openSnackbar
        ]
    );

    return (
        <QrCodeContext.Provider value={newValue}>
            {props.children}
        </QrCodeContext.Provider>
    );
};

export default QrCodeProvider;
