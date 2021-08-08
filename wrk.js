var wrk = require('wrk');

var conns = 1;
var results = [];

function benchmark() {
  if (conns === 10) {
    return console.log(results);
  }
  conns++;
  wrk(
    {
      threads: 1,
      connections: conns,
      duration: '10s',
      printLatency: true,
      url: 'http://localhost:5000/users',
    },
    function (err, out) {
      results.push(out);
      benchmark();
    }
  );
}
benchmark();
