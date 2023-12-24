const User = require('../models/user');
const ERROR_PAGE_NOT_FOUND = 404;
const ERROR_CODE = 400;

module.exports.getUser = (req, res) => {
  User.find({})
    .then((users) => {
      res.status(200).send(users)
    })
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.getUserById = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        res.status(404).send({ message: 'Запрашиваемый пользователь не найден' });
        return;
      }
      res.status(200).send(user);
    }).catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.createUser = (req, res) => {
  const {name, about, avatar} = req.body;
  User.create({ name, about, avatar })
  .then((user) => {
    res.status(201).send(user);
  }).catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};