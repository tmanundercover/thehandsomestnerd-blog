import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Button, Grid, Link, Typography} from '@material-ui/core'
import theme from '../../common/Theme'
import drLogo from './logo-mark.png'
import faceServicesImage from './Face-services.png'
import laserServicesImage from './Laser-services.png'
import bodyServicesImage from './Body-services.png'
import skinServicesImage from './Skin-services.png'
import {motion, useAnimation} from 'framer-motion'

export const useStyles = makeStyles((theme: Theme) => ({}))

export type ModernServiceProps = {}

type SanityModernServices = {
  title?: string,
  image?: any,
  servicesLinks?: { title: string, url: string }[],
  buttonText?: string
}

const services: SanityModernServices[] = [
  {
    title: 'Face',
    image: faceServicesImage,
    servicesLinks: [
      {
        title: 'Wrinkle Treatments',
        url: '/face1'
      },
      {
        title: 'Face lift & Neck lift',
        url: '/face2'
      },
      {
        title: 'Brow Lift',
        url: '/face3'
      },
      {
        title: 'Eyelid Enhancement',
        url: '/face4'
      },
      {
        title: 'Chin & Cheek',
        url: '/face5'
      },
      {
        title: 'Lips',
        url: '/face6'
      },
      {
        title: 'Under Eyes',
        url: '/face7'
      },
      {
        title: 'Temples',
        url: '/face7'
      }
    ],
    buttonText: 'Face Gallery'
  },
  {
    title: 'Laser',
    image: laserServicesImage,
    servicesLinks: [
      {
        title: 'Wrinkle Treatments',
        url: '/face1'
      },
      {
        title: 'Face lift & Neck lift',
        url: '/face2'
      },
      {
        title: 'Brow Lift',
        url: '/face3'
      },
      {
        title: 'Eyelid Enhancement',
        url: '/face4'
      },
      {
        title: 'Chin & Cheek',
        url: '/face5'
      },
      {
        title: 'Lips',
        url: '/face6'
      },
      {
        title: 'Under Eyes',
        url: '/face7'
      },
      {
        title: 'Temples',
        url: '/face7'
      }
    ],
    buttonText: 'Laser Gallery'
  },
  {
    title: 'Body',
    image: bodyServicesImage,
    servicesLinks: [
      {
        title: 'Wrinkle Treatments',
        url: '/face1'
      },
      {
        title: 'Face lift & Neck lift',
        url: '/face2'
      },
      {
        title: 'Brow Lift',
        url: '/face3'
      },
      {
        title: 'Eyelid Enhancement',
        url: '/face4'
      },
      {
        title: 'Chin & Cheek',
        url: '/face5'
      },
      {
        title: 'Lips',
        url: '/face6'
      },
      {
        title: 'Under Eyes',
        url: '/face7'
      },
      {
        title: 'Temples',
        url: '/face7'
      }
    ],
    buttonText: 'Body Gallery'
  },
  {
    title: 'Skin',
    image: skinServicesImage,
    servicesLinks: [
      {
        title: 'Wrinkle Treatments',
        url: '/face1'
      },
      {
        title: 'Face lift & Neck lift',
        url: '/face2'
      },
      {
        title: 'Brow Lift',
        url: '/face3'
      },
      {
        title: 'Eyelid Enhancement',
        url: '/face4'
      },
      {
        title: 'Chin & Cheek',
        url: '/face5'
      },
      {
        title: 'Lips',
        url: '/face6'
      },
      {
        title: 'Under Eyes',
        url: '/face7'
      },
      {
        title: 'Temples',
        url: '/face7'
      }
    ],
    buttonText: 'Skin Gallery'
  }
]

const ModernServiceSection: FunctionComponent<ModernServiceProps> = (props) => {
  const classes = useStyles()
  React.useEffect(() => {

  }, [])
  const controls = useAnimation()

  const [showLinks, setShowLinks] = React.useState<boolean[]>([false, false, false, false])

  React.useEffect(() => {
    console.log('SHowlinks', showLinks)
    if (showLinks && showLinks.length) {
      showLinks.map((serviceStatus, index) => {
        if (serviceStatus) {
          controls.start('visible' + index)
        } else {
          controls.start('hidden' + index)
        }
      })
    }
  }, [showLinks])

  return (
    <Grid container>
      {
        services.map((service: SanityModernServices, index) => {
          return <Grid key={index} container xs={12} sm={6} md={3} item style={{position: 'relative', height:"100%"}}>
            {
              <Grid
                container
                onMouseEnter={() => {
                  let newLinkState = new Array(4).fill(false)
                  newLinkState[index] = true

                  setShowLinks(newLinkState)
                }}
                direction="column"
                alignItems="center"
                justify="center"
                item
                spacing={1}
                style={{
                  height: '500px',
                  backgroundImage: `url(${service.image})`,
                  backgroundRepeat: 'repeat',
                  backgroundSize: 'cover',
                  color: 'whitesmoke',
                  padding: theme.spacing(6, 4),
                  // marginBottom: '32px'
                }}>
                <Grid item><Typography variant="h2">{service.title}</Typography></Grid>
              </Grid>
            }
            {
              <motion.div
                style={{width: '100%', position: 'absolute', top: 0}}
                initial={'hidden' + index}
                animate={controls}
                variants={{
                  ['visible' + index]: {opacity: 1, scale: 1},
                  ['hidden' + index]: {opacity: 0, scale: 0}
                }}
                exit={'hidden' + index}
                transition={{duration: .5}}
              >
                <Grid
                  key={`${service.title}`}
                  container
                  onMouseLeave={() => {
                    setShowLinks(new Array(4).fill(false))
                  }}
                  direction="column"
                  alignItems="center"
                  item
                  spacing={1}
                  style={{
                    height: '500px',
                    backgroundColor: 'black',
                    backgroundImage: `url(${drLogo})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "none",
                    color: 'whitesmoke',
                    padding: theme.spacing(6, 4),
                    // marginBottom: '32px'
                  }}>
                  <Grid item><Typography variant="h4">{service.title}</Typography></Grid>
                  {
                    service?.servicesLinks && service.servicesLinks.map((serviceLink: { title: string, url: string }, index) => {
                      return <Grid item key={index}>
                        <Link href="#"
                              style={{
                                fontSize: '17px',
                                lineHeight: 1.5,
                                color: 'whitesmoke'
                              }}>{serviceLink.title}</Link>
                      </Grid>
                    })
                  }
                  <Grid item container justify="center">
                    <Button
                      href="#"
                      variant="outlined"
                      style={{
                      color: 'white',
                      borderColor: 'white',
                      marginTop: '16px'
                    }}>{service.buttonText}</Button>
                  </Grid>
                </Grid>
              </motion.div>
            }
          </Grid>
        })
      }
    </Grid>
  )
}

export default ModernServiceSection