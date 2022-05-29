import React, { FunctionComponent } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { HeroContentSectionType } from '../BlockContentLayoutContainer'
import { Button, Card, Grid, Typography } from '@material-ui/core'
import { urlFor } from '../abReplica/static-pages/cmsStaticPagesClient'
import { PRIMARY_MINT } from './AboutAndaCardSection'

export const useStyles = makeStyles((theme: Theme) => ({
  marketingBackground: (props: { heroBaseImageUrl: string, heroOverlay: string }) => ({
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url('${props.heroBaseImageUrl}'), url('${props.heroOverlay}')`,
    backgroundSize: 'cover cover',
    backgroundPosition: 'left bottom',
    width: '1050px',
    minHeight: '521px',
    backgroundColor: 'transparent'
  }),
  contentSection: {
    maxWidth: '324px',
    height: '510px',
    marginTop: '16px',
    backgroundColor: SECONDARY_LIGHT_PINK
  },
  contentBullets: {
    borderLeft: `1px solid ${theme.palette.secondary.main}`,
    paddingLeft: '32px'
  }
}))

const SECONDARY_LIGHT_PINK = '#FFEDFA'

interface IProps {
  sectionData: HeroContentSectionType
}

const HeroContentSection: FunctionComponent<IProps> = (props) => {
  // const classes = useStyles(AndaTheme)
  const classes = useStyles({
    heroBaseImageUrl: urlFor(props.sectionData.heroImage).url() ?? '',
    heroOverlay: urlFor(props.sectionData.heroImageBackground).url() ?? '',
  })

  React.useEffect(() => {

  }, [])

  return (
    <Grid container justifyContent='center'>
      <Grid item>
        <Card className={classes.marketingBackground}>

          <Grid container direction='column' justifyContent='flex-end' alignContent='flex-end'>
            <Grid item>
              <Card className={classes.contentSection}>
                <Grid container direction='column' style={{padding:"40px", paddingTop: "40px"}}>

                  <Grid item style={{marginBottom:"40px"}}>
                    <Typography variant='h2' color={'secondary'}>{props.sectionData.contentTitle}</Typography>
                  </Grid>
                  <Grid container item className={classes.contentBullets} style={{marginBottom:"40px"}}>
                    {props.sectionData.contentBullets.map((bullet,index) => {
                      return <Grid key={index} item style={{marginBottom:"16px"}}>
                        <Typography variant='body1' color='secondary'>{bullet}</Typography>
                      </Grid>
                    })}
                  </Grid>
                  <Grid container item justifyContent='center'>
                    <Button style={{backgroundColor: PRIMARY_MINT}} variant='contained' href={props.sectionData.ctaButtonLink??""}>
                      <Typography variant='button' color='secondary'>{props.sectionData.ctaButtonTitle}</Typography>
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

export default HeroContentSection