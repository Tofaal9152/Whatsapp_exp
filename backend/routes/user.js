import express from "express"
import { getOtheruser, login, logout, register } from "../controllers/user.js"
import { isAuthenticated } from "../middleware/isAuthenticated.js"

const router = express.Router()

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/logout').get(logout)
router.route('/getotheruser').get(isAuthenticated,getOtheruser)


export default router    