import React, {FunctionComponent, useState} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Button, Divider, Grid, List, ListItem, Typography} from '@material-ui/core'
import {urlFor} from "../../abReplica/static-pages/cmsStaticPagesClient";
import {SanityImageSource} from "@sanity/asset-utils";
import {SanityMenuGroup, SanityMenuItem} from "../../../sanity/Menu";
import cmsClient from "../../abReplica/cmsClient";
import subMenu from "./SubMenu";
import {v4 as uuidv4} from 'uuid'

export const useStyles = makeStyles((theme: Theme) => ({}))

interface LogoProps {
    subMenu: SanityMenuGroup
}

const SubMenu: FunctionComponent<LogoProps> = (props) => {
    const classes = useStyles()

    const [links, setLinks] = useState<any[]>([])

    React.useEffect(() => {
        const potentialLinks = props.subMenu.links?.map(async (potentialLink) => {
            return cmsClient.fetchRef(potentialLink)
        })
        if (potentialLinks) {

            Promise.all(potentialLinks).then((realizedLinks: SanityMenuItem[]) => {
                setLinks(realizedLinks)
            })
        }
    }, [])

    return (<Grid item container key={uuidv4()}>
        <List style={{padding:0}}>
            {
                links.map((theLink: SanityMenuItem, index: number) => {
                    return <ListItem key={uuidv4()+index} button component="a" style={{height: "48px"}}>
                        <Typography variant='body1' style={{color: "#1a1a1a", fontSize:"18px"}}>{theLink.displayText}</Typography>
                    </ListItem>
                })
            }
        </List>
    </Grid>)
}

export default SubMenu