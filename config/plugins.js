module.exports = ({ env }) => ({
  email: {
    provider: "nodemailer",
    providerOptions: {
      service: "gmail",
      port: 587,
      auth: {
        user: "monumentacademycontact@gmail.com",
        pass: "Monument4cademy",
      },
      // ... any custom nodemailer options
    },
    settings: {
      defaultFrom: "monumentacademycontact@gmail.com",
      defaultReplyTo: "info@monumentacademydc.org",
    },
  },
});
