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
    },

    // This defines the other half of our association
    // with ideas. This is the 'many' side.
    ideas: {
      collection: 'idea',
      via: 'userId'
    },

    // This tells Sails.js anytime we call the toJSON function to return
    // the user object, take out the password field.  We don't want that
    // flying around the Internet!
    toJSON: function() {
      let obj = this.toObject();
      delete obj.password;
      return obj;
    }
  },

};
