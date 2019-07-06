const func = require('od-utility');
const coreConn = require('../services/core.conn');

class VNTripAction {


    static async findTripListWithDriver(params, body, query, auth) {
        try {
            const {realm_token, driver_token} = auth;

            return await coreConn.coreRequest(
                'GET',
                ['trip', 'all', 'detail', 'driver', realm_token, driver_token]
            );
        } catch (e) {
            throw e;
        }
    }

    static async findTripDetail(params, body, query, auth) {
        try {
            const {realm_token} = auth;
            const {trip_token} = params;
            return await coreConn.coreRequest(
                'GET',
                ['trip', 'detail', realm_token, trip_token],
                query, {}, {}
            );
            
        } catch (e) {
            throw e;
        }
    }


}


module.exports = VNTripAction;