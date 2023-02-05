import axios from 'axios'
import web3 from "web3"
import { log } from '../utilities/helper'
class AccountService {
    public async balance(data: { address: string[], tag: string }) {
        try {
            const address = data.address.join(',')
            const url = `${process.env.APP_URL}&address=${address}&tag=${data.tag}&apikey=${process.env.APP_KEY}`
            log.info('EXTERNAL_SERVICE_CALL_INITIATED')
            const { data: apiRes } = await axios.get(url)
            log.info('RESPONSE_RECEIVED_FROM_EXTERNAL_SERVICE')
            const { result } = apiRes
            const getEthPrice = result.filter((item: { balance: string }) => item.balance = web3.utils.fromWei(item.balance))
            const sum = (a: any[]) => a.reduce((x: number, y: number) => x + y)
            const totalBalance = sum(getEthPrice.map((x: { balance: string }) => Number(x.balance)))
            log.info({ totalBalance }, 'TOTAL_BALANCE_IN_ETH')
            return { status: true, address: getEthPrice, totalBalance }
        } catch (e) {
            log.error({ e }, 'SOMETHING_WENT_WRONG_IN_ACCOUNT_SERVICE')
            return { status: false }
        }
    }
}

export default new AccountService()