import {SanityImage} from "./cmsClient";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const getCSV = require("get-csv");
import * as logClient from "./logClient";

export type CSVItemColor = {
  _type?: string
  slug?: string
  _id?: string
  title?: string
  hexColor?: string
  swatchSrc?: string
  imageSrc?: SanityImage
  isAutoGenerated?: boolean
}

export type CSVItemType = {
  slug?:string
  _type?:string
  title?:string
  description?: string
  basePrice?:number
  shortName?:string
  isAutoGenerated?:boolean
  weight?: number
  weightUnits?:number
  triggerSquare?: boolean
}

export type CSVSize = {
  _type?: string
  slug?:string
  longVersion?: string
  shortVersion?: string
  description?: string
  isAutoGenerated?: boolean
}

const loadCSV = (url?: string) =>{
  try {
    return url ? getCSV(url)
        .then((rows:any) => {
          logClient.log("loadCSV", "NOTICE", "rows retrieved from file", rows);
          return rows;
        }):"";
  } catch (e) {
    logClient.log("loadCSV", "ERROR", "rows NOT retrieved from file", e);
  }
};

export default {loadCSV};
