module.exports = ({ env }) => ({
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
  upload: {
    enabled: true,
  },
});
