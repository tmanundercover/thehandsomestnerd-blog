
// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
// const accountSid = process.env.TWILIO_ACCOUNT_SID
// const authToken = process.env.TWILIO_AUTH_TOKEN
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const client = require("twilio")(accountSid, authToken)
// eslint-disable-next-line @typescript-eslint/no-var-requires
const sgMail = require("@sendgrid/mail");
import * as functions from "firebase-functions";


const sendLeadEmail = async (email: string) => {
  const LOG_COMPONENT = "sendgrid-client-send-lead-resume-email";
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: email,
    from: process.env.SENDGRID_FROM_EMAIL,
    templateId: "d-175ab4190c724cb29e033711641b543b",
  };

  functions.logger.log(LOG_COMPONENT, "NOTICE",
      "sending email...", msg);

  return sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
        return "Email sent";
      })
      .catch((error: any) => {
        console.error(error);
        return error.message;
      });
};

export default {
  sendLeadEmail,
};
