module.exports = ({ env }) =>
  console.log({ env: env.json() }) || {
    email: {
      provider: "nodemailer",
      providerOptions: {
        service: "gmail",
        port: 587,
        auth: {
          user: "contact.monumentacademydc@gmail.com",
          pass: "monument_contact",
        },
      },
      settings: {
        defaultFrom: "contact.monumentacademydc@gmail.com",
        defaultReplyTo: "info@monumentacademydc.org",
      },
    },
  };
