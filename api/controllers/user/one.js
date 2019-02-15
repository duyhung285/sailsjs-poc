module.exports = async function one(req, res) {
  let user = await User.findOne({
    id: req.param('id')
  });

  return res.json(user);
};
