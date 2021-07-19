import {
  Button,
  CircularProgress,
  FormControl,
  Grid,
  Hidden,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core'
import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import theme from '../../../common/Theme'
import leadClient, {UpdateLeadRequest} from '../leadClient'
import {useHistory} from 'react-router-dom'
import {StepProps} from '../PreSignup'
import CssGeogrid from '../css-geogrid/CssGeogrid'
import GeogridShapeContainer from '../css-geogrid/GeoGridShapeContainer'

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
    boxShadow: '8px 8px #565190',
    [theme.breakpoints.down('xs')]: {
      boxShadow: '4px 4px #565190',
    },
  },
  disabledButton: {
    marginTop: theme.spacing(1),
  },
  nameContainer: {
    height: '72px',
    marginTop: theme.spacing(12.375),
    marginBottom: theme.spacing(5.5),
  },
  revenueContainer: {
    height: '72px',
  },
  inventoryContainer: {
    height: '72px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(6.5),
    },
  },
  accountsReceivableContainer: {
    height: '72px',
  },
  formControl: {
    margin: theme.spacing(1),
    width: '377px',
  },
  pageIndicator: {
    display: 'block',
    [theme.breakpoints.down('xs')]: {
      width: '24px',
    },
  },
  footer: {
    position: 'fixed',
    bottom: 0,
    right: 0,
  },
  responsiveTitle: {
    [theme.breakpoints.only('xs')]: {
      fontSize: '34px',
      lineHeight: '39px',
    },
  },
  geogrid: {
    marginLeft: theme.spacing(5),
  },
  step3Accent: {
    position: 'absolute',

    border: '0 solid #565190',
    [theme.breakpoints.down('xs')]: {
      borderTopWidth: '8px',
      borderLeftWidth: '8px',
      borderRightWidth: '8px',
      borderBottomWidth: '8px',
      top: '-16px',
      right: '-7px',
    },
    [theme.breakpoints.up('sm')]: {
      borderTopWidth: '16px',
      borderLeftWidth: '16px',
      borderRightWidth: '16px',
      borderBottomWidth: '16px',
      top: '-29px',
      right: '-19px',
    },
    background: 'transparent',
    width: 0,
    height: 0,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    transform: 'rotate(45deg)',
  },
  step3AccentTypography: {
    position: 'relative',
    color: '#565190',
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
  skipThisStepButton: {
    marginTop: theme.spacing(3),
  },
}))

