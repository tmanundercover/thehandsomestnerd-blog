import sanityClient from "@sanity/client";

console.log("NODE.ENV", process.env)
export default sanityClient({
    projectId: "gaz8gy1w", // find this at manage.sanity.io or in your sanity.json
    dataset: process.env.NODE_ENV === "production" ? "production": "development", // this is from those question during 'sanity init'
    apiVersion: '2021-03-25',
    useCdn: true,
});