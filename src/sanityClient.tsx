import sanityClient from "@sanity/client";

console.log("NODE.ENV", process.env)
export default sanityClient({
    projectId: "u5x1k2us", // find this at manage.sanity.io or in your sanity.json
    dataset: "development", // this is from those question during 'sanity init'
    apiVersion: '2021-03-25',
    useCdn: true,
});