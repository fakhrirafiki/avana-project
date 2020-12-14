import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MainApp } from '../../pages'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <MainApp />
                </Route>
                <Route path="/login">
                    <h2>Fakhri Rafiki</h2>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes