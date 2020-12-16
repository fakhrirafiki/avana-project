import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../Home'
import Modules from '../Modules'
import { SidebarContainer } from '../../containers/sidebar';
import { MainAppWrapper, ContentWrapper } from './styles/MainApp'

const MainApp = () => {
    return (
        <MainAppWrapper>
            <SidebarContainer />
            <ContentWrapper>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/all-module">
                            <Modules />
                        </Route>
                        <Route path="/2">
                            <h1>22222</h1>
                        </Route>
                    </Switch>
                </Router>
            </ContentWrapper>
        </MainAppWrapper>
    )
}

export default MainApp

