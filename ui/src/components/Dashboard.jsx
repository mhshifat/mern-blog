import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  return (
    <Fragment>
      <Helmet>
        <title>MERN Blog | Dashboard</title>
        <meta name="description" content="MERN blog dashboard" />
      </Helmet>
      <div>
        <p>Dashboard</p>
      </div>
    </Fragment>
  );
};

export default Dashboard;
