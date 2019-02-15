module.exports = {
  attributes: {
    type: {
      type: 'string'
    },
    name: {
      type: 'string'
    },

    // A pet may have many owners
    owners: {
      collection: 'user',
      via: 'pets'
    }
  }
};
