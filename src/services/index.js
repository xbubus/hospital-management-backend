const patient = require('./patient/patient.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(patient);
};
