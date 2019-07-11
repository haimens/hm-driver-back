const func = require('od-utility');
const coreConn = require('../services/core.conn');

const VNAction = require('./action.model');


class VNWageAction extends VNAction {


    static async findWageList(params, body, query, auth) {
        try {
            const {realm_token, driver_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'GET',
                ['wage', 'all', 'detail', 'driver', realm_token, driver_token],
                query, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }

    static async findWageSum(params, body, query, auth) {
        try {
            const {realm_token, driver_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                '',
                ['wage', 'sum', 'driver', realm_token, driver_token],
                query, {}, {}
            );
        } catch (e) {
            throw e;
        }
    }

}


module.exports = VNWageAction;