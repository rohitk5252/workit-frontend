const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://workout-app-rohitk5252-api.onrender.com/api',
      changeOrigin: true,
    })
  );
};