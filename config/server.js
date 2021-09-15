module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    url: '/dashboard',
    auth: {
      secret: env("ADMIN_JWT_SECRET", "f964c23f3fe08c02b654f4ca8588fd5e"),
    },
  },
});
