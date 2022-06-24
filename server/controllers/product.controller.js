const Product = require('../models/product.model');

const createNewProduct = (req, res) => {
    Product.create(req.body)
    .then(newProduct => {
        res.json(newProduct)
    })
    .catch(err => res.status(400).json(err))
};

const getAllProducts = (req, res) => {
    Product.find()
    .then((allProducts) => res.json(allProducts))
    .catch(err => res.status(400).json(err));
}
const findOneAndUpdate = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { 
        new: true, 
        runValidotors: true
    })
    .then(updatedProduct => res.json(updatedProduct))
    .catch(err => res.status(400).json(err));
}
module.exports = {
    createNewProduct,
    getAllProducts,
    findOneAndUpdate,
};