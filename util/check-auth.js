const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');

module.exports = (context) => {
  // context = {...header}
  const authHeader = context.reg.headers.authorization;
  if (authHeader) {
    //Bearer ....
    const token = authHeader.split('Bearer')[1];
  }
};
