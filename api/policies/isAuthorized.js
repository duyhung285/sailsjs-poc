module.exports = function(req, res, next) {
  let token;
  //Check if authorization header is present
  if(req.headers && req.headers.authorization) {
    //authorization header is present
    let parts = req.headers.authorization.split(' ');
    if(parts.length === 2) {
      let scheme = parts[0];
      let credentials = parts[1];

      if(/^Bearer$/i.test(scheme)) {
        token = credentials;
      }
    } else {
      return res.status(401).json({err: 'Format is Authorization: Bearer [token]'});
    }
  } else {
    //authorization header is not present
    return res.status(401).json({err: 'No Authorization header was found'});
  }
  jwToken.verify(token, function(err, decoded) {
    if(err) {
      return res.status(401).json({err: 'Invalid token'});
    }
    req.user = decoded;
    next();
  });
};
