require("dotenv").config();
const express = require("express");
const connect = require("./config/db");
const routes = require("./routes/userRoutes");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", routes);

connect().then(() => {
  app.listen(port, () => {
    console.log(`The server is running on port:${port}`);
  });
});
