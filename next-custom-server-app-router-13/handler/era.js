"use strict";
const { Router } = require("express");
const express = require("express");
const path = require("path");
const Server = require("./helper/server");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const CACHE_CONFIG = {
  maxAge: "1d",
};

const router = (nextHandler, nextServer) => {
  const routes = Router();

  routes.use(
    "/_next/static",
    express.static(path.resolve(__dirname, "../.next/static"), CACHE_CONFIG)
  );
  routes.use(
    "/",
    express.static(path.resolve(__dirname, "../public"), CACHE_CONFIG)
  );
  routes.all("*api/*", (req, res) =>
    nextHandler(req, res, Server.parseReqUrl(req))
  );
  routes.get("*", (req, res) =>
    nextServer.render(req, res, req.baseUrl + req.path, req.query)
  );

  return routes;
};

exports.handler = async (event, context) => {
  return await Server.bootstrap(event, context, {
    router,
    middlewares: [express.json()],
  });
};
