/**
 * Module dependencies
 */

// ...


/**
 * user/signup.js
 *
 * Signup user.
 */
module.exports = async function signup(req, res) {
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
};
