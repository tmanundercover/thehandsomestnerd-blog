import './App.css'
import theme from './common/Theme'
import {Grid} from '@material-ui/core'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import React from 'react'
import {ColdLead, useStyles} from './components/pre-signup/PreSignup'
import TransformHW from "./components/layout/TransformHW";
import { QueryClient, QueryClientProvider } from 'react-query';

enum RoutesEnum {
  LANDING="/SW",
  KING_DERM_AB="/DAndA",
  MY_PORTFOLIO="/realTerrell",
  AFT_MARKETING="/marketing/:pageSlug",
  TRANSFORM_HW="/transformative-healing-and-wellness/:pageSlug",
  BOLDLY_ADDING_LAYERS="/BAL",
}

function App() {
  const classes = useStyles(theme)
  const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>

    <BrowserRouter>
      <Grid container item direction="column" alignItems="center">
        <Grid item>
          <Switch>
            <Route exact path={RoutesEnum.TRANSFORM_HW} component={TransformHW}/>
            <Redirect to={'/transformative-healing-and-wellness/home'}/>
          </Switch>
        </Grid>
      </Grid>
    </BrowserRouter>
      </QueryClientProvider>
  )
}

export default App
