const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/ECOM");

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established succesfully!");
});

// USER ROUTES:
const user_routes = require("./routes/userRoute");
app.use("/api", user_routes);

// STORE ROUTES:
const store_routes = require("./routes/storeRoute");
app.use("/api", store_routes);

// CATEGORY ROUTES:
const category_routes = require("./routes/categoryRoute");
app.use("/api", category_routes);

app.listen(3000, function () {
  console.log("sever is ready");
});
