import React, {FunctionComponent} from 'react'
import {Button, Typography} from '@material-ui/core'
import TransformHWTheme, {COLORS} from "../../theme/transform-hw/TransformHWTheme";
import {SanityMenuItem} from "../../common/sanityIo/Types";
import {makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    hover: {
        "&:hover":{
            backgroundColor: 'rgba(16,43,136, 0.04)',
            "& .MuiTypography-root": {
            color: "#2828d3"
            }
        }
    }
}))

interface HeaderMenuItemButtonProps {
    menuItem: SanityMenuItem
}

const HeaderMenuItemButton: FunctionComponent<HeaderMenuItemButtonProps> = ({menuItem}) => {
    const classes = useStyles(TransformHWTheme)

    return (<Button href={menuItem.url ?? ""}
                    color={menuItem.isOutlinedButton || menuItem.isContainedButton ? 'secondary' : "primary"}
                    style={{
                        borderRadius: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? TransformHWTheme.shape.borderRadius : 0,
                        paddingLeft: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? TransformHWTheme.spacing(3.25) : TransformHWTheme.spacing(1),
                        paddingRight: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? TransformHWTheme.spacing(3.25) : TransformHWTheme.spacing(1),
                        marginTop: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? TransformHWTheme.spacing(3) : 0,
                        marginBottom: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? TransformHWTheme.spacing(2) : 0,
                        height: menuItem.isOutlinedButton || menuItem.isContainedButton ? "48px" : "100%",
                    }}
                    className={classes.hover}
                    variant={menuItem.isContainedButton ? 'contained' : (menuItem.isOutlinedButton ? 'outlined' : 'text')}>
        <Typography noWrap
                    color={menuItem.isOutlinedButton || menuItem.isContainedButton ? 'textSecondary' : 'secondary'}
                    variant={menuItem.isOutlinedButton || menuItem.isContainedButton ? "button" : 'body2'}
                    style={{fontSize: "18px"}}>{menuItem.displayText}</Typography>
    </Button>)
}

export default HeaderMenuItemButton