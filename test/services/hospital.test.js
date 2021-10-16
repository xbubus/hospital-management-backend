const assert = require('assert');
const app = require('../../src/app');

describe('\'hospital\' service', () => {
  it('registered the service', () => {
    const service = app.service('hospital');

    assert.ok(service, 'Registered the service');
  });
});
