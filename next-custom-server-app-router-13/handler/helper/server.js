"use strict";
require("source-map-support/register");
const { parse } = require("url");
const path = require("path");
const express = require("express");
const compression = require("compression");
const serverlessExpress = require("@codegenie/serverless-express");
const NextNodeServer = require("next/dist/server/next-server").default;
const { defaultConfig } = require("next/dist/server/config-shared");
const { inspect } = require("node:util");

const dev = process.env.NODE_ENV !== "production";

const _stringifyHeaders = async (response) => {
  try {
    const headers = response?.headers;
    console.log("response headers ", headers);
    const isHeaderNeedToBeTransformed = headers && Object.keys(headers).length;
    if (!isHeaderNeedToBeTransformed) {
      return response;
    }
    Object.keys(headers).forEach(
      (key) => (headers[key] = headers[key].toString())
    );
    return response;
  } catch (error) {
    console.error("STRINGIFY FUNCTION ERROR", error);
  }
};

const _initNextServer = async () => {
  const nextServer = new NextNodeServer({
    dev,
    dir: path.resolve(__dirname, "../../.next/standalone"),
    conf: {
      ...defaultConfig,
      distDir: "./.next",
    },
  });
  await nextServer.prepare();
  return nextServer;
};

const _initExpressServer = async (router, middlewares = []) => {
  const nextServer = await _initNextServer();
  const nextHandler = nextServer.getRequestHandler();
  const app = express();
  const routes = router(nextHandler, nextServer);

  app.use(compression({ level: 9 }));
  if (middlewares?.length) app.use(middlewares);
  app.use(routes);

  return app;
};

const bootstrap = async (event, context, expressInstance) => {
  try {
    const { router, eventSource, middlewares } = expressInstance;
    if (!event.requestContext) {
      event.requestContext = context;
    }
    console.log("bootstrap function log main");
    console.log(inspect(event));
    const app = await _initExpressServer(router, middlewares);
    const serverlessServer = serverlessExpress({ app, eventSource });
    const response = await serverlessServer(event, context);
    console.log(inspect(response));
    if (response && response.body) {
      console.log(response.body);
    }
    return await _stringifyHeaders(response);
  } catch (e) {
    console.log("bootstrap function log error");
    console.log(e);
  }
};

module.exports = { bootstrap };
