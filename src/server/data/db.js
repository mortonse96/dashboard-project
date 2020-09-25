
const revenueData = require('./revenue.data');
const productCategories = require('./product-categories.data');

const db = (function () {
  return {
    productCategories,
    revenue: revenueData.items,
  };
})();

module.exports = db;
