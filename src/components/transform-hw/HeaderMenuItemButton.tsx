import React, {CSSProperties, FunctionComponent, useContext} from 'react'
import {Button, Typography} from '@material-ui/core'
import DigitalResumeTheme, {COLORS} from "../../theme/DigitalResumeTheme";
import {SanityMenuItem} from "../../common/sanityIo/Types";
import {makeStyles, Theme} from "@material-ui/core/styles";
import ModalContext from "../snackbar-context/ModalContext";

const useStyles = makeStyles((theme: Theme) => ({
    hover: {
        "&:hover":{
            backgroundColor: 'rgba(16,43,136, 0.04)',
            "& .MuiTypography-root": {
                color: theme.palette.primary.main
            }
        }
    }
}))

interface HeaderMenuItemButtonProps {
    menuItem: SanityMenuItem
    textStyle?: CSSProperties
}

const HeaderMenuItemButton: FunctionComponent<HeaderMenuItemButtonProps> = ({menuItem, textStyle}) => {
    const classes = useStyles(DigitalResumeTheme)

    const modalContext = useContext(ModalContext)
    return (<Button href={menuItem.url ?? ""}
                    color={menuItem.isOutlinedButton || menuItem.isContainedButton ? 'secondary' : "primary"}
                    style={{
                        borderRadius: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? DigitalResumeTheme.shape.borderRadius : 0,
                        paddingLeft: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? DigitalResumeTheme.spacing(3.25) : DigitalResumeTheme.spacing(1),
                        paddingRight: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? DigitalResumeTheme.spacing(3.25) : DigitalResumeTheme.spacing(1),
                        marginTop: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? DigitalResumeTheme.spacing(3) : 0,
                        marginBottom: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? DigitalResumeTheme.spacing(2) : 0,
                        height: menuItem.isOutlinedButton || menuItem.isContainedButton ? "48px" : "100%",
                    }}
                    className={classes.hover}
                    onClick={ (e:any)=>{
                        if(menuItem.isModalButton) {
                            modalContext.openModal && modalContext.openModal(menuItem.modalRef)
                        }
                    }}
                    variant={menuItem.isContainedButton ? 'contained' : (menuItem.isOutlinedButton ? 'outlined' : 'text')}>
        <Typography noWrap
                    color={menuItem.isOutlinedButton || menuItem.isContainedButton ? 'textPrimary' : 'textPrimary'}
                    variant={menuItem.isOutlinedButton || menuItem.isContainedButton ? "button" : 'body2'}
                    style={{fontSize: "18px", ...textStyle}}>{menuItem.displayText}</Typography>
    </Button>)
}

export default HeaderMenuItemButton