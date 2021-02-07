import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__row">
          <div className="navbar__left">
            <Link to="/">
              <img src="/images/logo.png" alt="logo" />
            </Link>
          </div>

          <ul className="navbar__right">
            {!user ? (
              <Fragment>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </Fragment>
            ) : (
              <Fragment>
                <li>
                  <Link to="">{user?.name}</Link>
                </li>
                <li>
                  <Link to="">Logout</Link>
                </li>
              </Fragment>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
