var assert = require('assert');
var greet = require('../greet');
var spawn = require('child_process').spawn;

describe('greet', function() {
  it('should return a string with hello + name', function() {
    var g = greet('Whitney');
    assert.deepEqual(g, 'hello Whitney', 'the output string is not as expected');
  })

  it('should print a string from a CL argument', function(done) {
    var g = spawn('node', ['./greet.js', 'Whitney']);
    g.stdout.on('data', function(data) {
      console.log('stout: ' + data);
      assert( /hello Whitney/.test(data.toString() ), 'the output did not contain the expected string');
      done();
    })
  })
})
