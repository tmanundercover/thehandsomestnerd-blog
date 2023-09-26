import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Grid} from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
    },
}))

interface IProps { maskUrl:string, color: any, height: number, isCenter?: boolean}

const FullWidthColoredPng: FunctionComponent<IProps> = (props:IProps) => {


    return (<Grid item container style={{
        WebkitMaskImage: `url(${props.maskUrl})`,
        maskImage: `url(${props.maskUrl})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        // backgroundPosition: props.isCenter?"center":"left",
        // opacity: .55555555555,
        height: `${props.height? props.height:100}px`,
        // width: '100%',
        backgroundColor: props.color,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        maskPosition: props.isCenter?"center":"left",
        WebkitMaskPosition: props.isCenter?"center":"left"
        // marginBottom: TransformHWTheme.spacing(2)
    }}>
    </Grid>)
}

export default FullWidthColoredPng