// Initializes the `floor` service on path `/floor`
const { Floor } = require('./floor.class');
const createModel = require('../../models/floor.model');
const hooks = require('./floor.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/floor', new Floor(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('floor');

  service.hooks(hooks);
};
