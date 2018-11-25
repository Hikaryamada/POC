const EntitySchema = require("typeorm").EntitySchema
const Product = require("../model/product").Product

module.exports = new EntitySchema({
    name: "product",
    target: Product,
    columns: {
        id: {
            primary: true,
            type: "bigint",
            generated: true
        },
        product_code: {
            type: "integer"
        },
        pdescription: {
            type: "varchar"
        }
    }
});