const db = require('../data/db');

exports.findAll = (req, res) => {
  try {
    let data = [...db.revenue];
    const { category } = req.query;
    if (category) {
      data = data.filter(
        (item) => item.category === category
      );
    }
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: `Error: ${err}`,
    });
  }
};

exports.addEntry = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }
  if (!req.body.category) {
    res.status(500).send({
      message: 'A category is required.',
    });
  }
  if (!req.body.net) {
    res.status(500).send({
      message: 'A net price is required.',
    });
  }
  try {
    const entry = {
      category: req.body.category,
      net: parseInt(req.body.net),
      overhead: parseInt(req.body.overhead)||0,
      taxes: parseInt(req.body.taxes) ||0,
      get total() {
        return this.net + this.overhead + this.taxes;
      },
    };
    db.addRevenueEntry(entry);
    res.send({
      entry,
    });
  } catch (err) {
    res.status(500).send({
      message: `Error: ${err}`,
    });
  }
};

exports.remove = (req, res) => {
  try {
    const { index } = req.query;
    if (!index) {
      res.status(400).send({
        message: 'An index is required',
      });
    }
    db.removeRevenueEntry(req.index);
    res.send({
      message: `Revenue entry ${index} was deleted successfully!`,
    });
  } catch (err) {
    res.status(500).send({
      message: `Error: ${err}`,
    });
  }
};
