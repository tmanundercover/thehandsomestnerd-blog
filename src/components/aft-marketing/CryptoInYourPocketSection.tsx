import React, { FunctionComponent } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Button, Card, Grid, Typography } from '@material-ui/core'
import { SanityImage } from '../abReplica/cmsClient'
import { urlFor } from '../abReplica/static-pages/cmsStaticPagesClient'
import AndaTheme from '../../theme/aft-theme/AftTheme'
import { CryptoInYourPocketSectionType, WhySwitchReasonType } from '../BlockContentLayoutContainer'

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '1050px',
    height: '735px',
    padding: '40px',
    overflow: 'visible'
  },
  contentBottom: {
    border: `1px solid ${theme.palette.secondary.main}`,
    padding: '20px'
  }
}))


interface IProps {
  sectionData: CryptoInYourPocketSectionType
}

const CryptoInYourPocketSection: FunctionComponent<IProps> = (props) => {
  const classes = useStyles(AndaTheme)

  return (
    <Grid container item justifyContent='center' alignItems='stretch' >
      <Grid item>
        <Card className={classes.root} style={{paddingTop: "80px"}}>
          <Grid container alignItems='stretch'>
            <Grid item xs={5}  container justifyContent='flex-end' style={{position: 'relative',height:"535px"}}>
              <Grid item>
              <img alt={props.sectionData.imageSrcAltText}
                   style={{position: 'relative', left: "60px"}}
                   src={urlFor(props.sectionData.imageSrc).url() ?? ''}/>

              </Grid>
            </Grid>
            <Grid item xs={7} container direction='column' justifyContent='center' alignContent='center' alignItems='center'>
              <Grid container item style={{marginBottom:"40px"}}>
                <Typography variant='h2'>{props.sectionData.title}</Typography>
              </Grid>
              <Grid container alignItems='center' style={{marginBottom: "80px"}}>
                {props.sectionData.bullets.map((reason: WhySwitchReasonType, index:number) => {
                  return <Grid key={index} container item xs={4} justifyContent='center'>
                    <Grid container direction='column' spacing={2} style={{width: '150px'}}>
                      <Grid item><img alt={reason.iconAlt} src={urlFor(reason.icon).url() ?? ''}/></Grid>
                      <Grid item style={{borderLeft:`1px solid ${AndaTheme.palette.secondary.main}`}}>
                        <Typography variant='subtitle1'>{reason.text}</Typography></Grid>
                    </Grid></Grid>
                })}
              </Grid>
              <Grid item>
                <Grid item xs={12} container className={classes.contentBottom}>
                  <Grid item xs={4}>
                    <Typography variant='h1' color='secondary'>{props.sectionData.ctaHeader1}</Typography>
                  </Grid>
                  <Grid item xs={8} container direction='column'>
                    <Typography variant='body1' color='secondary'
                                style={{marginBottom: '40px'}}>{props.sectionData.ctaText}</Typography>
                    <Button variant='contained' color='secondary' href={props.sectionData.ctaButtonLink ?? ''}>
                      {props.sectionData.ctaButtonText}
                    </Button>
                  </Grid>
              </Grid>


              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

export default CryptoInYourPocketSection