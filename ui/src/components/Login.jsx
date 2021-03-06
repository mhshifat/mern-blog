import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import BgImage from "./BgImage";

const Login = () => {
  return (
    <Fragment>
      <Helmet>
        <title>MERN Blog | Login</title>
        <meta name="description" content="Enter credentials to access" />
      </Helmet>
      <div className="row mt-80">
        <div className="col-8">
          <BgImage />
        </div>
        <div className="col-4">
          <div className="account">
            <div className="account__section">
              <form>
                <div className="group">
                  <h3 className="form-heading">Login</h3>
                </div>
                <div className="group">
                  <input
                    type="email"
                    name="email"
                    className="group__control"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="group">
                  <input
                    type="password"
                    name="password"
                    className="group__control"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="group">
                  <input
                    type="submit"
                    className="btn btn-default btn-block"
                    value="Login"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
