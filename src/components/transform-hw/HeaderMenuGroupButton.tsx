import React, {FunctionComponent, useState} from 'react'
import {Button, Typography} from '@material-ui/core'
import MixedFeelingsByTTheme from "../../theme/MixedFeelingsByTTheme";
import {ArrowDropDown} from "@material-ui/icons";
import {bindTrigger} from "material-ui-popup-state";
import {SanityMenuGroup} from "../../common/sanityIo/Types";


interface HeaderMenuItemButtonProps {
    menuGroup: SanityMenuGroup
    popupState: any
}

const HeaderMenuGroupButton: FunctionComponent<HeaderMenuItemButtonProps> = ({popupState,menuGroup}) => {
    return (<Button
        {...bindTrigger(popupState)}
        color={"secondary"}
        style={{
            borderRadius: 0,
            paddingLeft: MixedFeelingsByTTheme.spacing(2),
            paddingRight: MixedFeelingsByTTheme.spacing(3),
            height: "100%",
            color: MixedFeelingsByTTheme.palette.secondary.main
        }}
        onClick={popupState.handleClick}
        endIcon={<ArrowDropDown></ArrowDropDown>}
    >
        <Typography variant='body2'
                    style={{fontSize: "18px"}}>{menuGroup.menuGroupTitle}</Typography>
    </Button>)
}

export default HeaderMenuGroupButton