module.exports = (app) => {
  const controller = require('../controllers/revenue.controller');
  app.get('/revenue/list', controller.findAll);
};
