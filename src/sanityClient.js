import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "gaz8gy1w", // find this at manage.sanity.io or in your sanity.json
    dataset: "production", // this is from those question during 'sanity init'
    apiVersion: '2021-03-25',
    useCdn: true,
});