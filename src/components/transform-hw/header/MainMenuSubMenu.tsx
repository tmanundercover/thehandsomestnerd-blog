import React, {FunctionComponent, useState} from 'react'
import {
    Collapse,
    createStyles, Divider,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Typography
} from '@material-ui/core'
import {SanityMenuContainer, SanityMenuGroup, SanityMenuItem} from "../../../sanity/Menu";
import cmsClient from "../../block-content-ui/cmsClient";
import {v4 as uuidv4} from 'uuid'
import {makeStyles, Theme} from "@material-ui/core/styles";
import {ExpandLess, ExpandMore, StarBorder} from "@material-ui/icons";
import TransformHWTheme from "../../../theme/transform-hw/TransformHWTheme";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
    }),
);


interface MainMenuSubMenuProps {
    menuGroup: SanityMenuGroup
}

const MainMenuSubMenu: FunctionComponent<MainMenuSubMenuProps> = ({menuGroup}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = (e: any) => {
        e.stopPropagation()
        setOpen(!open);
    };

    return (
        <List
            style={{padding: 0}}
            key={menuGroup.menuGroupTitle}
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
        >
            <ListItem button style={{
                paddingTop: TransformHWTheme.spacing(2.25),
                paddingBottom: TransformHWTheme.spacing(2.25),
            }} onClick={handleClick}>
                <ListItemText primary={menuGroup.menuGroupTitle}/>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        menuGroup.links?.map((menuLink,index) => (
                            <ListItem key={index} button style={{
                                paddingTop: TransformHWTheme.spacing(2.25),
                                paddingLeft: TransformHWTheme.spacing(6),
                                paddingBottom: TransformHWTheme.spacing(2.25),
                            }}>
                                <ListItemText primary={menuLink.displayText}/>
                            </ListItem>
                        ))
                    }
                </List>
            </Collapse>
            <Divider/>
        </List>
    );
}

export default MainMenuSubMenu