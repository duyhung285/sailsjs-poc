module.exports = {

  signup : async function(req, res) {
    try {
      let hashPassword = await sails.helpers.passwords.hashPassword(req.param('password'));
      User.create({
        emailAddress: req.param('emailAddress'),
        fullName: req.param('fullName'),
        password: hashPassword
      }).then(() => res.ok())
        .catch(err => res.negotiate(err));
    } catch (error) {
      return res.negotiate(error);
    }
  },

  getAll: async function(req, res) {
    try {
      let user = await User.find({});
      return res.json(user);
    } catch(err) {
      return res.negotiate(err);
    }
  },

  findById: async function(req, res) {
    try {
      let user = await User.findOne({
        id: req.param('id')
      });
      return res.json(user);
    } catch(err) {
      return res.negotiate(err);
    }
  },

  addPet: async function(req, res) {
    try {
      let userId = req.param('user_id');
      let petId = req.param('pet_id');
      await User.addToCollection(userId, 'pets', petId);
      return res.ok();
    } catch(err) {
      return res.negotiate(err);
    }
  },

  getPets: async function(req, res) {
    try {
      let user = await User.find({id: req.param('id')}).populate('pets');
      // TODO extract pets and return to clients
      return res.json(user);
    } catch (err) {
      return res.negotiate(err);
    }
  }

};
