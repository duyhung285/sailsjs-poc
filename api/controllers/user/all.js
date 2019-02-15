module.exports = async function all(req, res) {
  let user = await User.find({});
  return res.json(user);
};
