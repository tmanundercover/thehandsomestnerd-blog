import React, { FunctionComponent } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { AboutAndaCardSectionType, HeroContentSectionType } from '../BlockContentLayoutContainer'
import { Button, Card, Grid, Typography } from '@material-ui/core'
import { urlFor } from '../abReplica/static-pages/cmsStaticPagesClient'

export const useStyles = makeStyles((theme: Theme) => ({
  marketingBackground: (props: { cardBaseImageUrl: string, cardOverlay: string }) => ({
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url('${props.cardBaseImageUrl}'), url('${props.cardOverlay}')`,
    backgroundSize: 'cover cover',
    backgroundPosition: '220px -32px, left top',
    backgroundColor: "#FFA9E7",
    width: '1050px',
    minHeight: '521px',
    overflow: 'visible'
  }),
  contentSection: {
    maxWidth: '340px',
    marginTop: '16px',
    height: '100%',
    backgroundColor: PRIMARY_MINT

},
  contentBullets: {
    borderLeft: `1px solid ${theme.palette.secondary.main}`,
    paddingLeft: '8px'
  }
}))

const SECONDARY_LIGHT_PINK = '#FFEDFA'
export const PRIMARY_MINT = '#0FF7CA'

interface IProps {
  sectionData: AboutAndaCardSectionType
}

const AboutAndaCardSection: FunctionComponent<IProps> = (props) => {
  // const classes = useStyles(AndaTheme)
  const classes = useStyles({
    cardBaseImageUrl: urlFor(props.sectionData.cardImage).url() ?? '',
    cardOverlay: urlFor(props.sectionData.cardImageBackground).url() ?? ''
  })

  React.useEffect(() => {

  }, [])

  return (
    <Grid container justifyContent='center' alignContent='flex-end'>
      <Grid item>
        <Card className={classes.marketingBackground}>

          <Grid container justifyContent='flex-end' alignContent='flex-end' style={{minHeight: "521px"}}>
            <Grid item style={{height: "100%"}}>
              <Card className={classes.contentSection} style={{height: "100%"}}>
                <Grid container direction='column' style={{padding: '40px',height: "100%"}}>

                  <Grid item style={{marginBottom: '40px'}}>
                    <Typography variant='h2' color={'secondary'}>{props.sectionData.contentTitle}</Typography>
                  </Grid>
                  <Grid container item style={{marginBottom: '40px'}} wrap='nowrap'>
                    <Grid xs={6} item className={classes.contentBullets} style={{marginRight: '40px'}}>
                      <Typography variant='subtitle1' color={'secondary'}><b>{props.sectionData.contentLeft}</b></Typography>
                    </Grid>
                    <Grid xs={6} item className={classes.contentBullets}>
                      <Typography variant='subtitle1' color={'secondary'}>{props.sectionData.contentRight}</Typography>
                    </Grid>
                  </Grid>

                  <Grid container item justifyContent='center'>
                    <Button color='secondary' variant='contained' href={props.sectionData.ctaButtonLink ?? ''}>
                      {props.sectionData.ctaButtonTitle}
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

export default AboutAndaCardSection