const func = require('od-utility');
const coreConn = require('../services/core.conn');


class VNSMSAction {


    static async findCustomerSMSList(params, body, query, auth) {
        try {
            const {customer_token} = params;

            if (!customer_token) func.throwErrorWithMissingParam('customer_token');
            return coreConn.coreRequest(
                'GET',
                ['message', 'all', 'detail', 'customer', customer_token],
                query, {}, {}
            );
        } catch (e) {
            throw e;
        }

    }

    static async sendSMSWithCustomer(params, body, query, auth) {
        try {
            const {customer_token} = params;
            const {realm_token} = auth;


            if (!customer_token) func.throwErrorWithMissingParam('customer_token');
            return coreConn.coreRequest(
                'POST',
                ['message', 'send', 'customer', realm_token, customer_token],
                {}, {}, {...body, type: 2}
            );
        } catch (e) {
            throw e;
        }
    }
}


module.exports = VNSMSAction;