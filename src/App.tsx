import './App.css'
import {Grid} from '@material-ui/core'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import React from 'react'
import TransformHW from "./components/layout/TransformHW";
import {QueryClient, QueryClientProvider} from 'react-query';
import TransformHWTheme from "./theme/transform-hw/TransformHWTheme";

enum RoutesEnum {
    LANDING = "/SW",
    KING_DERM_AB = "/DAndA",
    MY_PORTFOLIO = "/realTerrell",
    AFT_MARKETING = "/marketing/:pageSlug",
    TRANSFORM_HW = "/transformative-healing-and-wellness/:pageSlug",
    BOLDLY_ADDING_LAYERS = "/BAL",
}

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>

            <BrowserRouter>
                <Grid container item direction="column" alignItems="center" style={{backgroundColor: TransformHWTheme.palette.background.default}}>
                    <Grid item>
                        <Switch>
                            <Route exact path={"/"} component={() => <Redirect
                                to={'/transformative-healing-and-wellness/coming-soon'}/>}/>
                            <Route exact path={RoutesEnum.TRANSFORM_HW} component={TransformHW}/>
                        </Switch>
                    </Grid>
                </Grid>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App
