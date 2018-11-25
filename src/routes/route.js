const express = require('express')
const router = express.Router()
const productdao = require('./dao/productDao.js')

class Routes { 
    constructor() {
        const router = app.Router();
    }

    getProduct() {
        router.get('/', function (req, res) {
            res.send(await productdao.post());
        })
    }

    postProductId() {
        router.post('/', function (req, res) {
            res.send(await productdao.post())
        })
    }
}

module.exports = Routes;