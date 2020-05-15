import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/account/login';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/home" exact={true} component={Home} />
            <Route path="/sign-in" exact={true} component={Login} />
        </Switch>
    </BrowserRouter>
);

export default Routes;