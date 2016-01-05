var assert = require('assert');
var greet = require('../greet');
var spawn = require('child_process').spawn;

describe('greet', function() {
  it('should return a string with hello + name', function() {
    var g = greet('Red');
    assert.equal(g, 'hello Red', 'the output string is not as expected');
  })

  it('should print a string from a CL command', function(done) {
    var command = spawn('node', ['./greet.js', 'Blue']);
    command.stdout.on('data', function(data) {
      assert.equal( data.toString().trim(), 'hello Blue', 'the output did not contain the expected string');
      done();
    });
  })
})
