import {Box, Button, CircularProgress, Grid, makeStyles, PropTypes} from '@material-ui/core'
import React, {FunctionComponent, PropsWithChildren, useContext} from 'react'
import MackenziesMindTheme from "../../theme/MackenziesMindTheme";
import {ButtonGroupMemberEnum} from "./ButtonGroupMemberEnum";
import firebaseAnalyticsClient from "../../utils/firebase/FirebaseAnalyticsClient";
import PageContext from "../page-context/PageContext";


type CssProps = {
    buttonGroupiness?: ButtonGroupMemberEnum, width?: number
}

export const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        width: (props: any) => props.width ? `${props.width}px` : 'unset',
        borderRadius: "0 5px 5px 0",
        borderTopLeftRadius: (props: CssProps) => {
            switch (props.buttonGroupiness) {
                case ButtonGroupMemberEnum.CENTER:
                    return 0
                case ButtonGroupMemberEnum.RIGHT:
                    return 0
                case ButtonGroupMemberEnum.LEFT:
                default:
                    return MackenziesMindTheme.shape.borderRadius
            }
        },
        borderTopRightRadius: (props: CssProps) => {
            switch (props.buttonGroupiness) {
                case ButtonGroupMemberEnum.CENTER:
                    return 0
                case ButtonGroupMemberEnum.LEFT:
                    return 0
                case ButtonGroupMemberEnum.RIGHT:
                default:
                    return MackenziesMindTheme.shape.borderRadius
            }
        },
        borderBottomRightRadius: (props: CssProps) => {
            switch (props.buttonGroupiness) {
                case ButtonGroupMemberEnum.CENTER:
                    return 0
                case ButtonGroupMemberEnum.LEFT:
                    return 0
                case ButtonGroupMemberEnum.RIGHT:
                default:
                    return MackenziesMindTheme.shape.borderRadius

            }
        },
        borderBottomLeftRadius: (props: CssProps) => {
            switch (props.buttonGroupiness) {
                case ButtonGroupMemberEnum.CENTER:
                    return 0
                case ButtonGroupMemberEnum.RIGHT:
                    return 0
                case ButtonGroupMemberEnum.LEFT:
                default:
                    return MackenziesMindTheme.shape.borderRadius
            }
        },
    }
}))


interface LoadingButtonProps {
    disabled?: boolean
    clickHandler?: (e: any) => void
    isLoading?: boolean
    color?: PropTypes.Color
    groupiness?: ButtonGroupMemberEnum
    width?: number
    href?: string
    source?: string
    variant?: 'text' | 'outlined' | 'contained'
}

const LoadingButton: FunctionComponent<PropsWithChildren<LoadingButtonProps>> = (props) => {
    const classes = useStyles({buttonGroupiness: props.groupiness, width: props.width})
    const getProgressContrastColor = () => {
        switch (props.color) {
            case 'primary':
                return MackenziesMindTheme.palette.primary.main
            case 'secondary':
                return MackenziesMindTheme.palette.secondary.main
            default:
                return '#FFFFFF'
        }
    }
    const pageContext = useContext(PageContext)

    return (
        <Grid item style={{minHeight: "60px", height:"100%", maxWidth:"max-content"}}>
            <Button
                    href={props.href}
                    disabled={props.disabled}
                    onClick={props.clickHandler}
                    className={classes.root}
                    fullWidth={!props.width}
                    color={props.color ?? 'primary'}
                    variant={props.variant ?? 'contained'}>
                    {
                        props.isLoading ?
                            <CircularProgress style={{
                                color: MackenziesMindTheme.palette.getContrastText(getProgressContrastColor()),
                                width: "22px",
                                height: "22px"
                            }}/>
                            : props.children
                    }</Button>
        </Grid>

    )
}

export default LoadingButton