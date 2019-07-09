const func = require('od-utility');
const coreConn = require('../services/core.conn');

class VNDriverAction {
    static async registerDriverLocation(params, body, query, auth) {
        try {
            const {realm_token, driver_token} = auth;

            if (!realm_token) func.throwErrorWithMissingParam('realm_token');
            if (!driver_token) func.throwErrorWithMissingParam('driver_token');

            return await coreConn.coreRequest(
                'POST',
                ['driver', 'location', realm_token, driver_token],
                {}, {}, body
            );
        } catch (e) {
            throw e;
        }
    }
    

    static async modifyDriverInfo(params, body, query, auth) {
        try {
            const {realm_token, driver_token} = auth;
            if (!realm_token) func.throwErrorWithMissingParam('realm_token');
            if (!driver_token) func.throwErrorWithMissingParam('driver_token');

            return await coreConn.coreRequest(
                'PATCH',
                ['driver', 'detail', realm_token, driver_token],
                {}, {}, body
            );
        } catch (e) {
            throw e;
        }
    }
}

module.exports = VNDriverAction;