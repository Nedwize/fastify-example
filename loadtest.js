const loadtest = require('loadtest');
const optionsForFastify = {
  url: 'http://localhost:5000/users/4',
  maxSeconds: 20,
  concurrency: 10,
  agentKeepAlive: true,
};
const optionsForExpress = {
  url: 'http://localhost:8000/users/4',
  maxSeconds: 20,
  concurrency: 30,
  agentKeepAlive: true,
};

function testExpress() {
  return new Promise((resolve) => {
    loadtest.loadTest(optionsForExpress, function (error, result) {
      if (error) {
        return console.error('Got an error: %s', error);
      }
      resolve(result);
    });
  });
}

function testFastify() {
  return new Promise((resolve) => {
    loadtest.loadTest(optionsForFastify, function (error, result) {
      if (error) {
        return console.error('Got an error: %s', error);
      }
      resolve(result);
    });
  });
}

const runTest = async () => {
  let resultsExpress = await testExpress();
  let resultsFastify = await testFastify();
  //   console.log({ Express: resultsExpress });
  //   console.log({ Fastify: resultsFastify });
  resultsFastify.name = 'Fastify';
  resultsExpress.name = 'Express';
  console.table(
    [resultsExpress, resultsFastify],
    ['name', 'rps', 'totalRequests', 'meanLatencyMs', 'totalErrors']
  );
};

runTest();
