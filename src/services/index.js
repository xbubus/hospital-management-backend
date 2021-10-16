const patient = require('./patient/patient.service.js');
const bed = require('./bed/bed.service.js');
const hospital = require('./hospital/hospital.service.js');
const room = require('./room/room.service.js');
const floor = require('./floor/floor.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(patient);
  app.configure(bed);
  app.configure(hospital);
  app.configure(room);
  app.configure(floor);
};
