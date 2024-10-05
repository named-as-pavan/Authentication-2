import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";



dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN
const ENDPOINT = process.env.MAILTRAP_ENDPOINT


export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
  endpoint:ENDPOINT
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "pavan",
};
// const recipients = [
//   {
//     email: "pavan111222111@gmail.com",
//   }
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);