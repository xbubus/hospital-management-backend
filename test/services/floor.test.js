const assert = require('assert');
const app = require('../../src/app');

describe('\'floor\' service', () => {
  it('registered the service', () => {
    const service = app.service('floor');

    assert.ok(service, 'Registered the service');
  });
});
