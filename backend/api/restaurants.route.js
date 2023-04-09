import express from "express"
import RestaurantsCtrl from './restaurantsController.js'

const router = express.Router()

router.route("/").get(RestaurantsCtrl.apiGetRestaurants)

export default router