const express = require("express");
const http = require("http");
const router = express.Router();

const cors = require("cors");
require("dotenv").config();

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
function getData(req, res) {
  let data = {
    user: "User 1",
    age: 22,
    city: "CMDX",
  };
  res.json(data);
}

app.get("/", getData);

const server = http.createServer(app);

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 5000;

server.listen(port, host, () => {
  console.log(`App running in port ${port}`);
});
