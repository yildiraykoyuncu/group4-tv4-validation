const controllers = require('./controllers.js');
const express = require('express');

const router = express.Router();



// write your routes

router.get("/places", controllers.getAllHandler);
router.get('/place/:id', controllers.getPlaceHandler);
module.exports = router;
