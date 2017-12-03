const logger = require('./logger')
const assert = require('assert')

describe('the logger', () => {
    it('should not refuse to work when no parameters given', () => {
        assert.throws(() => logger.info())
    })

    it('should instanciate a dumb class', () => {
        assert.doesNotThrow(() => new logger.UneClasse())
    })

})