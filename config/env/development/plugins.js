module.exports = ({ env }) => ({
  email: {
    provider: "nodemailer",
    providerOptions: {
      host: "localhost",
      port: 1025,
      ignoreTLS: true,
    },
  },
  upload: {
    enabled: true,
    providerOptions: {
      localServer: {
        maxage: 3000000,
      },
    },
  },
});
