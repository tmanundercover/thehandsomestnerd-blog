import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Grid, Link, Typography} from "@material-ui/core";
import theme from "../../common/Theme";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "black",
    padding: theme.spacing(10),
    position: "relative"
  },
  contactMe: {
    fontWeight: 700
  },
  "@keyframes myAnim": {
    "0%": {
      opacity: 0
    },
    "100%": {
      opacity: 1
    }
  },
  h3: {
    fontWeight: 700,
    fontSize: '30px'
  },
  blinkingCursor: {
    "&:before":{
      width: '20px',
      content: '""',
      height: '4px',
      position: 'absolute',
      backgroundColor: "whitesmoke",
      top:'115px',
      opacity: '1',
      animation: `$myAnim .9s ease infinite`
    }
  }
}))

export type BookMeSectionProps = {
  prompt: string
}

const BookMeSection: FunctionComponent<BookMeSectionProps> = (props) => {

  const classes = useStyles(theme)

  return (
    <Grid container alignItems="center" className={classes.root} justify="space-between">
      <Grid item>
        <Typography variant="h3" style={{color:"whitesmoke"}} className={classes.h3}>
          {props.prompt}<span style={{color:"whitesmoke"}} className={classes.blinkingCursor}></span>
        </Typography>
      </Grid>
      <Grid item>
        <Link color="textSecondary">
          <Typography style={{color:"whitesmoke"}} className={classes.contactMe}>Contact Me</Typography>
        </Link>
      </Grid>
    </Grid>
  )
}

export default BookMeSection