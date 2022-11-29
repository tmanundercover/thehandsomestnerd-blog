import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Grid} from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
    },
}))

interface IProps { maskUrl:string, color: any, size?:number }

const ColoredPng: FunctionComponent<IProps> = (props:IProps) => {


    return (<Grid item container style={{
        WebkitMaskImage: `url(${props.maskUrl})`,
        maskImage: `url(${props.maskUrl})`,
        WebkitMaskRepeat: "none",
        maskRepeat: "none",
        backgroundPosition: "center",
        opacity: .55555555555,
        height: `${props.size? props.size:100}px`,
        width: `${props.size? props.size:100}px`,
        backgroundColor: props.color,
        WebkitMaskSize: "cover",
        maskSize: "cover",
        // marginBottom: TransformHWTheme.spacing(2)
    }}>
    </Grid>)
}

export default ColoredPng