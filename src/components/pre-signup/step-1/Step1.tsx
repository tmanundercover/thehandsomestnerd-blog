import {Button, CircularProgress, Grid, Hidden, MuiThemeProvider, TextField, Typography} from '@material-ui/core'
import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import leadClient, {UpdateLeadRequest} from '../leadClient'
import {useHistory} from 'react-router-dom'
import {StepProps} from '../PreSignup'
import CssGeogrid from '../css-geogrid/CssGeogrid'
import GeogridShapeContainer from '../css-geogrid/GeoGridShapeContainer'
import abTheme from '../../abReplica/common/Theme'
import {motion} from 'framer-motion'
import emailValidator from '../../../utils/emailValidator'

export const useStepStyles = makeStyles((theme: Theme) => ({
  root: {
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
      paddingTop: theme.spacing(16)
    }
  },
  formContainer: {
    zIndex: 1200,
    [theme.breakpoints.down('xs')]: {
      width: '300px'
    },
    [theme.breakpoints.up('sm')]: {
      width: '492px'
    }
  },
  button: {
    // height: '40px',
    padding: '8px',
    boxShadow: '8px 8px #CEE4D1',
    [theme.breakpoints.down('xs')]: {
      boxShadow: '4px 4px #CEE4D1'
    }
  },
  nameContainer: {
    height: '72px'
  },
  websiteContainer: {
    height: '72px'
  },
  loanAmountContainer: {
    height: '72px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(6)
    },
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(6.5)
    }
  },
  formControl: {
    margin: theme.spacing(1),
    width: '377px'
  },
  emailTextField: {
    [theme.breakpoints.up('sm')]: {
      width: '377px',
    },
  },
  pageIndicator: {
    display: 'block',
    [theme.breakpoints.down('xs')]: {
      width: '24px'
    }
  },
  footer: {
    position: 'fixed',
    bottom: 0,
    right: 0
  },
  emailContainer: {
    height: '72px',
    marginTop: theme.spacing(11),
  },
  responsiveTitle: {
    borderLeft: '8px solid transparent',
    [theme.breakpoints.up('sm')]: theme.typography.h3
  },
  responsiveTitleBrand: {
    position: 'relative'
  },
  geogrid: {
    marginLeft: theme.spacing(5)
  },
  step2Accent: {
    display: 'inline-flex',
    // background: '#CEE4D1',
    // borderRadius: '51.07px',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      top: '5px',
      left: '-4px',
      width: '122px',
      height: '22.3px'
    },
    [theme.breakpoints.up('sm')]: {
      top: '6px',
      left: '-8px',
      width: '164px',
      height: '31.3px'
    }
  },
  step2AccentTypography: {
    top: 0,
    left: 0,
    position: 'absolute',
    textTransform: "uppercase"
  },
  formFieldsContainer: {
    height: "170px"
  },
  disabledButton: {
    marginTop: theme.spacing(1)
  }
}))

const Step1: FunctionComponent<StepProps> = ({lead, setLead}: StepProps) => {
  const classes = useStepStyles(abTheme)
  const history = useHistory()

  const [validBrandName, setValidBrandName] = React.useState(true)
  const [validWebsite, setValidWebsite] = React.useState(true)
  const [formSubmitting, setFormSubmitting] = React.useState(false)
  const [validEmail,setValidEmail] = React.useState<boolean>(true)

  React.useEffect(() => {

  }, [])


  const onEmailChange = (newEmail: string): void => {
    setLead((state: UpdateLeadRequest) => ({...state, email: newEmail}))
    emailValidator.isValidEmail(newEmail)
  }

  const validateBrandName = (newBrandName: string): void => {
    /[a-zA-Z]/.test(newBrandName) ? setValidBrandName(true) : setValidBrandName(false)
  }

  const validateWebsite = (newBrandName: string): void => {
    /[a-zA-Z]/.test(newBrandName) ? setValidWebsite(true) : setValidWebsite(false)
  }

  const isLoanAmountValid = (): boolean => {
    return lead.desiredLoanAmount !== ''
  }

  const onBrandNameChange = (newBrandName: string): void => {
    setLead((state: UpdateLeadRequest) => ({...state, brandName: newBrandName}))
    validateBrandName(newBrandName)
  }

  const onWebsiteChange = (newWebsite: string): void => {
    setLead((state: UpdateLeadRequest) => ({...state, website: newWebsite}))
    validateWebsite(newWebsite)
  }

  const onDesiredLoanAmountChange = (newDesiredLoanAmount: string): void => {
    setLead((state: UpdateLeadRequest) => ({...state, desiredLoanAmount: newDesiredLoanAmount}))
    validateBrandName(lead.brandName ?? '')
  }

  const isFormValid = () => {
    return validBrandName && validWebsite && isLoanAmountValid()
  }

  const updateLead = (): Promise<void> => {
    setFormSubmitting(true)

    const updateLeadRequest: UpdateLeadRequest = {
      email: lead.email,
      brandName: lead.brandName,
      website: lead.website,
      desiredLoanAmount: lead.desiredLoanAmount
    }

    return leadClient.updateLead(updateLeadRequest).then(() => {
      history.push('/BAL/boldy')
    }).catch(() => {
      setFormSubmitting(false)
    })
  }

  return (
    <MuiThemeProvider theme={abTheme}>
      <Grid container alignItems="stretch" className={classes.root}>
        <Grid container direction="column" alignContent="center" className={classes.formContainer}>
          <Grid item container direction="column" alignItems="center">

            <motion.div
              initial={{scale:2}}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
            <Grid  container item>
              <Typography
                component="span"
                variant="h1"
                color="primary"
                display="inline"
                style={{textAlign: 'center'}}
                className={classes.responsiveTitle}>
                Cold
              </Typography>
            </Grid>
            </motion.div>
            <Typography
              variant="h1"
              color="textSecondary"
              style={{textAlign: 'center'}}
              className={classes.responsiveTitle}>
              Lead Generation
            </Typography>
          </Grid>
          <Grid container direction="column" alignItems="center"
                className={classes.formFieldsContainer}>
            <Grid container justify="center" item>

            </Grid>
          </Grid>
          <Grid container item direction="column">
            <Grid item><Grid container direction="column" alignItems="center">
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
                  onBlur={(e): void =>
                  {
                    emailValidator.isValidEmail(e.target.value)
                  }}
                />
              </Grid>
            </Grid></Grid>
            <Grid item><Button
              color="primary"
              variant="contained"
              // disabled={!isFormValid() || formSubmitting}
              aria-label="next to step 3"
              classes={{disabled: classes.disabledButton}}
              className={classes.button}
              fullWidth={true}
              onClick={updateLead}
            >
              {!formSubmitting && <Typography variant="button" align="center">Click Here</Typography>}
              {formSubmitting && <CircularProgress color="inherit" size="22px"/>}
            </Button></Grid>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.geogrid}>
            <CssGeogrid stepNumber={1}/>
          </Grid>
        </Hidden>
        <Hidden lgUp>
          <Grid container item direction="column" className={classes.footer} alignContent="flex-end">
            <GeogridShapeContainer color="#FB7C6A" shape="triangleUpRight" pageIndicator/>
            <GeogridShapeContainer color="#CEE4D1" shape="triangleUpRight" fade pageIndicator/>
            <GeogridShapeContainer color="#FDF3EB" shape="triangleUpRight" pageIndicator/>
          </Grid>
        </Hidden>
      </Grid>
    </MuiThemeProvider>
  )
}


export default Step1

