import React, {CSSProperties, FunctionComponent, useContext} from 'react'
import {v4 as uuidv4} from 'uuid'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Grid} from '@material-ui/core'
import HeaderMenuItemButton from "../transform-hw/HeaderMenuItemButton";
import PopupStateWrapper from "./PopupStateWrapper";
import {SanityMenuContainer, SanityMenuGroup, SanityMenuItem} from "../../common/sanityIo/Types";
import PageContext from "../page-context/PageContext";
import MediaQueriesContext from "../media-queries-context/MediaQueriesContext";
import {GridJustification} from "@material-ui/core/Grid/Grid";


export const useStyles = makeStyles((theme: Theme) => ({}))

interface FilteredMenuItemsProps {
    subMenus: SanityMenuContainer[]
    includeMenuItems?: boolean
    includeMenuGroups?: boolean
    onlyButtons?: boolean
    anchorRef?: any
    textStyle?: CSSProperties
    contentJustification?: GridJustification
}

type HeaderMenuButtonType = {
    group?: SanityMenuGroup,
    item?: SanityMenuItem,
    index: number
    popup?: (popupState: any) => JSX.Element
    button: any
}
const FilteredMenuItems: FunctionComponent<FilteredMenuItemsProps> = ({
                                                                          subMenus,
                                                                          onlyButtons,
                                                                          includeMenuItems,
                                                                          includeMenuGroups,
                                                                          textStyle,contentJustification
                                                                      }) => {
    // const anchorRef = useRef<HTMLButtonElement | null>(null)
    const mediaQueriesContext = useContext(MediaQueriesContext)
    return (<Grid item container justifyContent={contentJustification ? contentJustification: (mediaQueriesContext.mdDown ? 'flex-start' : 'flex-end')} alignItems='stretch' style={{height: "100%"}}>
            {
                subMenus?.reduce(
                    (accumulated: JSX.Element[], menuButton:any, index) => {
                        if (menuButton?._type === "menuItem" && (includeMenuItems || (onlyButtons && (menuButton.isOutlinedButton || menuButton.isContainedButton || menuButton.isModalButton)))) {
                            return accumulated.concat([<Grid item key={uuidv4()}>
                                <HeaderMenuItemButton textStyle={textStyle} menuItem={menuButton}/>
                            </Grid>])
                        } else if (menuButton?._type === "menuGroup" && includeMenuGroups) {
                            return accumulated.concat([<Grid item key={uuidv4()}>
                                <PopupStateWrapper menuGroup={menuButton} />
                            </Grid>])
                        }
                        return accumulated
                    }, [])
            }
        </Grid>
    )
}

export default FilteredMenuItems