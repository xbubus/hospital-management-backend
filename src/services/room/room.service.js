// Initializes the `room` service on path `/room`
const { Room } = require('./room.class');
const createModel = require('../../models/room.model');
const hooks = require('./room.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/room', new Room(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('room');

  service.hooks(hooks);
};
