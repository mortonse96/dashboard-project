const categories = require('./product-categories.data');
const { getRandomInt } = require('../utils/math-utils');

const revenueData = (function () {
  const items = [];
  const itemCount = 1;
  const categoryPriceRanges = {
    'Accessories': {
      high: 50,
      low: 15,
    },
    'Ink': {
      high: 65,
      low: 25,
    },
    'Miscellaneous': {
      high: 400,
      low: 10,
    },
    'Printers': {
      high: 900,
      low: 350,
    },
    'Services': {
      high: 750,
      low: 300,
    },
  };
  for (let index = 0; index < categories.length; index++) {
    const category = categories[index];
    const { low, high } = categoryPriceRanges[category];
    for (let i = 0; i < itemCount; i++) {
      const net = getRandomInt(low, high);
      const overhead = Math.ceil(net * .07);
      const taxes = Math.ceil(net * .15);
      const total = net + overhead + taxes;
      const newItem = {
        category,
        net,
        overhead,
        taxes,
        total,
      };
      items.push(newItem);
    }
  }
  return {
    items,
  };
})();

module.exports = revenueData;
