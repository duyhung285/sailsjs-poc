module.exports = {

  create: async function(req, res) {
    try {
      await Pet.create({type : req.param('type'), name: req.param('name')});
      return res.ok();
    } catch (error) {
      return res.negotiate(error);
    }
  },

  getAll: async function(req, res) {
    try {
      let pet = await Pet.find({});
      return res.json(pet);
    } catch(err) {
      return res.negotiate(err);
    }
  },

};
