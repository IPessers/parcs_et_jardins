const logger = require('./logger');
const assert = require('assert');

assert.describe('the logger', () => {
  assert.it('should not refuse to work when no parameters given', () => {
    assert.throws(() => logger.info());
  });

  assert.it('should instanciate a dumb class', () => {
    assert.doesNotThrow(() => new logger.UneClasse());
  });
});
