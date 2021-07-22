import './App.css'
import TerrellsPortfolio from './components/layout/TerrellsPortfolio'
import theme from './common/Theme'
import {Grid} from '@material-ui/core'
import KingDermDemo from './components/layout/KingDermDemo'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import React, {ReactElement} from 'react'
import Step1 from './components/pre-signup/step-1/Step1'
import Step2 from './components/pre-signup/step-2/Step2'
import Step3 from './components/pre-signup/step-3/Step3'
import NextSteps from './components/pre-signup/next-steps/NextSteps'
import {ColdLead, useStyles} from './components/pre-signup/PreSignup'
import MainLayout from './components/abReplica/MainLayout'
import TerrellsRealPortfolio from './components/layout/TerrellsRealPortfolio'

function App() {

  const classes = useStyles(theme)

  const [coldLead, setColdLead] = React.useState<ColdLead>({
    email: '',
    brandName: '',
    website: '',
    desiredLoanAmount: '',
    revenue: '',
    accountsReceivable: '',
    inventory: ''
  })

  return (

    <BrowserRouter>
      <Grid container item direction="column" alignItems="center">
        <Grid item style={{overflow: 'hidden'}}>
          <Switch>
            <Route exact path="/terrell" component={TerrellsPortfolio}/>
            <Route exact path="/kool-stuff" component={KingDermDemo}/>
            <Route exact path="/dermKing" component={MainLayout}/>
            <Route exact path="/realTerrell" component={TerrellsRealPortfolio}/>
            <Route exact path="/abReplica" component={() => {
              window.location.href = 'http://assembledbrands.com';
              return null;
            }}/>
            <Route exact path="/apply" render={(): ReactElement => <Redirect to="/apply/step-1"/>}/>
            <Route exact path="/apply/step-1" render={() => <Step1 lead={coldLead} setLead={setColdLead}/>}/>
            <Route exact path="/apply/step-2" render={() => <Step2 lead={coldLead} setLead={setColdLead}/>}/>
            <Route exact path="/apply/step-3" render={() => <Step3 lead={coldLead} setLead={setColdLead}/>}/>
            <Route exact path="/apply/next-steps"
                   render={() => <NextSteps lead={coldLead} setLead={setColdLead}/>}/>
            <Redirect to="/terrell"/>
          </Switch>
        </Grid>
      </Grid>
    </BrowserRouter>
  )
}

export default App
