import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Grid} from '@material-ui/core'
import useCustomStyles from "../mackenzies-mind/pages/Styles";
import {CssFadeToColorDirectionEnum} from "./CssFadeToColorDirectionEnum";
import MediaQueriesContext from "../media-queries-context/MediaQueriesContext";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: '430px',
        backgroundColor: theme.palette.background.paper,
        paddingBottom: theme.spacing(5)
    },
    contentBullets: {
        marginBottom: theme.spacing(5)
    }
}))


interface IProps {
    fromColor?: string
    toColor: string
    isResponsive?: boolean
    direction?: CssFadeToColorDirectionEnum
}


const CssFadeToColor: FunctionComponent<IProps> = (props) => {
    const globalClasses = useCustomStyles({})
    const mediaQueriesContext = useContext(MediaQueriesContext)

    const getStyle = () => {
        const getRotationAngle = () =>{
            switch (props.direction) {
                case CssFadeToColorDirectionEnum.TOP:
                    return -180
                case CssFadeToColorDirectionEnum.LEFT:
                    return -90
                case CssFadeToColorDirectionEnum.RIGHT:
                    return 90
                case CssFadeToColorDirectionEnum.BOTTOM:
                default:
                    return 180
            }
        }

        const getColor = () => {
            if (props.isResponsive && mediaQueriesContext.smDown)
                return 'transparent'

            let fromColor = props.fromColor ? props.fromColor : 'transparent'
            let toColor = props.toColor

            if(props.direction === CssFadeToColorDirectionEnum.TOP) {
                let temp = fromColor
                fromColor = toColor
                toColor = temp
            }

            return `linear-gradient(${getRotationAngle()}deg, ${fromColor}, ${toColor}`
        }

        const style: any = {
            position: "absolute",
            backgroundImage: getColor()
        }

        switch (props.direction) {
            case CssFadeToColorDirectionEnum.TOP:
                return {
                    ...style,
                    top: 0,
                    height: '120px',
                }
            case CssFadeToColorDirectionEnum.LEFT:
                return {
                    ...style,
                    left: 0,
                    width: '120px',
                    height: '100%'
                }
            case CssFadeToColorDirectionEnum.RIGHT:
                return {
                    ...style,
                    right: 0,
                    width: '120px',
                    height: '100%'
                }
            case CssFadeToColorDirectionEnum.BOTTOM:
            default:
                return {
                    ...style,
                    bottom: 0,
                    height: '120px',
                }
        }
    }

    return (
        <Grid container item className={globalClasses.fullContainer}
              style={{position: 'absolute', minHeight: "120px", minWidth: "120px"}}>
            <Grid container item style={getStyle()}>
            </Grid>
        </Grid>
    )
}

export default CssFadeToColor