const func = require('od-utility');

const coreConn = require('../services/core.conn');
const VNAction = require('./action.model');


class VNFlightAction extends VNAction {

    static async searchFlightWithInfo(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);

            return await coreConn.coreRequest(
                'POST',
                ['flight', 'search', realm_token],
                {}, {}, body
            );
        } catch (e) {
            throw e;
        }
    }

}

module.exports = VNFlightAction;