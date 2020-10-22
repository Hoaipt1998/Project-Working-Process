import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import ProductPage from '../components/ProductPage';
import Login from '../components/Login';
import Register from '../components/Register';
import AddProduct from '../components/products/AddProduct';
import CartPage, { CartProvider } from '../components/Cart';
import Navbar from '../components/NavBar';
import Productdetail from '../components/products/Productdetail';
import Support from '../components/Support';

const AppRoute = () => (
    <>
        <BrowserRouter>
            
            <CartProvider>
                <Navbar />
                <section className="">
                    <Switch>
                        <Route exact={true} path="/cart" component={CartPage} />
                        <Route exact={true} path="/products" component={ProductPage} />
                        <Route exact={true} path="/products/add" component={AddProduct} />
                        <Route exact={true} path="/products/:id" component={Productdetail} />                
                        <Route exact={true} path={["/", "/dashboard"]} component={Dashboard} />
                        <Route exact={true} path="/register" component={Register} />
                        <Route exact={true} path="/login" component={Login} />  
                    </Switch>
                </section>
            </CartProvider>

            <Support />
        </BrowserRouter>
    </>
);

export default AppRoute;
