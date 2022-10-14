import {log} from "./logClient";
import {sanityClient} from "./sanityClient";
import {SanityColdLead} from "../../src/common/sanityIo/Types";

const createColdLead = async (email: string) => {
  log("createSanityColdLead", "NOTICE", "creating cold lead ", email);

  const newColdLead: SanityColdLead = {
    email: email,
    source: "Coming Soon Page",
  };

  log("createSanityColdLead", "NOTICE", "potential cold lead ", newColdLead);

  return sanityClient.create({
    _type: "coldLead",
    ...newColdLead,
  }).catch((e:any)=>{
    log("createSanityColdLead", "ERROR", "creating cold lead ", {newColdLead, e});
  });
};


export {createColdLead};
