import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import LandingPage from './LandingPage'

const theme = createMuiTheme({
    palette: {
        primary: {
            // main: '#cd00ea',
            main: 'rgba(218, 0, 144, 1)',
            // main: '#313133',
            // light: '#484848',
            // dark: '#000000',
        },
        secondary: {
            main: 'rgba(83, 0, 232, 1)',
            // light: '#ff7d47',
            // dark: '#ac0800',
        },
    },
})

function App(props) {

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Switch>
                    <Route path="/bryn" render={() => <div>hihi</div>} />
                    <Route component={LandingPage} />
                </Switch>
            </Router>
        </MuiThemeProvider>
    )
}

export default App
