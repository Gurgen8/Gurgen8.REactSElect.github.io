
const corsProxy = require('cors-anywhere');

corsProxy.createServer({
  originWhitelist: ['http://localhost:3000'], // Allow all origins
}).listen(5000, 'localhost', function() {
  console.log('Running CORS Anywhere ... ');
});
