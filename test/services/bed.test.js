const assert = require('assert');
const app = require('../../src/app');

describe('\'bed\' service', () => {
  it('registered the service', () => {
    const service = app.service('bed');

    assert.ok(service, 'Registered the service');
  });
});
