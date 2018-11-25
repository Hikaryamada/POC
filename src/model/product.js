class Product {
    constructor(product_uid, product_code, description ) {
        this.product_uid = product_uid;
        this.product_code = product_code;
        this.description = description;
    }
}

module.exports = {
    Product: Product
}