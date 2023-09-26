import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Grid} from '@material-ui/core'
import FooterMenuContainer from './FooterMenuContainer'
import {SanityTransformHwHomePage} from "../../../common/sanityIo/Types";
import MixedFeelingsByTTheme, {COLORS} from "../../../theme/MixedFeelingsByTTheme";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: COLORS.DARKORANGE,
    // color: '#FDF3EB',
    // marginLeft: -1 * theme.spacing(1),
    // zIndex: 1000,
    padding: theme.spacing(4),
    '& .MuiFormLabel-root': {
      color: 'white',
    },
  },
  emailContainer: {
    height: '72px',
  },
  columnHeader: {
    fontWeight: 500,
    color: '#FDF3EB',
    marginBottom: '16px',
  },
  footerLink: {
    marginBottom: '8px',
  },
  newsletterForm: {
    maxWidth: '370px',
  },
  emailInputProps: {
    borderColor: '#FDF3EB',
    color: '#FDF3EB !important',
  },
}))

interface IProps {
  footerMenuSlug?:string
  homePage:  SanityTransformHwHomePage
  updateIsLoading?: (value:boolean) => void
}

const Footer: FunctionComponent<IProps> = (props:IProps) => {
  const classes = useStyles(MixedFeelingsByTTheme)

  return (
    <Grid container className={classes.root}>
      <Grid container justifyContent="flex-start">
        <Grid item xs={12}>
          <FooterMenuContainer updateIsLoading={props.updateIsLoading} homePage={props.homePage} menuContainerSlug={props.footerMenuSlug}/>
        </Grid>
      </Grid>
    </Grid>

  )
}

export default Footer