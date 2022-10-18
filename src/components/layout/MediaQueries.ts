import {useMediaQuery} from "@material-ui/core";
import TransformHWTheme from "../../theme/transform-hw/TransformHWTheme";

const smDown = TransformHWTheme.breakpoints.down('sm')
const xsDown = TransformHWTheme.breakpoints.down('xs')
const mdUp = TransformHWTheme.breakpoints.up('md')
const mdDown = TransformHWTheme.breakpoints.down('md')

export default {smDown, xsDown, mdUp, mdDown}