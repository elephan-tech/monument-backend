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
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_ACCESS_SECRET'),
      region: env('AWS_REGION'),
      params: {
        Bucket: env('AWS_BUCKET'),
      },
      logger: console
    },
  },
});
