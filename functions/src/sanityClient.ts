// eslint-disable-next-line @typescript-eslint/no-var-requires
const client = require("@sanity/client");
export const sanityClient = client({
  projectId: "gaz8gy1w",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skKV0J7bD9fbV1LRco1DKBpHoXYkzL46uSeRrmpro1xeMmty7ZxQ6odT8wJZtBCDKuQRFgIr9v28Q1cnNznHKesYfBhrZQp7ygBojASKAXs1FGS1Nma8FjdT655WDb73bNeHO9HjRWB5x8g5WpUaWaUG33rCEMtAjKFMA4wyHp6yj7cLSaID",
  useCdn: false,
});

