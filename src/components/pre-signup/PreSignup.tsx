import {CssBaseline, Grid, Link, MuiThemeProvider, Typography} from '@material-ui/core'
import React, {FunctionComponent, ReactElement} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import theme from '../../common/Theme'
import {Redirect, Route, Switch} from 'react-router-dom'
import logo from '../../common/assets/ab-logo.png'
import Step1 from './step-1/Step1'
import Step2 from './step-2/Step2'
import Step3 from './step-3/Step3'
import NextSteps from './next-steps/NextSteps'
import abTheme from '../abReplica/common/Theme'

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'fixed',
    color: theme.palette.primary.main,
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    overflowY: 'auto',
  },
  sidebar: {
    backgroundColor: '#FCF0E9',
    width: '24px',
    [theme.breakpoints.down('xs')]: {
      width: '8px',
    },
  },
  contentContainer: {
    backgroundColor: theme.palette.background.paper,
    width: 'calc(100vw - 24px)',
    [theme.breakpoints.down('xs')]: {
      width: 'calc(100vw - 8px)',
    },
  },
  stepContainer: {
    overflow: 'hidden',
  },
  appBar: {
    backgroundColor: theme.palette.background.paper,
  },
  abLogo: {
    height: '32px',
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(4),
  },
  content: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(4),
    [theme.breakpoints.only('xs')]: {
      marginTop: '48px',
    },
    [theme.breakpoints.only('sm')]: {
      marginTop: '104px',
    },
    [theme.breakpoints.only('md')]: {
      marginTop: '104px',
    },
    [theme.breakpoints.only('lg')]: {
      marginTop: '128px',
    },
  },
  logo:{
    padding: theme.spacing(4,0,0,3)
  }
}))

export type ColdLead = {
  email: string
  brandName: string
  website: string
  desiredLoanAmount: string
  revenue: string
  accountsReceivable: string
  inventory: string
}

export type StepProps = {
  lead: ColdLead,
  setLead: any
}

const PreSignup: FunctionComponent = () => {
  const classes = useStyles(theme)

  const [coldLead, setColdLead] = React.useState<ColdLead>({
    email: '',
    brandName: '',
    website: '',
    desiredLoanAmount: '',
    revenue: '',
    accountsReceivable: '',
    inventory: '',
  })

  React.useEffect(()=>{
    document.title = 'Assembled Brands | Apply'
  },[])

  return (
    <MuiThemeProvider theme={abTheme}>
      {/*<CssBaseline/>*/}
      <Grid container spacing={0} alignItems="stretch" className={classes.root}>
        <Grid item className={classes.sidebar}/>
        <Grid container item direction="column" className={classes.contentContainer}>
          <Grid item className={classes.logo}>
            <Typography variant="h1">Logo</Typography>
          </Grid>

          <Grid container item direction="column" alignItems="center" className={classes.content}>
            <Grid item className={classes.stepContainer}>
              <Switch>
                <Route exact path="/apply" render={(): ReactElement => <Redirect to="/apply/step-1"/>}/>
                <Route path="/apply/step-1" render={() => <Step1 lead={coldLead} setLead={setColdLead}/>}/>
                <Route path="/apply/step-2" render={() => <Step2 lead={coldLead} setLead={setColdLead}/>}/>
                <Route path="/apply/step-3" render={() => <Step3 lead={coldLead} setLead={setColdLead}/>}/>
                <Route path="/apply/next-steps" render={() => <NextSteps lead={coldLead} setLead={setColdLead}/>}/>
                <Redirect to="/apply/step-1"/>
              </Switch>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </MuiThemeProvider>
  )
}

export default PreSignup