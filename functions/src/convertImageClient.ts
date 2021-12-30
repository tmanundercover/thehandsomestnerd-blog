import {ConvertAPI, Result} from "convertapi";
import {log} from "./logClient";
import fetch from "node-fetch";
import * as logClient from "./logClient";
import * as functions from "firebase-functions";

let CONVERTAPI_SECRET = "";

if (functions.config()) {
  CONVERTAPI_SECRET = functions.config()?.convertapi?.secret;
}

if (CONVERTAPI_SECRET === "") {
  CONVERTAPI_SECRET = process.env.CONVERTAPI_SECRET ?? "";
}

if (CONVERTAPI_SECRET === "") {
  logClient.log("ENV_CONFIG", "ERROR", "Missing \"CONVERTAPI_SECRET\": Checkout https://www.convertapi.com/ for your credentials", process.env);
}

const convertJpgToPng = (imageUrl: string):Promise<string> =>{
  log("convertJpgToPng", "NOTICE", "ConvertAPI to convert ", imageUrl);
  const convertapiClient = new ConvertAPI(CONVERTAPI_SECRET);
  return convertapiClient.convert("png", {
    File: imageUrl,
    TransparentColor: "255,255,255",
  }, "jpg").then(function(result:Result) {
    log(
        "convertJpgToPng",
        "NOTICE",
        "The result from convertAPI",
        result.response
    );
    return result.files[0].url;
  }).catch((e)=>{
    log("convertJpgToPng", "ERROR", "Caught some error", e);
    return "";
  });
};


const fetchImageFromUrl = (imageUrl:string )=>{
  log("fetchImageFromUrl", "NOTICE", "fetching contents of Url: ", imageUrl);
  return fetch(imageUrl);
};

export {convertJpgToPng, fetchImageFromUrl};
