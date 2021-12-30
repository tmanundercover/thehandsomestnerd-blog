import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import * as admin from "firebase-admin";
import * as logClient from "./logClient";
import * as cmsClient from "./cmsClient";
import {SanityCsvToProcess, SanityDesignToProcess} from "./cmsClient";
import * as convertImageClient from "./convertImageClient";
import * as Promise from "es6-promise";
import csvClient, {CSVItemColor, CSVItemType, CSVSize} from "./csvClient";
import Queue from "queue-promise";
// To Throttle requests to sanity
const queue = new Queue({
  concurrent: 1,
  interval: 1000 /25,
});
Promise.polyfill();

const app = express();


export type JamWorksOrder ={
  tshirt?: number
  sweatshirt?:number
}

app.use(cors());

admin.initializeApp({
  // credential: admin.credential.cert(serviceAccount),
});

// Custom logger to keep log messages together in one json
const Logger = function(req:any, res:any, next:any) {
  logClient.createLogger(req, res, next);
  next();
};

app.use(Logger);

app.post("/process-csv-into-sanity-documents",
    async (req: any, functionRes: any) => {
      const csvReadReq: SanityCsvToProcess = req.body;
      const {dataset} = req.headers;

      logClient.log(`process-csv-into-sanity-documents-${dataset}`, "NOTICE",
          "Request to process a csv", csvReadReq);

      // get type of object
      const sanityObjectType: string= csvReadReq.objectType ?? "";
      logClient.log(`process-csv-into-sanity-documents-${dataset}`, "NOTICE",
          "Get requests for type ", sanityObjectType);

      // read csv into obj
      const csV = await csvClient.loadCSV(csvReadReq.csvFile?.asset?.url);

      logClient.log(`process-csv-into-sanity-documents-${dataset}`, "NOTICE",
          "csv form file ", csV);
      let newObjects:CSVSize[] | CSVItemType[]| CSVItemColor[] = [];

      queue.on("resolve", (createdDocument) => {
        logClient.log(`process-csv-into-sanity-documents-${dataset}`, "NOTICE",
            "Created a document ", createdDocument);
        // update request

        // update request with created ids
        logClient.log(`process-csv-into-sanity-documents-${dataset}`, "NOTICE",
            `Created ${newObjects.length} new ${sanityObjectType}s`, newObjects);

        // once all resolved somehow
        if (queue.isEmpty) {
          logClient.log(`process-csv-into-sanity-documents-${dataset}`, "NOTICE",
              "Finished processing CSV found", newObjects);

          functionRes.send({status: "200", newDocuments: newObjects});
        }
      });

      queue.on("reject", (error) => {
        logClient.log(`process-csv-into-sanity-documents-${dataset}`, "ERROR",
            "Could not create object", error);
      });

      newObjects = csV.map((sanityObj:CSVItemType | CSVItemColor | CSVSize)=>{
        queue.enqueue(()=> cmsClient.createSanityDocument(sanityObj, sanityObjectType));
      });
    });

app.post("/process-jpg-to-transparent-png",
    async (req: any, functionRes: any) => {
      const screenshotReq: SanityDesignToProcess = req.body;
      const {dataset} = req.headers;

      const LOG_COMPONENT = `process-jpg-to-transparent-png-${dataset}`;

      logClient.log(LOG_COMPONENT, "NOTICE",
          "Request to process a cricut screenshot", screenshotReq);

      let pngUrl;
      if (screenshotReq.imageSrc?.asset?.url) {
        pngUrl = await convertImageClient
            .convertJpgToPng(screenshotReq.imageSrc?.asset?.url ?? "");
      } else {
        logClient.log(LOG_COMPONENT, "ERROR",
            "Sanity Image does not have a URL", screenshotReq);
      }

      if (pngUrl) {
        const sanityImageAsset = await cmsClient.uploadImageFromURL(pngUrl, screenshotReq.title ?? screenshotReq._id ?? "noFilename");
        logClient.log(LOG_COMPONENT, "NOTICE",
            "Image uploaded to Sanity", sanityImageAsset);

        if (sanityImageAsset) {
          const creationResult = await cmsClient.createSanityDesign(screenshotReq, sanityImageAsset);
          const recordSuccess = await cmsClient.updateDesignToProcess(screenshotReq, creationResult);
          logClient.log(LOG_COMPONENT, "NOTICE",
              "Sanity Design Creation complete", creationResult);

          functionRes.send({createdDesign: creationResult, designCreationRequest: recordSuccess});
        }
        functionRes.send({status: "404", message: "Error in uploading converted file"});
      } else {
        logClient.log(LOG_COMPONENT, "ERROR",
            "Design Creation complete:NO PNG Created ");
        functionRes.send({status: "404", message: "Error in converting original file"});
      }
    });

exports.app = functions.https.onRequest(app);

