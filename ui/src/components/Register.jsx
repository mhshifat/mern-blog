import React, { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { registerAUserAction } from "../store/actions/authActions";
import BgImage from "./BgImage";

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { loading, registerErrors } = useSelector((state) => state.auth);

  useEffect(() => {
    if (registerErrors.length > 0) {
      registerErrors.forEach((err) => {
        toast.error(err.msg);
      });
    }
  }, [registerErrors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerAUserAction(state)).then(() => {
      history.push("/dashboard");
    });
  };

  return (
    <Fragment>
      <Helmet>
        <title>MERN Blog | Register</title>
        <meta name="description" content="Create an account" />
      </Helmet>
      <div className="row mt-80">
        <div className="col-8">
          <BgImage />
          <Toaster position="top-right" reverseOrder={false} />
        </div>
        <div className="col-4">
          <div className="account">
            <div className="account__section">
              <form onSubmit={handleSubmit}>
                <div className="group">
                  <h3 className="form-heading">Register</h3>
                </div>
                <div className="group">
                  <input
                    type="text"
                    name="name"
                    className="group__control"
                    placeholder="Enter Name"
                    value={state.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="group">
                  <input
                    type="email"
                    name="email"
                    className="group__control"
                    placeholder="Enter Email"
                    value={state.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="group">
                  <input
                    type="password"
                    name="password"
                    className="group__control"
                    placeholder="Enter Password"
                    value={state.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="group">
                  <input
                    type="submit"
                    className="btn btn-default btn-block"
                    value={loading ? "..." : "Register"}
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

export default Register;
