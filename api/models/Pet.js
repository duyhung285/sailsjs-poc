// A pet may have many owners
module.exports = {
  attributes: {
    type: {
      type: 'string'
    },
    name: {
      type: 'string'
    },

    // Add a reference to User
    owners: {
      collection: 'user',
      via: 'pets'
    }
  }
};
