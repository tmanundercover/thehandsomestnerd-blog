import {log} from "./logClient";
import {sanityClient} from "./sanityClient";
import groqQueries from "./groqQueries";

const createColdLead = async (coldLead:any) => {
  log("createSanityColdLead", "DEBUG", "creating cold lead ", coldLead.email);

  const newColdLead = {
    ...coldLead,
  };

  log("createSanityColdLead", "DEBUG", "potential cold lead ", newColdLead);

  return sanityClient.create({
    _type: "coldLead",
    ...newColdLead,
  }).catch((e:any)=>{
    log("createSanityColdLead", "ERROR", "creating cold lead ", {newColdLead, e});
    return Promise.reject(e.message);
  });
};

const fetchPage = async (pageSlug:string)=>{
  return sanityClient
      .fetch(
          `*[slug.current == $pageSlug]{
          ${groqQueries.HOMEPAGE}
       }`, {pageSlug})
      .then((data: any[]) => {
        log("fetchPage", "NOTICE", "fetched page", {pageSlug, page: data[0]});
        return data[0];
      })
      .catch((e:Error)=>{
        console.error({pageSlug, message: e.message});
        Promise.reject(e.message);
      });
};


export {createColdLead, fetchPage};
