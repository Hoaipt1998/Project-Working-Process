import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from '../components/Cart';

const Navbar = () => {

  const { cartItems } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" href="/">
          ISCSHOP
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/dashboard">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/product">
                Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/products">
                EditProduct
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/cart">
                Cart ({cartItems.length})
              </NavLink>
            </li>
          </ul>
        </div>

        <Link className="btn btn-outline-light" to="/register">Add User</Link>
      </div>
    </nav>
  );
};

export default Navbar;