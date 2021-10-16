// Initializes the `bed` service on path `/bed`
const { Bed } = require('./bed.class');
const createModel = require('../../models/bed.model');
const hooks = require('./bed.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/bed', new Bed(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('bed');

  service.hooks(hooks);
};
