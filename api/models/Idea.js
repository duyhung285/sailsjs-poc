module.exports = {

  attributes: {
    title: {
      type: 'string'
    },
    detail: {
      type: 'string'
    },

    // This defines one-half of our association between idea and
    // user. This is the 'one' side of the 'one-to-many'
    // relationship. An idea will be associated with only one user.
    userId: {
      model: 'user'
    }
  }
};
