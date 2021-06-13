import {Box, createStyles, Grid, LinearProgress, LinearProgressProps, Typography, withStyles} from "@material-ui/core";
import React from "react";
import {Theme} from "@material-ui/core/styles";

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5
    },
  }),
)(LinearProgress);

function LinearProgressWithLabel(props: LinearProgressProps & { value: number, label: string }) {
  return (
    <Grid container direction="column">
      <Grid container item justify="space-between">
        <Typography>{props.label}</Typography>
        <Typography variant="body2">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Grid>
      <Box width="100%" mr={1}>
        <BorderLinearProgress variant="determinate" {...props} />
      </Box>
    </Grid>
  );
}

export default LinearProgressWithLabel