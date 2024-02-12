require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json());

app.use("/signup", require("./routes/auth/signup"));
app.use("/login", require("./routes/auth/login"));
app.use("/logout", require("./routes/auth/logout"));
app.use("/courses", require("./routes/api/courses"));
app.use("/dashboard", require("./routes/api/dashboard"));
app.use("/refresh", require("./routes/refresh"));
app.use("/enrollment", require("./routes/api/enrollment"));

app.listen(3000);
