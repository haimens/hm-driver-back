const func = require('od-utility');
const coreConn = require('../services/core.conn');

const VNAction = require('./action.model');


class VNSalaryAction extends VNAction {


    static async findSalaryList(params, body, query, auth) {
        try {
            const {realm_token, driver_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'GET',
                ['salary', 'all', 'detail', 'driver', realm_token, driver_token],
                query, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }

    static async findSalarySum(params, body, query, auth) {
        try {
            const {realm_token, driver_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'GET',
                ['salary', 'sum', 'driver', realm_token, driver_token],
                query, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }

}


module.exports = VNSalaryAction;