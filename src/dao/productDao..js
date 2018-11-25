const modelProduct = require('./model/product')

class ProductDao {
    constructor(){
        this.model = new modelProduct;
    }

    get() {
        return this.model.find()
    }

    post() {
        return this.model.save()
    }
}

module.exports = ProductDao