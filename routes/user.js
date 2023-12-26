const router = require('express').Router();
const {
  getUser, getUserById, createUser, updateUser,
} = require('../controllers/user');

router.get('/', getUser);
router.get('/:userId', getUserById);
router.post('/', createUser);
router.patch('/me', updateUser);

module.exports = router;
