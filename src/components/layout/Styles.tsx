import {makeStyles, Theme} from "@material-ui/core";
import TransformHWTheme from "../../theme/transform-hw/TransformHWTheme";

export const useThwStyles = makeStyles({
    fullscreen: {
        width: 'calc(100vw)',
        height: 'calc(100vh)',
    },
    fullscreenPlus: {
        width: 'calc(100vw)',
        height: 'calc(100vh)',
    },
    endAdornedInput: {
        "& .MuiFilledInput-adornedEnd": {
                paddingRight: 0
            },
        "& .MuiOutlinedInput-adornedEnd": {
            paddingRight: 0
        }
    },
    spacer: {
        marginBottom: "40px"
    },
    fullscreenOverlay: {
        position: "absolute",
        backgroundColor: `rgba(0, 0, 0, .5)`
    },
    fullScreenImage: {
        position: "relative",
        backgroundImage: (props:any)=>`url(${props.bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: TransformHWTheme.palette.background.default
    }
})

export default {useThwStyles}