import {Button, CircularProgress, makeStyles, PropTypes} from '@material-ui/core'
import React, {FunctionComponent} from 'react'
import TransformHWTheme from "../../theme/transform-hw/TransformHWTheme";
import {ButtonGroupMemberEnum} from "./ButtonGroupMemberEnum";


type CssProps = {
    buttonGroupiness?: ButtonGroupMemberEnum, width?: number
}

export const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        width: (props: any) => props.width ? `${props.width}px`: 'unset',
        borderRadius: "0 5px 5px 0",
        borderTopLeftRadius: (props: CssProps) => {
            switch (props.buttonGroupiness) {
                case ButtonGroupMemberEnum.CENTER:
                    return 0
                case ButtonGroupMemberEnum.RIGHT:
                    return 0
                case ButtonGroupMemberEnum.LEFT:
                default:
                    return TransformHWTheme.shape.borderRadius
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
                    return TransformHWTheme.shape.borderRadius
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
                    return TransformHWTheme.shape.borderRadius

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
                    return TransformHWTheme.shape.borderRadius
            }
        },
    }
}))


interface LoadingButtonProps {
    disabled?: boolean
    clickHandler: (e: any) => void
    isLoading?: boolean
    color?: PropTypes.Color
    groupiness?: ButtonGroupMemberEnum
    width?: number
    variant?: 'text' | 'outlined' | 'contained'
}

const LoadingButton: FunctionComponent<LoadingButtonProps> = (props) => {
    const classes = useStyles({buttonGroupiness: props.groupiness, width: props.width})
    return (
        <Button
            disabled={props.disabled}
            onClick={props.clickHandler}
            className={classes.root}
            fullWidth={!props.width}
            color={props.color ?? 'primary'}
            variant={props.variant ?? 'contained'}>
            {
                props.isLoading ?
                    <CircularProgress style={{
                        color: TransformHWTheme.palette.text.primary,
                        width: "25px",
                        height: "25px"
                    }}/>
                    : props.children
            }</Button>

    )
}

export default LoadingButton