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
