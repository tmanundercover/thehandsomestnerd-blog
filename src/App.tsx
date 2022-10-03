import './App.css'
import theme from './common/Theme'
import {Grid} from '@material-ui/core'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import React from 'react'
import {ColdLead, useStyles} from './components/pre-signup/PreSignup'
import TransformHW from "./components/layout/TransformHW";

enum RoutesEnum {
  LANDING="/SW",
  KING_DERM_AB="/DAndA",
  MY_PORTFOLIO="/realTerrell",
  AFT_MARKETING="/marketing/:pageSlug",
  TRANSFORM_HW="/transformHW/:pageSlug",
  BOLDLY_ADDING_LAYERS="/BAL",
}

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
            <Route exact path={RoutesEnum.TRANSFORM_HW} component={TransformHW}/>
            <Redirect to={'/transformHW/home'}/>
          </Switch>
        </Grid>
      </Grid>
    </BrowserRouter>
  )
}

export default App
