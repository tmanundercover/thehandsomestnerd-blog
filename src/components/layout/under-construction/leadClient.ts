import clientUtils from "./clientUtils";

const BASE_URI = process.env.REACT_APP_API_URL

const createLead = (email:string) => {
    return fetch(BASE_URI+"/collect-email-address" ??"",
        {
            method: 'POST',
            body: JSON.stringify({email}),
        },
    )
        .then((response: any) => {
            return clientUtils.processResponse(response, 'ColdLead');
        })
        .catch((e: any) => {
            // console.error(LOG, 'ERROR', 'error', e);
            // eslint-disable-next-line prefer-promise-reject-errors
            return Promise.reject({ attempt: Error(e) });
        });
};
export default {createLead}