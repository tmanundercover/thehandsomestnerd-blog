import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Grid, Typography} from "@material-ui/core";
import theme from "../../common/Theme";
import sanityClient from "../../sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import {urlFor} from '../abReplica/static-pages/cmsStaticPagesClient'

const SECTION_HEIGHT = 600

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // height: `calc(100vh - 80px)`,
    height: `650px`,
    backgroundColor: "black"
  },
  govtName: {
    color: "whitesmoke",
    fontSize: '72px',
    fontWeight: "bolder",
    lineHeight: 1.4,
    marginRight: theme.spacing(3)
  },
  careerTitle: {
    color: "whitesmoke",
    marginTop: '32px',
    letterSpacing: '1.5px',
    fontSize: '19px',
    fontWeight: 600,
    lineHeight: '30px'
  },
  heroImage: {
    maxHeight: `${SECTION_HEIGHT}px`
  }
}))

export type IntroSectionProps = {
  clientName: string,
  occupation: string,
  heroImage: any
}

const IntroSection: FunctionComponent<IntroSectionProps> = (props) => {
  const classes = useStyles(theme)

  return (
    <Grid container className={classes.root} alignItems="stretch" style={{
      backgroundImage:`url('${urlFor(props.heroImage).height(450).url()??""}')`,
      // backgroundPosition: 'center', /* Center the image */
      backgroundRepeat: 'no-repeat', /* Do not repeat the image */
      backgroundSize: 'cover' /* Resize the background image to cover the entire container */
    }}>
      <Grid container item direction="column" justify="flex-end" alignItems="flex-end" spacing={5}>
        <Grid item container direction={'column'} alignContent={'flex-end'}>
          <Typography
            className={classes.govtName}>
            {props.clientName}
          </Typography>
          <Typography
            className={classes.careerTitle}>
            {props.occupation}
          </Typography>
        </Grid>
      <Grid container direction="column" item justify="center" >


      </Grid>
      </Grid>
    </Grid>
  )
}

export default IntroSection