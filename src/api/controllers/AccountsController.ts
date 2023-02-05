import { Request, Response, NextFunction } from 'express'
import AccountService from '../services/AccountService'
import Joi from 'joi'
import { log } from '../utilities/helper'
export class AccountController {
    public static async getAccountBalance(req: Request, res: Response, next: NextFunction) {
        try {
            log.info('GET_ACCOUNT_BALANCE_CALL_INITIATED')
            const input = req.body
            const schema = Joi.object({
                address: Joi.array().min(1).required().max(100),
                tag: Joi.string().required()
            })
            log.info('SCHEMA_VALIDATION')
            const { error, value } = schema.validate(input)
            if (error) {
                log.error({ error }, 'SCHEMA_VALIDATION_ERROR')
                const detail = error.details[0]
                return res.status(400).send({ message: detail.message })
            }
            log.info('CALLING_ETH_BLOCKCHAIN')
            const { status, totalBalance, address } = await AccountService.balance({ address: value.address, tag: value.tag })
            if (status) {
                log.info('RESPONSE_RECEIVED_FROM_ETH_BLOCKCHAIN')
                return res.send({ message: 'success', address, totalBalance }).status(200)
            }
            log.error('CALL_FAILED_AS_BAD_REQUEST')
            return res.status(400).send({ message: 'Bad request' })
        } catch (e) {
            log.error({ e }, 'SOMETHING_WENT_WRONG')
            throw e
        }
    }
}