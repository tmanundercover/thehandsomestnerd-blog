import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Button, Grid, Typography} from '@material-ui/core'
import {SanityColor} from '../terrells-portfolio-sections/BlogSection'
import pointOfInterestMarker from '../../common/poi-mark.svg'
import {SanityImageAssetDocument} from '@sanity/client'
import theme from '../../common/Theme'

export const useStyles = makeStyles((theme: Theme) => ({
  poiMarker: {
    backgroundColor: 'white',
    padding: theme.spacing(.125, .5),
  }
}))

export type PointOfInterestProps = {}

export type SanityPointOfInterest = {
  displayedTitle?: string,
  displayedDescription?: string,
  displayedSubtitle?: string,
  buttonText?: string,
  bgColor?: SanityColor,
  gallery?: SanityImageAssetDocument[],
  xCoord?: number,
  yCoord?: number
}

const pointsOfInterests: SanityPointOfInterest[] = [{
  displayedTitle: '360 HD LIPO',
  displayedSubtitle: 'Back',
  displayedDescription: 'With Dr. Emer, you can achieve the perfect backside you’ve always wanted – one that gives you a more athletic look and boosts your confidence.',
  buttonText: 'Learn More',
  xCoord: 100,
  yCoord: 200
},
  {
    displayedTitle: '360 HD LIPO',
    displayedSubtitle: 'Calves',
    displayedDescription: 'Dr. Emer uses hi-definition liposuction to remove excess fat and create a more sculpted, contoured shape.',
    buttonText: 'Learn More',
    xCoord: 200,
    yCoord: 100
  },
  {
    displayedTitle: '360 HD LIPO',
    displayedSubtitle: 'Sides',
    displayedDescription: 'Liposuction to remove excess fat in the love handle area and create a more sculpted, contoured shape.',
    buttonText: 'Learn More',
    xCoord: 300,
    yCoord: 200
  }
]

const PointOfInterest: FunctionComponent<PointOfInterestProps> = (props) => {
  const classes = useStyles()
const [index,setIndex] = React.useState<number>(0)
  React.useEffect(() => {
changePoi(index)
  }, [index])

  React.useEffect(()=>{
      setIndex(0)
  },[])

  const [description, setDescription] = React.useState<string>('')
  const [subtitle, setSubtitle] = React.useState<string>('')
  const [title, setTitle] = React.useState<string>('')
  const [buttonText, setButtonText] = React.useState<string>('')
  const [gallery, setGallery] = React.useState<any[]>([])

  const changePoi = (index: number) => {
    setDescription(pointsOfInterests[index].displayedDescription ?? '')
    setSubtitle(pointsOfInterests[index].displayedSubtitle ?? '')
    setTitle(pointsOfInterests[index].displayedTitle ?? '')
    setButtonText(pointsOfInterests[index].buttonText ?? '')
    setGallery(['','','',''])
  }

  return (
    <Grid container>
      <Grid item container xs={4}>
        <Grid item>
          <Grid container item direction="column" xs={9} spacing={3} style={{ padding:theme.spacing(2,3), color: "white", backgroundColor: "#383838"}}>
            <Grid item><Typography>{title}</Typography></Grid>
            <Grid item>"<Typography style={{display: "inline-block"}}>{subtitle}</Typography>"</Grid>
            <Grid item><Typography>{description}</Typography></Grid>
            <Grid item container justify="center">
              <Button variant="outlined" style={{color: "white", borderColor:"white"}}>
                <Typography>{buttonText}</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
      <Grid container item xs={5}>
        <Grid container item style={{position: 'relative'}}>
          <img
            // src={poi.image.url}
            src="https://via.placeholder.com/415x948"
            style={{width: '415px', height: '948px'}}
          />
          <Grid container item>
            {
              pointsOfInterests.map((poi: SanityPointOfInterest, poiIndex) => {
                  return <Grid key={poiIndex} onClick={() => {
                    setIndex(poiIndex)
                  }} item className={classes.poiMarker}
                               style={{backgroundColor: poiIndex === index? "#e54b4b":"white",position: 'absolute', top: poi.yCoord, left: poi.xCoord, borderRadius: '12px'}}>
                    < img src={pointOfInterestMarker} style={{width: '12px', height: '12px'}}/>
                  </Grid>
                }
              )
            }
          </Grid>
        </Grid>
      </Grid>
      <Grid item container xs={5} sm={8} md={3} lg={5} xl={2}>
        <Grid item container direction="column" alignContent="center">
          <Grid item container justify="center">
            <Grid item container alignContent="center" justify="center" style={{width: '200px'}}>
              {
                gallery.map(
                  (poi, index:number) => {
                    return <Grid item xs={6}>
                      <img
                        // src={poi.image.url}
                        src={`https://via.placeholder.com/100?text=${subtitle}+${index}`}/>
                    </Grid>
                  })
              }
            </Grid>
          </Grid>
          <Grid item justify="center" container>
            <Grid item>
              <Button variant="outlined">Learn More</Button>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </Grid>
  )
}

export default PointOfInterest