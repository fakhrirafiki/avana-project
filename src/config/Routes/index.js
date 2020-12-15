import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MainApp } from '../../pages'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <h2>Login Page</h2>
                </Route>
                <Route path="/">
                    <MainApp />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes