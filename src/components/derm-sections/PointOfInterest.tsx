import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Button, Grid, IconButton, Modal, Typography} from '@material-ui/core'
import {SanityColor} from '../terrells-portfolio-sections/BlogSection'
import pointOfInterestMarker from '../../common/poi-mark.svg'
import theme from '../../common/Theme'
import subjectPhoto from './sculpting-male-front.png'
import {motion} from 'framer-motion'
import Carousel from 'react-material-ui-carousel'
import {Close} from '@material-ui/icons'


export const useStyles = makeStyles((theme: Theme) => ({
  poiMarker: {
    backgroundColor: 'white',
    padding: theme.spacing(.125, .5),
    borderRadius: '12px'
  }
}))

export type PointOfInterestProps = {}

export type SanityPointOfInterest = {
  displayedTitle?: string,
  displayedDescription?: string,
  displayedSubtitle?: string,
  buttonText?: string,
  bgColor?: SanityColor,
  gallery?: { title: string, description: string }[],
  xCoord?: number,
  yCoord?: number,
  galleryColor?: string,
}

const pointsOfInterests: SanityPointOfInterest[] = [{
  displayedTitle: '360 HD LIPO',
  displayedSubtitle: 'Biceps',
  displayedDescription: 'With Dr. Emer, you can achieve the perfect biceps that you’ve always wanted – ones that give you a more athletic look and boost your confidence.',
  buttonText: 'Learn More',
  xCoord: 50,
  yCoord: 220,
  galleryColor: '065464',
  gallery: [
    {
      title: 'Bicep Head',
      description: 'The hed of the bicep is the area of most concern'
    },
    {
      title: 'Left Bicep',
      description: 'The keft bicep does not reallly exist here'
    },
    {
      title: 'Right Bicep',
      description: 'The right bicep is my good side and it needs more text'
    },
    {
      title: 'Biceps',
      description: 'Increase your confidence and athletic look and feel'
    }
  ]
},
  {
    displayedTitle: '360 HD LIPO',
    displayedSubtitle: 'Calves',
    displayedDescription: 'Dr. Emer uses hi-definition liposuction to remove excess fat and create a more sculpted, contoured shape.',
    buttonText: 'Learn More',
    xCoord: 210,
    yCoord: 661,
    galleryColor: '34acbc',
    gallery: [
      {
        title: 'Calves',
        description: 'Both calves can be enhanced to appear more athletic'
      },
      {
        title: 'Left Calf',
        description: 'The left calf and right calf need the same amount of work'
      },
      {
        title: 'Right Calf',
        description: 'The right calf can be augmented just like the left'
      },
      {
        title: 'More Calves',
        description: 'Increase your confidence and athletic look and feel'
      }
    ]
  },
  {
    displayedTitle: '360 HD LIPO',
    displayedSubtitle: 'Sides',
    displayedDescription: 'Liposuction to remove excess fat in the love handle area and create a more sculpted, contoured shape.',
    buttonText: 'Learn More',
    xCoord: 193,
    yCoord: 329,
    galleryColor: '85c3cf',
    gallery: [
      {
        title: 'Sides',
        description: 'The side of the body has a great concern of being fat'
      },
      {
        title: 'Left Side',
        description: 'The left side should be addressed first and foremost'
      },
      {
        title: 'Right Side',
        description: 'The right side is the most prominent and common'
      },
      {
        title: 'Side',
        description: 'Increase your confidence and athletic look and feel'
      }
    ]
  }
]

export type GalleryLearnMoreType = {
  src?: string
  title?: string
  description?: string
}

const PointOfInterest: FunctionComponent<PointOfInterestProps> = (props) => {
  const classes = useStyles()
  const [index, setIndex] = React.useState<number>(0)
  React.useEffect(() => {
    changePoi(index)
  }, [index])

  React.useEffect(() => {
    setIndex(0)
  }, [])


  const [description, setDescription] = React.useState<string>('')
  const [subtitle, setSubtitle] = React.useState<string>('')
  const [title, setTitle] = React.useState<string>('')
  const [buttonText, setButtonText] = React.useState<string>('')
  const [gallery, setGallery] = React.useState<any[]>([])
  const [galleryOpen, setGalleryOpen] = React.useState<boolean>(false)

  const changePoi = (index: number) => {
    setDescription(pointsOfInterests[index].displayedDescription ?? '')
    setSubtitle(pointsOfInterests[index].displayedSubtitle ?? '')
    setTitle(pointsOfInterests[index].displayedTitle ?? '')
    setButtonText(pointsOfInterests[index].buttonText ?? '')
    setGallery(pointsOfInterests[index].gallery ?? [])
  }

  return (
    <Grid container style={{backgroundColor: 'black'}}>
      <Grid item container xs={4}>
        <Grid item>
          <Grid container item direction="column" xs={9} spacing={3}
                style={{padding: theme.spacing(2, 3), color: 'white'}}>
            <Grid item><Typography>{title}</Typography></Grid>
            <Grid item>"<Typography style={{display: 'inline-block'}}>{subtitle}</Typography>"</Grid>
            <Grid item><Typography>{description}</Typography></Grid>
            <Grid item container justify="center">
              <Button variant="outlined" style={{color: 'white', borderColor: 'white'}}>
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
            src={subjectPhoto}
            // src="https://via.placeholder.com/415x948"
            style={{height: '700px'}}
          />
          <Grid container item>
            {
              pointsOfInterests.map((poi: SanityPointOfInterest, poiIndex) => {
                  return <Grid
                    key={poiIndex}
                    item
                    style={{
                      position: 'absolute',
                      top: poi.yCoord,
                      left: poi.xCoord,
                      borderRadius: '12px'
                    }}>
                    <motion.div
                      initial={{
                        borderRadius: '12px'
                      }}
                      onClick={() => {
                        setIndex(poiIndex)
                      }}
                      whileHover={{
                        rotate: 90,
                        boxShadow: '0 0 8px rgb(255,255,255)',
                        borderRadius: '12px'
                      }}
                      // animate={{ rotate: 360 }}
                      // transition={{ duration: 1 }}
                    >
                      <div
                        style={{
                          borderRadius: '12px',
                          padding: theme.spacing(.125, .5),
                          backgroundColor: poiIndex === index ? '#e54b4b' : 'white'
                        }}>
                        <img
                          src={pointOfInterestMarker}
                          style={{
                            width: '12px',
                            height: '12px'
                          }}/>
                      </div>
                    </motion.div>

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
            <Grid item container alignContent="center" justify="center" style={{width: '206px'}}>
              {
                gallery.map(
                  (galleryItem, innerIndex:number) => {
                    return <Grid key={innerIndex} item xs={6}>
                      <img
                        // src={poi.image.url}
                        src={`https://via.placeholder.com/100/${pointsOfInterests[index]?.galleryColor}/FFFFFF?text=${galleryItem.title}`}/>
                    </Grid>
                  })
              }
            </Grid>
          </Grid>
          <Grid item justify="center" container>
            <Grid item>
              <Button variant="outlined" style={{color: "whitesmoke", borderColor:"whitesmoke"}} onClick={() => setGalleryOpen(true)}>View Gallery</Button>
            </Grid>
          </Grid>
        </Grid>

      </Grid>

      <Modal
        open={galleryOpen}
      ><Grid container justify="center">
        <Grid container item xs={8} style={{backgroundColor: 'whitesmoke', padding: theme.spacing(3)}} justify="center">
          <Grid container item justify="flex-end">
            <Grid item>
              <IconButton onClick={()=>setGalleryOpen(false)}><Close/></IconButton>
            </Grid>
          </Grid>
          <Grid container item direction="column" spacing={4}>
            <Grid item container direction="column" alignItems="center" spacing={2}>
              <Grid item>
                <Typography variant="h5">{pointsOfInterests[index].displayedSubtitle}</Typography>
              </Grid>
              <Grid item>
                <Typography>{pointsOfInterests[index].displayedDescription}</Typography>
              </Grid>
            </Grid>
            <Grid container item justify="center">
              <Carousel>
                {
                  pointsOfInterests[index]?.gallery?.map((galleryImage, galleryIndex) => {
                    return <Grid key={galleryIndex} item xs={6} container alignItems="center" direction="column">
                      <Grid container item style={{width:480, height:550}}>
                        <img
                          src={`https://via.placeholder.com/480x550/${pointsOfInterests[index]?.galleryColor}/FFFFFF?text=${galleryImage.title}`}/>
                      </Grid>
                      <Grid item container justify="center">
                        <Typography variant="subtitle1">{galleryImage.title}</Typography>
                      </Grid>
                      <Grid item container wrap="nowrap" justify="center">
                        <Typography variant="caption" style={{textAlign: "center"}}>{galleryImage.description}</Typography>
                      </Grid>
                    </Grid>
                  })
                }
              </Carousel>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      </Modal>
    </Grid>
  )
}

export default PointOfInterest