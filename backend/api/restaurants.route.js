import express from "express"
import RestaurantsCtrl from './restaurantsController.js'
import ReviewsCtrl from './reviews.controller.js'

const router = express.Router()

router.route("/").get(RestaurantsCtrl.apiGetRestaurants)

router
    .route("/review")
    .post(ReviewsCtrl.apiPostReview)
    .put(ReviewsCtrl.apiUpdateReview)
    .delete(ReviewsCtrl.apiDeleteReview)
    
export default router