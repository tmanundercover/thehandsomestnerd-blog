import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Grid, Typography} from "@material-ui/core";
import LinearProgressWithLabel from "../styled/LinearProgressWithLabel";
import theme from "../../common/Theme";
import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../../sanityClient";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(4,4)
  },
  title: {
    fontWeight: 700,
    fontSize: "30px",
    lineHeight: 1.4,
    marginBottom: theme.spacing(4)
  },
  skillsText: {
    fontSize: '15px',
    lineHeight: '30px',
    letterSpacing: '1px',
    fontWeight: 400,
    color: "#767676"
  },
  skillsTextContainer: {
    // width: "550px"
    paddingRight: theme.spacing(14)
  }
}))

export type SkillsSectionProps = {
  skillsHeading: string,
  skillsText: string,
  skills: any[]
}

const SkillsSection: FunctionComponent<SkillsSectionProps> = (props) => {
  const classes = useStyles(theme)

  return (
    <Grid container alignItems="stretch" className={classes.root} spacing={4}>
      <Grid container item xs={12} sm={6}>
        <Grid container item direction="column" className={classes.skillsTextContainer}>
          <Typography className={classes.title}>
            {props.skillsHeading}
          </Typography>
          <Typography component="div" className={classes.skillsText}>
            {
              props.skillsText ? <BlockContent
                  blocks={props.skillsText}
                  projectId={sanityClient.config().projectId}
                  dataset={sanityClient.config().dataset}
                />:<></>
            }
          </Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12} sm={6}>
        <Grid container item spacing={3}>
          {
            props?.skills?.map(
              (skill: { skillName: string, percentage: number },index: number) =>
                skill && <Grid key={"skill-percentage-"+index} container direction="column" item>
                  <LinearProgressWithLabel value={skill.percentage} label={skill.skillName}/>
                </Grid>)
          }
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SkillsSection