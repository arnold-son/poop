let path = require('path');
let stalls = require('./../controllers/stalls.js');
module.exports = function(app){
  app.get('/stalls', stalls.index);

  app.post('/create', stalls.create);
  app.post('/vacant/:name', stalls.vacant);
  app.post('/occupied/:name', stalls.occupied);

};
