import React, {FunctionComponent, PropsWithChildren} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Button, Grid, Typography} from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
    },
}))

interface IProps {
    email:string,
    subject:string
    body:string
    color: string
}

const MailTo: FunctionComponent<IProps & PropsWithChildren> = (props:IProps & PropsWithChildren) => {
    const classes = useStyles()

    React.useEffect(()=>{
    }, [])

    return (<Button style={{color:props.color}} href={`mailto:${props.email}?subject=${props.subject || ""}&body=${props.body || ""}`}>
        <Typography color='inherit' align='center'
                    variant='subtitle1'>{props.children}</Typography>
    </Button>)
}

export default MailTo