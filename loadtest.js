const loadtest = require('loadtest');

const options = {
  maxSeconds: 30, // The test will be carried out for this duration of seconds
  concurrency: 100, // Number of connections
  agentKeepAlive: true,
};

function testExpress(options) {
  options.url = 'http://localhost:8000/users';
  return new Promise((resolve) => {
    loadtest.loadTest(options, function (error, result) {
      if (error) {
        return console.error('Got an error: %s', error);
      }
      resolve(result);
    });
  });
}

function testFastify(options) {
  options.url = 'http://localhost:5000/users';
  return new Promise((resolve) => {
    loadtest.loadTest(options, function (error, result) {
      if (error) {
        return console.error('Got an error: %s', error);
      }
      resolve(result);
    });
  });
}

const runTest = async () => {
  let resultsExpress = await testExpress(options);
  let resultsFastify = await testFastify(options);
  resultsFastify.name = 'Fastify';
  resultsExpress.name = 'Express';
  console.log(`Testing with ${options.concurrency} connections`);

  console.table(
    [resultsExpress, resultsFastify],
    ['name', 'rps', 'totalRequests', 'meanLatencyMs', 'totalErrors']
  );
};

runTest();
