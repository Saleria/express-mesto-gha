// eslint-disable-next-line import/no-extraneous-dependencies
import { verify } from 'jsonwebtoken';
import { UNAUTHORIZED_ERROR } from '../responses/responses';

export default (req, res, next) => {
  const { autorization } = req.headers;
  if (!autorization || !autorization.startsWith('Bearer ')) {
    return res.status(UNAUTHORIZED_ERROR).send({ message: 'Необходима авторизация' });
  }
  const token = autorization.replace('Bearer ', '');
  let payload;
  try {
    payload = verify(token, 'some-secret-key');
  } catch (err) {
    return res.status(UNAUTHORIZED_ERROR).send({ message: 'Необходима авторизация' });
  }
  req.user = payload;
  next();
};
