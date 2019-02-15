module.exports = async function add_pet(req, res) {
    try {
      let pet = await Pet.create({type: req.param('type'), name: req.param('name')}).fetch();

      await User.addToCollection(req.param('id'), 'pets', pet.id);

      let user = await User.findOne({id: req.param('id')});

      return res.json(user);

    } catch(err) {
      return res.negotiate(err);
    }
};
