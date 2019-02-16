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

  login: async function(req, res) {
    try {

      let userRecord = await User.findOne({
        emailAddress: req.param('emailAddress')
      });

      if (!userRecord) res.status(404).json({error: 'User not found'});

      await sails.helpers.passwords.checkPassword(req.param('password'), userRecord.password)
        .intercept('incorrect', () => {
          return res.status(401).json({error: 'Email and password combination do not match!'})
        });

      return res.json({
        user: userRecord, token: jwToken.sign(userRecord)
      });

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
      let userId = req.user.data.id;
      let petId = req.param('pet_id');
      await User.addToCollection(userId, 'pets', petId);
      return res.ok();
    } catch(err) {
      return res.negotiate(err);
    }
  },

  getPets: async function(req, res) {
    try {

      let userId = req.user.data.id;
      let user = await User.find({id: userId}).populate('pets');
      // TODO extract pets and return to clients
      return res.json(user);
    } catch (err) {
      return res.negotiate(err);
    }
  }

};
