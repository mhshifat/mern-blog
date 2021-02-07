import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <title>MERN Blog | Home</title>
        <meta
          name="description"
          content="Blog website created by Mehedi Hassan Shifat"
        />
      </Helmet>
      <p>Home</p>
    </Fragment>
  );
};

export default Home;
