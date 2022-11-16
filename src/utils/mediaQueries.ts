import {useMediaQuery, useTheme} from "@material-ui/core";


const useSmDown = () => {
    const theme = useTheme()
    const smDown = theme.breakpoints.down('sm')

    const smDownQuery = useMediaQuery(smDown)
    return smDownQuery
}

const useXsDown = () => {
    const theme = useTheme()
    const xsDown = theme.breakpoints.down('xs')
    return useMediaQuery(xsDown)
}

const useMdDown = () => {
    const theme = useTheme()
    const mdDown = theme.breakpoints.down('md')
    return useMediaQuery(mdDown)
}

const useMdUp = () => {
    const theme = useTheme()
    const mdUp = theme.breakpoints.up('md')
    return useMediaQuery(mdUp)
}

const useXsOnly = () => {
    const theme = useTheme()
    const xsOnly = theme.breakpoints.only('xs')
    return useMediaQuery(xsOnly)
}

export default {useSmDown, useXsDown, useMdUp, useMdDown, useXsOnly}