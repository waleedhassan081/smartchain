import bunyan from 'bunyan'
export const log = bunyan.createLogger({
    name: 'logs-for-account-balance',
    serializers: bunyan.stdSerializers
});