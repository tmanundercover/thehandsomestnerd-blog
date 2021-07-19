import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Button, Grid, Typography} from '@material-ui/core'
import theme from '../../common/Theme'
import {Check} from '@material-ui/icons'
import sanityClient from '../../sanityClient'
import BlockContent from '@sanity/block-content-to-react'
import {SanityImageAssetDocument} from '@sanity/client'
import {urlFor} from '../abReplica/static-pages/cmsStaticPagesClient'

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    [theme.breakpoints.down('sm')]:{
    height: `max-content`,
    padding: theme.spacing(5, 5)
    },
    height: '100vh',
    width: '100vw',
    padding: theme.spacing(0, 5)
  },
  profileImage: {
    // marginLeft: '124px',
    boxShadow: '5px 5px 5px rgba(0,0,0,.3)',
  },
  aboutMe: {
    fontWeight: 800,
    letterSpacing: '10px',
    lineHeight: 1.4,
    fontSize: '30px',
    textTransform: 'uppercase',
  },
  me: {
    display: 'inline-block',
    marginLeft: '8px',
  },
  bioText: {
    fontSize: '15px',
    lineHeight: '30px',
    letterSpacing: '1px',
    fontWeight: 400,
    color: '#767676',
  },
  bulletedListItem: {
    display: 'inline-block',
    marginLeft: theme.spacing(2),
    fontSize: '15px',
    lineHeight: '30px',
    lineSpacing: '1px',
    fontWeight: 700,
  },
  aboutMeSection: {
    // height: "450px",
    paddingLeft: theme.spacing(10),
  },
  resumeButton: {
    padding: theme.spacing(2, 4),
  },
}))

export type ProfileSectionProps = {
  aboutMeBody?: string,
  specialties?: string[],
  profileImage?: SanityImageAssetDocument
}

const ProfileSection: FunctionComponent<ProfileSectionProps> = (props) => {
  const classes = useStyles(theme)

  return (
    <Grid container item className={classes.root} xs={12} alignItems="center">
      <Grid container item xs={12} md={5} justify="center" alignItems="center">

        <Grid container item style={{
          width: '400px',
          height: '540px',
          backgroundImage: `url('${urlFor(props.profileImage).width(500).url() ?? ''}')`,
          // backgroundPosition: 'center', /* Center the image */
          backgroundRepeat: 'no-repeat', /* Do not repeat the image */
          // backgroundSize: 'cover' /* Resize the background image to cover the entire container */
        }}/>

      </Grid>
      <Grid item xs={12} md={7}>


        <Grid container direction="column">
          <Grid container item direction="column" justify="space-around" className={classes.aboutMeSection} spacing={2}>
            <Grid container item>
              <Typography variant="h3" className={classes.aboutMe}>
                About
                <Typography component="span" variant="h3" className={`${classes.aboutMe} ${classes.me}`}
                            color="primary">
                  Me
                </Typography>
              </Typography>
            </Grid>
            <Grid container item>
              <Typography component="span" className={classes.bioText}>
                {
                  props.aboutMeBody ? <BlockContent
                      blocks={props.aboutMeBody}
                      projectId={sanityClient.config().projectId}
                      dataset={sanityClient.config().dataset}
                    /> :
                    <></>
                }
              </Typography>
            </Grid>
            <Grid container item>
              {
                props?.specialties?.map(
                  (specialty, index) =>
                    <Grid container key={index} item xs={12} md={6} alignItems="center" wrap="nowrap">
                      <Check/>
                      <Typography className={classes.bulletedListItem} noWrap>
                        {specialty}
                      </Typography>
                    </Grid>,
                )
              }
            </Grid>
            {/*<Grid item>*/}
            {/*  <Button variant="contained" color="primary" className={classes.resumeButton}>*/}
            {/*    <Typography variant="button" style={{color: theme.palette.background.default}}>Download CV</Typography></Button>*/}
            {/*</Grid>*/}
          </Grid>
        </Grid>



      </Grid>
    </Grid>
  )
}

export default ProfileSection