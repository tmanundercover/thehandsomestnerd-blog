import {Button, CircularProgress, Grid, makeStyles, PropTypes} from '@material-ui/core'
import React, {FunctionComponent, PropsWithChildren} from 'react'
import DigitalResumeTheme from "../../theme/DigitalResumeTheme";
import {ButtonGroupMemberEnum} from "./ButtonGroupMemberEnum";


type CssProps = {
    buttonGroupiness?: ButtonGroupMemberEnum, width?: number, isRounded?: boolean
}

export const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        width: (props: any) => props.width ? `${props.width}px` : 'unset',
        borderRadius: `0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0`,
        borderTopLeftRadius: (props: CssProps) => {
            switch (props.buttonGroupiness) {
                case ButtonGroupMemberEnum.CENTER:
                    return 0
                case ButtonGroupMemberEnum.RIGHT:
                    return 0
                case ButtonGroupMemberEnum.LEFT:
                default:
                    return theme.shape.borderRadius
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
                    return theme.shape.borderRadius
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
                    return theme.shape.borderRadius

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
                    return theme.shape.borderRadius
            }
        },
    }
}))


interface LoadingButtonProps {
    disabled?: boolean
    isRounded?: boolean
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
    const classes = useStyles({buttonGroupiness: props.groupiness, width: props.width, isRounded: props.isRounded})
    const getProgressContrastColor = () => {
        switch (props.color) {
            case 'primary':
                return DigitalResumeTheme.palette.primary.main
            case 'secondary':
                return DigitalResumeTheme.palette.secondary.main
            default:
                return '#FFFFFF'
        }
    }

    return (
        <Grid item style={{minHeight: "60px", height:"100%", marginRight:"-16px"}}>
            <Button
                style={{boxShadow: 'none'}}
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
                            color: DigitalResumeTheme.palette.getContrastText(getProgressContrastColor()),
                            width: "22px",
                            height: "22px"
                        }}/>
                        : props.children
                }</Button>
        </Grid>

    )
}

export default LoadingButton