/**
 * Service to generate JWT
 */
var jwt = require('jsonwebtoken');

module.exports = {
  'sign': function(payload) {
    return jwt.sign({
      data: payload
    }, sails.config.custom.secret, {expiresIn: 300});
  },
  'verify': function(token, callback) {
    jwt.verify(token, sails.config.custom.secret, callback);
  }
};
