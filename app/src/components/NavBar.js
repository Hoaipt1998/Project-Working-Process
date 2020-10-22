import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from '../components/Cart';
import { getUser, removeUser } from '../utils/cookie';

const Navbar = () => {

  const { cartItems } = useContext(CartContext);

  const [user, setUser] = useState({});

  useEffect(() => {
    const userCookie = getUser();
    if (userCookie) {
      setUser(userCookie);
    }
  }, []);


  const handleRemoveUser = () => {
      removeUser();
      setUser(null);
  }

  const authenticated = (user) => {
    return user.role !== 0 ? (
      <>
        <div className="text-right">
          <Link className="btn btn-outline-light" to="/products/add">Add Product</Link>
        </div>
        <div className="text-right">
          <button className="btn btn-outline-light"
            onClick={() => handleRemoveUser()}>Log Out</button>
        </div>
      </>

    ) : (
        <div className="text-right">
          {user && <label className="mr-3">Hello, {user.name}</label>}
        </div>
      )
  }

  const guest = (
    <>
      <Link className="btn btn-success mr-3" to="/login"
      >Login</Link>

      <Link className="btn btn-info" to="/register"
      >Sign up</Link>
    </>
  )

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
        {
          user ? authenticated(user) : guest
        }


      </div>
    </nav>
  );
};

export default Navbar;
