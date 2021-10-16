// Initializes the `hospital` service on path `/hospital`
const { Hospital } = require('./hospital.class');
const createModel = require('../../models/hospital.model');
const hooks = require('./hospital.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/hospital', new Hospital(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('hospital');

  service.hooks(hooks);
};
