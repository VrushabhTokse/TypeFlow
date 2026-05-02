const express = require('express');
const router = express.Router();
const { saveResult, getHistory, getStats } = require('../controllers/testController');
const auth = require('../middleware/auth');

router.post('/', auth, saveResult);
router.get('/history', auth, getHistory);
router.get('/stats', auth, getStats);

module.exports = router;
