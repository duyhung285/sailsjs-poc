module.exports = async function all(req, res) {
  let pet = await Pet.find({});
  return res.json(pet);
};
