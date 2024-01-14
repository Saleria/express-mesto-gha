const router = require('express').Router();
const {
  getUser, getUserById, updateUser, updateAvatar, getCurrentUser,
} = require('../controllers/user');

router.get('/', getUser);
router.get('/:userId', getUserById);
router.patch('/me', updateUser);
router.patch('/me/avatar', updateAvatar);
router.get('/me', getCurrentUser);

module.exports = router;
