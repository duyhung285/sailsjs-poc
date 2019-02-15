module.exports = async function pet(req, res) {
    try {
      await User.addToCollection(req.param('user_id'), 'pets', req.param('pet_id'));
      return res.ok();
    } catch(err) {
      return res.negotiate(err);
    }
};
