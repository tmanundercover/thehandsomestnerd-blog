import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Card, Grid, Typography} from '@material-ui/core'
import cmsClient from '../abReplica/cmsClient'
import {urlFor} from '../abReplica/static-pages/cmsStaticPagesClient'
import AndaTheme from '../../theme/aft-theme/AftTheme'
import {WhySwitchReasonType, WhySwitchSectionType} from "../BlockContentTypes";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '1050px',
        minHeight: '480px',
        padding: '40px',
        overflow: 'visible'
    }
}))


interface IProps {
    sectionData: WhySwitchSectionType
}

const WhySwitchSection: FunctionComponent<IProps> = (props) => {
    const classes = useStyles(AndaTheme)

    const [sectionImageData, setSectionImageData] = React.useState<WhySwitchSectionType | undefined>()

    React.useEffect(() => {
        cmsClient.fetchWhySwitch(props.sectionData._id).then((imageData) => {
            setSectionImageData(imageData)
        })
    }, [props.sectionData])

    return (
        <Grid container justifyContent='center'>
            <Grid item>
                <Card className={classes.root}>
                    <Grid container alignItems='stretch'>
                        <Grid item xs={5} style={{position: 'relative'}}>
                            <img style={{position: 'relative', left: '-64px'}}
                                 src={urlFor(props.sectionData.imageSrc).url() ?? ''}/>
                        </Grid>
                        <Grid item xs={7} container alignItems='center'>
                            <Grid container alignItems='center'>
                                {props.sectionData.reasons.map((reason: WhySwitchReasonType, index: number) => {
                                    return <Grid key={index} container item xs={4} justifyContent='center'>
                                        <Grid container direction='column' spacing={2}
                                              style={{width: '150px', marginBottom: '16px'}}>
                                            <Grid item><img alt={reason.iconAlt} src={urlFor(reason.icon).url() ?? ''}/></Grid>
                                            <Grid item
                                                  style={{borderLeft: `1px solid ${AndaTheme.palette.secondary.main}`}}>
                                                <Typography variant='subtitle1'>{reason.text}</Typography></Grid>
                                        </Grid></Grid>
                                })}
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    )
}

export default WhySwitchSection