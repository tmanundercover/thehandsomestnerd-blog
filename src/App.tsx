import './App.css';
import AppLayout from "./components/layout/AppLayout";
import theme from "./common/Theme";
import {MuiThemeProvider} from "@material-ui/core";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <AppLayout/>
    </MuiThemeProvider>
  );
}

export default App;
