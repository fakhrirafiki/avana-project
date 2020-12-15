import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../Home'
import { SidebarContainer } from '../../containers/sidebar';
import { MainAppWrapper, ContentWrapper } from './styles/MainApp'

const MainApp = () => {
    return (
        <MainAppWrapper className="main-app-wrapper">
            <SidebarContainer />
            <ContentWrapper className="content-wrapper">
                <Router>
                    <Switch>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </ContentWrapper>
        </MainAppWrapper>
    )
}

export default MainApp
