import {makeStyles} from "@material-ui/core";
import MixedFeelingsByTTheme, {COLORS} from "../../../theme/MixedFeelingsByTTheme";

const useCustomStyles = makeStyles({
    transparentBacking: {
        borderLeft: `4px solid ${MixedFeelingsByTTheme.palette.primary.main}`,
        borderRight: `4px solid ${MixedFeelingsByTTheme.palette.primary.main}`,
        padding: MixedFeelingsByTTheme.spacing(2,0),
        backgroundColor:COLORS.TRANSPARENTWHITE
    },
    fullscreen: {
        width: 'calc(100vw)',
        height: 'calc(100vh)',
        position: "relative"
    },
    fullscreenPlus: {
        width: 'calc(100vw)',
        height: 'calc(100vh)',
        position: "relative"
    },
    endAdornedInput: {
        "& .MuiFilledInput-adornedEnd": {
            border: "1px solid white",
            paddingRight: 0,
            borderTopRightRadius: MixedFeelingsByTTheme.shape.borderRadius,
            borderBottomRightRadius: MixedFeelingsByTTheme.shape.borderRadius
        },
        "& .MuiOutlinedInput-adornedEnd": {
            border: "1px solid white",
            paddingRight: 0,
            borderTopRightRadius: MixedFeelingsByTTheme.shape.borderRadius,
            borderBottomRightRadius: MixedFeelingsByTTheme.shape.borderRadius
        },
        "& .MuiInputBase-input": {
            borderRightWidth: 0,
            "&:hover": {
                borderBottomColor: "white"
            },
        },
        "& .MuiButton-containedSecondary":{
            border: 0,
            borderLeft: '1px solid white'
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
        backgroundImage: (props: any) => `url(${props.bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        backgroundColor: MixedFeelingsByTTheme.palette.background.default
    },
    fullSection: {
        width: 'calc(100vw)',
        height: '100%',
        position: "relative",
        zIndex: 0
    },
    fullSectionOverlay: {
        position: "absolute",
        backgroundColor: `rgba(0, 0, 0, .4)`,
        minHeight: '512px',
        height: '100%',
        width: "100%",
        zIndex: 1
    },
    fullSectionOverlayDark: {
        position: "absolute",
        backgroundColor: `rgba(0, 0, 0, .8)`,
        minHeight: '512px',
        height: '100%',
        width: "100%",
        zIndex: 1
    },
    fullContainer: {
        width: '100%',
        height: '100%'
    },
    fullscreenWhiteOverlay: {
        position: "absolute",
        backgroundColor: `rgba(255, 255, 255, 0.65)`
    },
})


//
//
// fullscreen: {
//     width: 'calc(100vw)',
//         height: 'calc(100vh)',
//         position: "relative",
//         overflowY: "scroll"
// },
// fullscreenPlus: {
//     width: 'calc(100vw)',
//         height: 'calc(100vh)',
//         position: "relative"
// },
// transparentBacking: {
//     borderLeft: `4px solid ${MixedFeelingsByTTheme.palette.primary.main}`,
//         borderRight: `4px solid ${MixedFeelingsByTTheme.palette.primary.main}`,
//         padding: MixedFeelingsByTTheme.spacing(2,0),
//         backgroundColor:COLORS.TRANSPARENTWHITE
// },
// endAdornedInput: {
//     "& .MuiFilledInput-adornedEnd": {
//         border: "1px solid white",
//             paddingRight: 0,
//             borderTopRightRadius: MixedFeelingsByTTheme.shape.borderRadius,
//             borderBottomRightRadius: MixedFeelingsByTTheme.shape.borderRadius
//     },
//     "& .MuiOutlinedInput-adornedEnd": {
//         border: "1px solid white",
//             paddingRight: 0,
//             borderTopRightRadius: MixedFeelingsByTTheme.shape.borderRadius,
//             borderBottomRightRadius: MixedFeelingsByTTheme.shape.borderRadius
//     },
//     "& .MuiInputBase-input": {
//         borderRightWidth: 0,
//             "&:hover": {
//             borderBottomColor: "white"
//         },
//     },
//     "& .MuiButton-containedSecondary": {
//         border: 0,
//             borderLeft: '1px solid white'
//     }
// },
// spacer: {
//     marginBottom: "40px"
// },
// fullscreenOverlay: {
//     position: "absolute",
//         backgroundColor: `rgba(0, 0, 0, .5)`
// },
// fullscreenWhiteOverlay: {
//     position: "absolute",
//         backgroundColor: `rgba(255, 255, 255, 0.3)`
// },
// fullScreenImage: {
//     position: "relative",
//         backgroundImage: (props: any) => `url(${props.bgImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'right',
//         backgroundColor: MixedFeelingsByTTheme.palette.background.default
// },
// fullSection: {
//     width: 'calc(100vw)',
//         height: '100%',
//         position: "relative",
//         zIndex: 0
// },
// fullSectionOverlay: {
//     position: "absolute",
//         backgroundColor: `rgba(0, 0, 0, .4)`,
//         minHeight: '512px',
//         height: '100%',
//         width: "100%",
//         zIndex: 1
// },
// fullContainer: {
//     width: '100%',
//         height: '100%'
// }

export default useCustomStyles