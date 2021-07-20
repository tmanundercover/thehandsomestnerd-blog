import {
  Button,
  CircularProgress,
  FormControl,
  Grid,
  Hidden,
  InputLabel,
  MenuItem,
  MuiThemeProvider,
  Select,
  Slide,
  TextField,
  Typography
} from '@material-ui/core'
import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import theme from '../../../common/Theme'
import leadClient, {UpdateLeadRequest} from '../leadClient'
import {useHistory} from 'react-router-dom'
import {StepProps} from '../PreSignup'
import CssGeogrid from '../css-geogrid/CssGeogrid'
import GeogridShapeContainer from '../css-geogrid/GeoGridShapeContainer'
import abTheme from '../../abReplica/common/Theme'

export const useStyles = makeStyles((theme: Theme) => ({
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
    height: '40px',
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
    background: '#CEE4D1',
    borderRadius: '51.07px',
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
    position: 'absolute'
  },
  formFieldsContainer: {
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(6),
      height: '268px'

    },
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(5),
      height: '300px'

    },
    [theme.breakpoints.up('lg')]: {
      marginTop: theme.spacing(5.25),
      height: '288px'
    }
  },
  disabledButton: {
    marginTop: theme.spacing(1)
  }
}))

const Step2: FunctionComponent<StepProps> = ({lead, setLead}: StepProps) => {
  const classes = useStyles(abTheme)
  const history = useHistory()

  const [validBrandName, setValidBrandName] = React.useState(true)
  const [validWebsite, setValidWebsite] = React.useState(true)
  const [formSubmitting, setFormSubmitting] = React.useState(false)

  React.useEffect(() => {
    if (!lead.email || lead.email === '') {
      history.push('/apply/step-1')
    }
  }, [])

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
      history.push('/apply/step-3')
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
              Introduce your&nbsp;
              <div className={classes.responsiveTitleBrand}>
                <Slide in={true} direction={'right'} timeout={800}>
                  <div className={classes.step2Accent}>
                  </div>
                </Slide>
                <Typography
                  component="div"
                  variant="h4"
                  display="inline"
                  color="textSecondary"
                  className={`${classes.step2AccentTypography} ${classes.responsiveTitle}`}
                >
                  brand.
                </Typography>
              </div>


            </Typography>
          </Grid>
          <Grid container direction="column" alignItems="center" justify="space-between"
                className={classes.formFieldsContainer}>
            <Grid container justify="center" item className={classes.nameContainer}>
              <FormControl className={classes.formControl}>
                <TextField
                  fullWidth={true}
                  error={!validBrandName}
                  helperText={validBrandName ? '' : 'Please provide a valid brand name.'}
                  label="Brand Name"
                  id="brandName"
                  name="brand name"
                  type="text"
                  value={lead.brandName ?? ''}
                  onChange={(e): void => onBrandNameChange(e.target.value)}
                  onBlur={(e): void => validateBrandName(e.target.value)}
                />
              </FormControl>
            </Grid>

            <Grid container justify="center" item className={classes.websiteContainer}>
              <FormControl className={classes.formControl}>
                <TextField
                  fullWidth={true}
                  error={!validWebsite}
                  helperText={validWebsite ? '' : 'Please provide a valid website.'}
                  label="Website"
                  id="webSite"
                  name="website"
                  type="text"
                  value={lead.website ?? ''}
                  onChange={(e): void => onWebsiteChange(e.target.value)}
                  onBlur={(e): void => validateWebsite(e.target.value)}
                />
              </FormControl>
            </Grid>

            <Grid container justify="center" item className={classes.loanAmountContainer}>
              <FormControl className={classes.formControl}>
                <InputLabel id="select-desired-loan-amount-label">Desired Loan Amount</InputLabel>
                <Select labelId="select-desired-loan-amount-label" id="select-desired-loan-amount"
                        value={lead.desiredLoanAmount ?? ''}
                        onChange={(e): void => onDesiredLoanAmountChange(e.target.value as string)}>
                  <MenuItem value="" disabled>Desired Loan Amount</MenuItem>
                  <MenuItem value="Not sure yet">Not sure yet</MenuItem>
                  <MenuItem value="Under $1M">Under $1M</MenuItem>
                  <MenuItem value="$1M - $5M">$1M - $5M</MenuItem>
                  <MenuItem value="$5M - $10M+">$5M - $10M+</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container item>
            <Button
              color="primary"
              variant="contained"
              disabled={!isFormValid() || formSubmitting}
              aria-label="next to step 3"
              classes={{disabled: classes.disabledButton}}
              className={classes.button}
              fullWidth={true}
              onClick={updateLead}
            >
              {!formSubmitting && <Typography variant="button" align="center">Next</Typography>}
              {formSubmitting && <CircularProgress color="inherit" size="22px"/>}
            </Button>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.geogrid}>
            <CssGeogrid stepNumber={2}/>
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


export default Step2

