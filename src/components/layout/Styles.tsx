import {makeStyles, Theme} from "@material-ui/core";

export const useThwStyles = makeStyles((theme: Theme) => ({
    fullscreen: {
        width: '100vw',
        height: '100vh',
        backgroundColor: "black"
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