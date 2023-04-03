const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

router.post('/create', weatherController.create);
router.get('/:id', weatherController.get);
router.put('/:id/update', weatherController.update);
router.delete('/:id/delete', weatherController.delete);
module.exports = router;