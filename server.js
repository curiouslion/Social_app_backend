const express = require("express");
const mongoose = require("mongoose");
const app = express();
const users = require("./routes/api/users");
const auth = require("./routes/api/auth");

// app.use(express.json());
app.use(express.json({ extended: false }));

mongoose
  .connect("mongodb://localhost/devJoin", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB..."));

app.use("/api/users", users);
app.use("/api/auth", auth);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
