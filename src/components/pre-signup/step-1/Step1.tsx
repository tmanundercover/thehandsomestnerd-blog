import {Button, CircularProgress, Grid, Hidden, TextField, Typography} from '@material-ui/core'
import {useHistory, useLocation} from 'react-router-dom'
import React, {FunctionComponent} from 'react'
import {makeStyles, MuiThemeProvider, Theme} from '@material-ui/core/styles'
import theme from '../../../common/Theme'
import leadClient, {UpdateLeadRequest} from '../leadClient'
import {StepProps} from '../PreSignup'
import CssGeogrid from '../css-geogrid/CssGeogrid'
import GeogridShapeContainer from '../css-geogrid/GeoGridShapeContainer'
import emailValidator from '../../../utils/emailValidator'
import abTheme from '../../abReplica/common/Theme'

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
      paddingTop: theme.spacing(16),
    },
  },
  formContainer: {
    zIndex: 1200,
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '492px',
    },
  },
  button: {
    height: '40px',
    boxShadow: '8px 8px #FCF0E9',
    [theme.breakpoints.down('xs')]: {
      boxShadow: '4px 4px #FCF0E9',
    },
  },
  emailContainer: {
    height: '72px',
    marginTop: theme.spacing(11),
  },
  pageIndicator: {
    display: 'block',
    [theme.breakpoints.down('xs')]: {
      width: '24px',
    },
  },
  footer: {
    position: 'fixed',
    width: 'calc(100vw)',
    left: 0,
    bottom: 0,
  },
  responsiveTitle: {
    [theme.breakpoints.up('sm')]: theme.typography.h3,
  },
  emailTextField: {
    [theme.breakpoints.up('sm')]: {
      width: '377px',
    },
  },
  geogrid: {
    marginLeft: theme.spacing(5),
  },
  formFieldsContainer: {
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(6),
      height: '268px',

    },
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(5),
      height: '300px',

    },
    [theme.breakpoints.up('lg')]: {
      marginTop: theme.spacing(5),
      height: '288px',
    },
  },
  disabledButton: {
    marginTop: theme.spacing(1),
  },
  animatedPageIndicator: {
    width: '32px',
    [theme.breakpoints.down('xs')]: {
      width: '24px',
    },
    position: 'relative',
  },
}))


const Step1: FunctionComponent<StepProps> = ({lead, setLead}: StepProps) => {
  const classes = useStyles(abTheme)
  const history = useHistory()

  const [validEmail, setValidEmail] = React.useState(true)
  const [formSubmitting, setFormSubmitting] = React.useState(false)

  React.useEffect(() => {
  }, [])

  const validateEmail = (newEmail: string): void => {
    newEmail.length > 0 ? setValidEmail(emailValidator.isValidEmail(newEmail)) : setValidEmail(true)
  }

  const onEmailChange = (newEmail: string): void => {
    setLead((state: UpdateLeadRequest) => ({...state, email: newEmail}))
    if (!validEmail) {
      validateEmail(newEmail)
    }
  }

  const createLead = (): Promise<void> => {
    setFormSubmitting(true)
    return leadClient.createLead(lead.email).then(() => {
      history.push('/apply/step-2')
    }).catch(() => {
      setFormSubmitting(false)
    })
  }

  return (
    <MuiThemeProvider theme={abTheme}>

    <Grid container alignItems="stretch" className={classes.root}>
      <Grid container direction="column" alignContent="center" className={classes.formContainer}>
        <Grid item>
          <Typography
            variant="h4"
            color="textSecondary"
            className={classes.responsiveTitle}>
            Take your&nbsp;
            <Typography
              component="span"
              variant="h4"
              color="primary"
              display="inline"
              className={classes.responsiveTitle}>
              first step
            </Typography>
            &nbsp;to financing:
          </Typography>
        </Grid>
        <Grid container direction="column" alignItems="center"
              className={classes.formFieldsContainer}>
          <Grid container justify="center" item className={classes.emailContainer}>
            <TextField
              fullWidth={true}
              error={!validEmail}
              helperText={validEmail ? '' : 'Invalid email, please provide a valid address.'}
              label="Your Email"
              id="email"
              name="email address"
              type="email"
              className={classes.emailTextField}
              value={lead.email}
              onChange={(e): void => onEmailChange(e.target.value)}
              onBlur={(e): void => validateEmail(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid container item>
          <Button
            color="primary"
            variant="contained"
            disabled={!(emailValidator.isValidEmail(lead.email) && lead.email.length > 0) || formSubmitting}
            aria-label="next to step 2"
            classes={{disabled: classes.disabledButton}}
            className={classes.button}
            fullWidth={true}
            onClick={createLead}
          >
            {!formSubmitting && <Typography variant="button" align="center">Next</Typography>}
            {formSubmitting && <CircularProgress color="inherit" size="22px"/>}
          </Button>
        </Grid>
      </Grid>
      <Hidden mdDown>
        <Grid item className={classes.geogrid}>
          <CssGeogrid stepNumber={1}/>
        </Grid>
      </Hidden>
      <Hidden lgUp>
        <Grid container item direction="column" className={classes.footer} alignContent="flex-end">
          <GeogridShapeContainer color="#FB7C6A" shape='triangleUpRight' fade pageIndicator/>
          <GeogridShapeContainer color="#FDF3EB" shape='triangleUpRight' pageIndicator/>
          <GeogridShapeContainer color="#FDF3EB" shape='triangleUpRight' pageIndicator/>
        </Grid>
      </Hidden>
    </Grid>
    </MuiThemeProvider>
  )
}


export default Step1

