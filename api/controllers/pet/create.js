module.exports = async function create(req, res) {
  Pet.create({type : req.param('type'), name: req.param('name')})
    .then(() => res.ok())
    .catch((error) => res.negotiate(error));
};
