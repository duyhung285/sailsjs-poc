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

  addPetToUser: async function(req, res) {
    try {
      await User.addToCollection(req.param('user_id'), 'pets', req.param('pet_id'));
      return res.ok();
    } catch(err) {
      return res.negotiate(err);
    }
  },

  populatePetsAssociatedWithUser: async function(req, res) {
    try {
      let user = await User.find({id: req.param('id')}).populate('pets');
      return res.json(user);
    } catch (err) {
      return res.negotiate(err);
    }
  }

};
