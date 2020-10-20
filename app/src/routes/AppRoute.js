import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import ProductPage from '../components/ProductPage';
import Login from '../components/Login';
import Register from '../components/Register';

const Home = () => <div>Home</div>

const AppRoute = () => (
    <BrowserRouter>
        <section className="">
            <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route exact={true} path="/products" component={ProductPage} />
                <Route exact={true} path="/dashboard" component={Dashboard} />
                <Route exact={true} path="/login" component={Login} />
                <Route exact={true} path="/register" component={Register} />
            </Switch>
        </section>
    </BrowserRouter>
);

export default AppRoute;