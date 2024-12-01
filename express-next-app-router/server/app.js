const express = require("express");
// const cookieParser = require('cookie-parser');
// const cookieSession = require('cookie-session');
// const path = require('path');
// const { requestLogger, respondLogger } = require('./lib/middleware');
// const cors = require('cors');
// require('express-async-errors');

const app = express();

// const extraEnvs = require('./env');
// process.env = { ...process.env, ...extraEnvs };

// app.use(cors({ origin: true, credentials: true }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" }));
// app.use(cookieParser());
// app.use(cookieSession({ name: 'connect.sid', signed: false }));

// app.use(requestLogger);
// app.use(respondLogger);

app.use(
  "/_next/static",
  express.static(path.resolve(__dirname, "../.next/static"))
);

app.use("/", express.static(path.resolve(__dirname, "../public")));

app.use("/api", require("./router"));

module.exports = app;
