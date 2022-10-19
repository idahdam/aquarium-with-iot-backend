module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'mF/}<a5Q6)?j,2./g7!f=,"He?E>#.'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'dvUZr1axGm0DPuHOtfw/lA=='),
  },
});
