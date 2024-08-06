import express from 'express'
import {  getMessage, sendMessage } from '../controllers/message.js'
import { isAuthenticated } from '../middleware/isAuthenticated.js'

const router = express.Router()

router.route('/sendmessage/:id').post(isAuthenticated, sendMessage)
router.route('/getmessages/:id').get(isAuthenticated, getMessage)

export default router