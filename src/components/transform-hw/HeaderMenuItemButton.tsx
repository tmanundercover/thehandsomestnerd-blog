import React, {FunctionComponent, useContext} from 'react'
import {Button, Typography} from '@material-ui/core'
import MixedFeelingsByTTheme, {COLORS} from "../../theme/MixedFeelingsByTTheme";
import {SanityMenuItem} from "../../common/sanityIo/Types";
import {makeStyles, Theme} from "@material-ui/core/styles";
import ModalContext from "../snackbar-context/ModalContext";
import MediaQueriesContext from "../media-queries-context/MediaQueriesContext";

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
    const classes = useStyles(MixedFeelingsByTTheme)
    const mediaQueriesContext = useContext(MediaQueriesContext)

    const modalContext = useContext(ModalContext)
    return (<Button href={menuItem.url ?? ""}
                    color={menuItem.isOutlinedButton || menuItem.isContainedButton ? 'primary' : "primary"}
                    style={{
                        borderRadius: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? MixedFeelingsByTTheme.shape.borderRadius : 0,
                        paddingLeft: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? MixedFeelingsByTTheme.spacing(3.25) : MixedFeelingsByTTheme.spacing(1),
                        paddingRight: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? MixedFeelingsByTTheme.spacing(3.25) : MixedFeelingsByTTheme.spacing(1),
                        marginTop: (menuItem.isOutlinedButton || menuItem.isContainedButton) && mediaQueriesContext.mdDown ? MixedFeelingsByTTheme.spacing(4) : 0,
                        marginBottom: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? MixedFeelingsByTTheme.spacing(2) : 0,
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
                    color={menuItem.isOutlinedButton || menuItem.isContainedButton ? 'secondary' : 'secondary'}
                    variant={menuItem.isOutlinedButton || menuItem.isContainedButton ? "button" : 'body2'}
                    style={{fontSize: "18px"}}>{menuItem.displayText}</Typography>
    </Button>)
}

export default HeaderMenuItemButton