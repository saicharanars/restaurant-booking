const path = require('path');

const express = require('express');

const homeController = require('../controllers/home');


const router = express.Router();
router.get("/",homeController.getViewPath);
router.get("/get-data",homeController.getData);
router.post("/add-order",homeController.postOrder);
router.delete('/delete-order/:id',homeController.postDeleteOrder);


module.exports = router;