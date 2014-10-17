'use strict';
exports.authorizeUser = function (req, res,  ss) {

  req.use('session');
  return {
    authenticate: function (username, password) {
      if (user) {
        req.session.setUserId(user.id);
        res(true);
      } else {}
    }
  };
};
