import React, {FunctionComponent, useContext, useState} from 'react'
import {Button, Grid, List, ListItem, Typography} from '@material-ui/core'
import {v4 as uuidv4} from 'uuid'
import {SanityMenuGroup, SanityMenuItem} from "../../../common/sanityIo/Types";
import DigitalResumeTheme from "../../../theme/DigitalResumeTheme";
import ModalContext from "../../snackbar-context/ModalContext";


interface SubMenuProps {
    subMenu: SanityMenuGroup
    handleClose?: (e: any) => void
}

const SubMenu: FunctionComponent<SubMenuProps> = (props) => {
    const modalContext = useContext(ModalContext)
    return (<Grid item container key={uuidv4()}>
        <List style={{padding: 0}}>
            {
                props.subMenu?.links?.map((theLink: SanityMenuItem, index: number) => {
                    console.log("submenu link", theLink)
                    return <ListItem onClick={theLink.url && theLink.url.length > 0 ? undefined : props.handleClose}
                                     key={uuidv4() + index} button style={{height: "48px",padding: 0}}>
                        <Button variant='text' href={((theLink.url && (theLink.url.length > 0) && theLink.url)) ? theLink.url:undefined}
                                onClick={theLink.isModalButton?()=>{
                                    console.log()
                                    if(theLink.isModalButton) {
                                        modalContext.openModal && modalContext.openModal(theLink.modalRef)
                                    }
                                }:undefined}
                                style={{margin: 0, height: "100%", width: "100%", borderRadius:0, padding: DigitalResumeTheme.spacing(0,3,0)}}>
                            <Grid container>

                                <Typography variant='body1' style={{
                                    color: "#1a1a1a",
                                    fontSize: "18px"
                                }}>{theLink.displayText}</Typography>
                            </Grid>
                        </Button>
                    </ListItem>
                })
            }
        </List>
    </Grid>)
}

export default SubMenu