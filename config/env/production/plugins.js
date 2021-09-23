

module.exports = ({ env }) => {
  console.log(JSON.stringify({upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_ACCESS_SECRET'),
      region: 'us-east-1',
      params: {
        Bucket: 'monument-academy',
      },
      logger: console
    },
  }}, null, 2))
  return ({
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
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_ACCESS_SECRET,
        region: 'us-east-1',
        params: {
          Bucket: 'monument-academy',
        },
        logger: console
      },
    },
  })
};
