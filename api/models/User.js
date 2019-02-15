/**
 * User.js
 *
 * A user who can log in to this application.
 */

module.exports = {

  attributes: {

    emailAddress: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
      maxLength: 200,
    },
    password: {
      type: 'string',
      protect: true,
    },
    fullName: {
      type: 'string',
      required: true,
      maxLength: 120,
    },

    // A user may have many pets
    pets: {
      collection: 'pet',
      via: 'owners'
    }
  }

};
