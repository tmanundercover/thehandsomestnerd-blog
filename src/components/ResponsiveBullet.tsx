import React, {FunctionComponent, ReactNode} from 'react'
import {Grid, Typography} from '@material-ui/core'
import {Check, FormatListBulleted} from "@material-ui/icons";
import {v4 as uuidv4} from 'uuid'
import {Variant} from "@material-ui/core/styles/createTypography";


interface IProps {
    text: string
    textColor?: | 'initial'
        | 'inherit'
        | 'primary'
        | 'secondary'
        | 'textPrimary'
        | 'textSecondary'
        | 'error';
    fontVariant?: Variant | 'inherit'
    condensed?: boolean
    bullet?: ReactNode
    notResponsive?: boolean
    bulletColor?: 'inherit' | 'primary' | 'secondary' | 'action' | 'disabled' | 'error'
}

const ResponsiveBullet: FunctionComponent<IProps> = (props: IProps) => {
    return (<Grid key={uuidv4()} container item sm={props.notResponsive ? 12 : 6} alignItems='center'>
        <Grid container item spacing={props.condensed ? 0 : 2} alignItems='flex-start' alignContent='flex-start'>
            <Grid item xs={2} container justifyContent='center' alignItems='center' alignContent='center'
                  style={{height: props.fontVariant === 'subtitle1' ? "1.2em" : "2em"}}>{props.bullet ? props.bullet :
                <Check color={props.bulletColor}/>}</Grid>
            <Grid item xs={10}>
                <Typography variant={props.fontVariant ? props.fontVariant : "body1"}
                            color={props.textColor ? props.textColor : "textPrimary"}>{props.text}</Typography>
            </Grid>
        </Grid>
    </Grid>)
}

export default ResponsiveBullet