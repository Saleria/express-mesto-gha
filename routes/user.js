const router = require('express').Router();
const {
  getUser, getUserById, updateUser, updateAvatar, getCurrentUser,
} = require('../controllers/user');
const { getUserByIdValidation, updateUserValidation, updateAvatarValidation } = require('../middlewares/validator');

router.get('/', getUser);
router.get('/:userId', getUserByIdValidation, getUserById);
router.patch('/me', updateUserValidation, updateUser);
router.patch('/me/avatar', updateAvatarValidation, updateAvatar);
router.get('/me', getCurrentUser);

module.exports = router;
