var greet = function(name) {
  return ('hello ' + name);
}

module.exports = greet;

if (process.argv[2]) {
  console.log(greet(process.argv[2]));
}
