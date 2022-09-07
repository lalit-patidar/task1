const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const routes = require("./routes/users");
require("../config/db/setup");

const {PORT} = "../config/envs/dev.env";

const app = express();
const port = PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(routes);

app.listen(port, () => console.log("server is running at http://127.0.0.1:"+port))
