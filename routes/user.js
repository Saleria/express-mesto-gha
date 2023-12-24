const router = require('express').Router();
const { getUser, getUserById, createUser } = require('../controllers/user');

router.get('/users', getUser);
router.get('/users/:userId', getUserById);
router.post('/users', createUser);

module.exports = router;
