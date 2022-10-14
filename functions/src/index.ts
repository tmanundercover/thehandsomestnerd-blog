import "dotenv/config";
import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import * as admin from "firebase-admin";
import * as logClient from "./logClient";
import * as cmsClient from "./cmsClient";
import * as Promise from "es6-promise";
// To Throttle requests to sanity

Promise.polyfill();

const app = express();
const corsOptionsDelegate = (req: any, callback: any) => {
  logClient.log("CORS", "NOTICE", "checking allowlist", {origin: req.header("Origin")});
  // let corsOptions;
  // if (allowlist.indexOf(req.header("Origin")) !== -1) {
  //   logClient.log("CORS", LogLevels.NOTICE, "origin in allowlist", {origin: req.header("Origin"), allowlist});
  //   corsOptions = {origin: allowlist}; // reflect (enable) the requested origin in the CORS response
  // } else {
  //   logClient.log("CORS", LogLevels.NOTICE, "origin NOT in allowlist", {origin: req.header("Origin"), allowlist});
  //   corsOptions = {origin: false}; // disable CORS for this request
  // }
  const corsOptions = {origin: true};

  callback(null, corsOptions); // callback expects two parameters: error and options
};
app.use(cors(corsOptionsDelegate));
// app.use(cors());

admin.initializeApp({
  // credential: admin.credential.cert(serviceAccount),
});

// Custom logger to keep log messages together in one json
const Logger = function(req: any, res: any, next: any) {
  logClient.createLogger(req, res, next);
  next();
};

app.use(Logger);

app.post("/collect-email-address",
    async (req: any, functionRes: any) => {
      const reqBody: { email: string } = JSON.parse(req.body);
      const {dataset} = req.headers;

      logClient.log(`collect-email-address-${dataset}`, "NOTICE",
          "Request to collect an email address", reqBody.email);

      try {
        const response = await cmsClient.createColdLead(reqBody.email);
        functionRes.send({status: "200", response, email: reqBody.email});
      } catch (e) {
        logClient.log(`collect-email-address-${dataset}`, "ERROR",
            "Could not create Lead", {email: reqBody.email});
        functionRes.error({status: "400", e});
      }
    });

exports.app = functions.https.onRequest(app);

