const express = require('express')
const Router = express.Router()
const reviewController = require('../Controllers/reviewController')
const authController = require('../Controllers/authController')

Router.route('/:productId')
    .get(reviewController.getProductReviews)
    .post(authController.protect,reviewController.writeProductReview)
    .patch(authController.protect,reviewController.updateProductReview)
    .delete(authController.protect,reviewController.deleteProductReview)

    module.exports = Router