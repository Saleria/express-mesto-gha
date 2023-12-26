const router = require('express').Router();
const { getUser, getUserById, createUser } = require('../controllers/user');

router.get('/', getUser);
router.get('/:userId', getUserById);
router.post('/', createUser);

module.exports = router;
