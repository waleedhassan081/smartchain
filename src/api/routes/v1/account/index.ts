import * as express from 'express'
import { AccountController } from '../../../controllers/AccountsController'
const router = express.Router()

router.post('/balance', AccountController.getAccountBalance)

export default router
