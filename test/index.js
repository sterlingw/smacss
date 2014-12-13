var expect = require('expect.js'),
    SMACSS = require('..');

describe('smacss', function() {
  it('should say hello', function(done) {
    expect(SMACSS()).to.equal('Hello, world');
    done();
  });
});
