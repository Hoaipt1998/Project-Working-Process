import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import ProductPage from '../components/ProductPage';
import Login from '../components/Login';
import Register from '../components/Register';
import Navbar from '../components/NavBar';
import AddProduct from '../components/products/AddProduct';

const AppRoute = () => (
    <>
        <BrowserRouter>
            <Route exact={true} path="/register" component={Register} />
            <Nvabar />
            <section className="">
                <Switch>
                    <Route exact={true} path="/products" component={ProductPage} />
                    <Route exact={true} path="/products/add" component={AddProduct} />
                    <Route exact={true} path={["/", "/dashboard"]} component={Dashboard} />
                    <Route exact={true} path="/login" component={Login} />
                </Switch>
            </section>
        </BrowserRouter>
    </>
);

export default AppRoute;
