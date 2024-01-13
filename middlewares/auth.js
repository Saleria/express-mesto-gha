// eslint-disable-next-line import/no-extraneous-dependencies
const jwt = require('jsonwebtoken');
const { UNAUTHORIZED_ERROR } = require('../responses/responses');

module.exports.auth = (req, res, next) => {
  const { autorization } = req.headers;
  if (!autorization || !autorization.startsWith('Bearer ')) {
    return res.status(UNAUTHORIZED_ERROR).send({ message: 'Необходима авторизация' });
  }
  const token = autorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, 'some-secret-key');
  } catch (err) {
    return res.status(UNAUTHORIZED_ERROR).send({ message: 'Необходима авторизация' });
  }
  req.user = payload;
  return next();
};
