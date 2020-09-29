
const revenueData = require('./revenue.data');
const productCategories = require('./product-categories.data');

const db = (function () {
  const addRevenueEntry = (entry) => {
    revenueData.items.push(entry);
  };
  const removeRevenueEntry = (index) => {
    revenueData.items.splice(index, 1);
  };
  return {
    addRevenueEntry,
    productCategories,
    removeRevenueEntry,
    revenue: revenueData.items,
  };
})();

module.exports = db;