const Step3: FunctionComponent<StepProps> = ({lead, setLead}: StepProps) => {
  const classes = useStyles(theme)
  const history = useHistory()

  const [formSubmitting, setFormSubmitting] = React.useState(false)
  const [formSkipping, setFormSkipping] = React.useState(false)

  React.useEffect(() => {
    if (!lead.email) {
      history.push('/apply/step-1')
    } else {
    }
  }, [])

  const isRevenueValid = (): boolean => {
    return lead.revenue !== ''
  }
  const isInventoryValid = (): boolean => {
    return lead.inventory !== ''
  }
  const isAccountsReceivableValid = (): boolean => {
    return lead.accountsReceivable !== ''
  }

  const onRevenueChange = (newRevenue: string): void => {
    setLead((state: UpdateLeadRequest) => ({...state, revenue: newRevenue}))
  }

  const onInventoryChange = (newInventory: string): void => {
    setLead((state: UpdateLeadRequest) => ({...state, inventory: newInventory}))
  }

  const onAccountsReceivableChange = (newAR: string): void => {
    setLead((state: UpdateLeadRequest) => ({...state, accountsReceivable: newAR}))
  }

  const isFormValid = () => {
    return isInventoryValid() || isRevenueValid() || isAccountsReceivableValid()
  }

  const updateLead = (isSkip: boolean): Promise<void> => {
    isSkip ? setFormSkipping(true) : setFormSubmitting(true)

    let updateRequest: UpdateLeadRequest = {email: lead.email, submit: true}

    if (lead.revenue && lead.revenue.length > 0) {
      updateRequest = {...updateRequest, revenue: lead.revenue}
    }

    if (lead.accountsReceivable && lead.accountsReceivable.length > 0) {
      updateRequest = {...updateRequest, accountsReceivable: lead.accountsReceivable}
    }

    if (lead.inventory && lead.inventory.length > 0) {
      updateRequest = {...updateRequest, inventory: lead.inventory}
    }

    return leadClient.updateLead(updateRequest).then(() => {
      history.push('/apply/next-steps')
    }).catch(() => {
      setFormSkipping(false)
      setFormSubmitting(false)
    })
  }

  return (
    <Grid container alignItems="stretch" className={classes.root}>
      <Grid container direction="column" alignContent="center" className={classes.formContainer}>
        <Grid container item>
          <Typography
            variant="h3"
            className={`${classes.responsiveTitle} ${classes.step3AccentTypography}`}>
            Extra credit!&nbsp;
            <div className={classes.step3Accent}>
            </div>
          </Typography>

          <Typography
            component="div"
            variant="h3"
            display="inline"
            color="textSecondary"
            className={classes.responsiveTitle}
          >
            Do you know...
          </Typography>
        </Grid>
        <Grid container direction="column" alignItems="center" justify="space-between"
              className={classes.formFieldsContainer}>
          <Grid container justify="center" item className={classes.revenueContainer}>
            <FormControl className={classes.formControl}>
              <InputLabel id="select-company-revenue-label">Revenue</InputLabel>
              <Select labelId="select-company-revenue-label" id="select-company-revenue"
                      value={lead.revenue ?? ''}
                      onChange={(e): void => onRevenueChange(e.target.value as string)}>
                <MenuItem value="" disabled>Revenue</MenuItem>
                <MenuItem value="Not Sure">Not Sure</MenuItem>
                <MenuItem value="Under $1M">Under $1M</MenuItem>
                <MenuItem value="$1M - $10M">$1M - $10M</MenuItem>
                <MenuItem value="$10M - $100M+">$10M - $100M+</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid container justify="center" item className={classes.accountsReceivableContainer}>
            <FormControl className={classes.formControl}>
              <InputLabel id="select-accounts-receivable-label">Accounts Receivable</InputLabel>
              <Select labelId="select-accounts-receivable-label"
                      id="select-accounts-receivable"
                      value={lead.accountsReceivable ?? ''}
                      onChange={(e): void => onAccountsReceivableChange(e.target.value as string)}>
                <MenuItem value="" disabled>Accounts Receivable</MenuItem>
                <MenuItem value="Not Sure">Not Sure</MenuItem>
                <MenuItem value="Under $250K">Under $250K</MenuItem>
                <MenuItem value="$250K - $500K">$250K - $500K</MenuItem>
                <MenuItem value="$500K - $1M">$500K - $1M</MenuItem>
                <MenuItem value="Above $1M">Above $1M</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid container justify="center" item className={classes.inventoryContainer}>
            <FormControl className={classes.formControl}>
              <InputLabel id="select-inventory-label">Inventory</InputLabel>
              <Select labelId="select-inventory-label" id="select-inventory"
                      value={lead.inventory ?? ''}
                      onChange={(e): void => onInventoryChange(e.target.value as string)}>
                <MenuItem value="" disabled>Inventory</MenuItem>
                <MenuItem value="Not Sure">Not Sure</MenuItem>
                <MenuItem value="Under $250K">Under $250K</MenuItem>
                <MenuItem value="$250K - $500K">$250K - $500K</MenuItem>
                <MenuItem value="$500K - $1M">$500K - $1M</MenuItem>
                <MenuItem value="Above $1M">Above $1M</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container item>
          <Button
            color="primary"
            variant="contained"
            disabled={!isFormValid() || formSubmitting}
            aria-label="submit"
            classes={
              {
                disabled: classes.disabledButton,
              }
            }
            className={classes.button}
            fullWidth={true}
            onClick={() => updateLead(false)}
          >
            {!formSubmitting && <Typography variant="button" align="center">Submit</Typography>}
            {formSubmitting && <CircularProgress color="inherit" size="22px"/>}
          </Button>
        </Grid>
        <Grid container direction="column" alignItems="center">
          <Button
            color="primary"
            variant="text"
            disabled={formSkipping}
            aria-label="skip this step"
            className={classes.skipThisStepButton}
            fullWidth={true}
            onClick={() => updateLead(true)}
          >
            {!formSkipping && <Typography variant="button" align="center">Skip this step</Typography>}
            {formSkipping && <CircularProgress color="inherit" size="22px"/>}
          </Button>
        </Grid>
      </Grid>
      <Hidden mdDown>
        <Grid item className={classes.geogrid}>
          <CssGeogrid stepNumber={3}/>
        </Grid>
      </Hidden>
      <Hidden lgUp>
        <Grid container item direction="column" className={classes.footer} alignContent="flex-end">
          <GeogridShapeContainer color="#FB7C6A" shape='triangleUpRight' pageIndicator/>
          <GeogridShapeContainer color="#CEE4D1" shape='triangleUpRight' pageIndicator/>
          <GeogridShapeContainer color="#565190" shape='triangleUpRight' fade pageIndicator/>
        </Grid>
      </Hidden>
    </Grid>
  )
}


export default Step3

