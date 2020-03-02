const express = require("express");
const app = express();
const users = require("./routes/api/users");
const auth = require("./routes/api/auth");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
const connectDB = require('./config/db')

// app.use(express.json());
app.use(express.json({ extended: false }));

// connect database
connectDB();

app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
