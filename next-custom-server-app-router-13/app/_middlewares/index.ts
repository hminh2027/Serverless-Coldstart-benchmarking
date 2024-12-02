import { createEdgeRouter } from "next-connect";
import { NextRequest } from "next/server";

interface RequestContext {
  params: {
    id: string;
  };
}

const requestLogger = (req, res, next) => {
  console.info(
    "Request: " +
      JSON.stringify({
        path: req.url || req.path,
        method: req.method,
        body: req.body,
      })
  );
  return next();
};

const responseLogger = (req, res, next) => {
  res.end = () => {
    console.info(
      "Response: " +
        JSON.stringify({
          responseStatus: res.statusCode,
          actionedBy: req.userVerified?.displayName,
        })
    );
  };

  return next();
};

const router = createEdgeRouter<NextRequest, RequestContext>();

export const baseRouter = () => {
  return router.use(requestLogger).use(responseLogger);
};
