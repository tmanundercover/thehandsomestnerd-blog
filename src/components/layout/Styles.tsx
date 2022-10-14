import {makeStyles, Theme} from "@material-ui/core";

export const useThwStyles = makeStyles((theme: Theme) => ({
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
    }
}))

export default {useThwStyles}