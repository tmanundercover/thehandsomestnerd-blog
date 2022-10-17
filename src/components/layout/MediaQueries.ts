import {useMediaQuery} from "@material-ui/core";
import TransformHWTheme from "../../theme/transform-hw/TransformHWTheme";

const smDown = TransformHWTheme.breakpoints.down('sm')
const xsDown = TransformHWTheme.breakpoints.down('xs')

export default {smDown, xsDown}