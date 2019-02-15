module.exports = async function create(req, res) {
  Payment.create({type : req.param('amount'), name: req.param('name')})
    .then(() => res.ok())
    .catch((error) => res.negotiate(error));
};
