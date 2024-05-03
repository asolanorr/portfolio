import { Resend } from "resend";

const config = useRuntimeConfig();
const resend = new Resend(config.resendApiKey);

export default defineEventHandler(async (event) => {
  const dateString = new Date().toISOString().slice(0, 10);

  try {
    const body = await readBody(event);

    const data = await resend.emails.send({
      from: 'Contact <contact@yournextconcept.com>',
      to: ['asolanor@yournextconcept.com'],
      subject: "Contact request from your website",
      html: `<p>Client message:<br><br>Name: <strong>${body.fullName}</strong><br>Company: <strong>${body.company}</strong><br>Email: <strong>${body.email}</strong><br>Phone Number: <strong>${body.phone}</strong><br>Message:&nbsp;<strong>${body.message}</strong><br><br>Date: <strong>${new Date(dateString)}</strong></p>`,
    });

    return data;
  } catch (error) {
    sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: error,
      })
    );
  }
});
