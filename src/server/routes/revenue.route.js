module.exports = (app) => {
  const controller = require('../controllers/revenue.controller');
  app.get('/revenue/list', controller.findAll);
  app.post('/revenue/add', controller.addEntry);
  app.post('/revenue/delete', controller.remove);
};
