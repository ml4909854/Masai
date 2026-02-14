const express = require("express");
const app = express();
const userRoute = require("./userRoute.js");
const productRoute = require("./productRoute.js");

function logger(req, res, next) {
  console.log("before");
  next();
  console.log("after");
}

app.use(logger);
app.use(express.json());
app.use("/users", userRoute);
app.use("/products", productRoute);



app.get("/" , logger , (req, res) => {
    console.log("its a landing page")
  res.send("It's a landing page!");
});

app.get("/home", (req, res) => {
    console.log("home page")
  res.send("homt");
});
app.get("/health" , (req, res) => {
    console.log("health page")
  res.send("Connected!");
  
});

app.use((req, res) => {
  res.status(404).send("404 page not found !");
});

app.listen(3000, () => {
  console.log("server is running");
});
