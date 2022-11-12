import {Box, Button, CircularProgress, Grid, makeStyles, PropTypes} from '@material-ui/core'
import React, {FunctionComponent, PropsWithChildren} from 'react'
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
    clickHandler?: (e: any) => void
    isLoading?: boolean
    color?: PropTypes.Color
    groupiness?: ButtonGroupMemberEnum
    width?: number
    href?: string
    variant?: 'text' | 'outlined' | 'contained'
}

const LoadingButton: FunctionComponent<PropsWithChildren<LoadingButtonProps>> = (props) => {
    const classes = useStyles({buttonGroupiness: props.groupiness, width: props.width})
    const getProgressContrastColor = ()=>{
        switch (props.color) {
            case 'primary':
                return  TransformHWTheme.palette.primary.main
            case 'secondary':
                return TransformHWTheme.palette.secondary.main
            default:
                return '#FFFFFF'
        }
    }
    return (
        <Grid container style={{height:"60px"}} alignContent='center' alignItems='center' justifyContent='center'>
            <Grid item>

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
                        color: TransformHWTheme.palette.getContrastText(getProgressContrastColor()),
                        width: "22px",
                        height: "22px"
                    }}/>
                    : props.children
            }</Button>
            </Grid>
        </Grid>

    )
}

export default LoadingButton