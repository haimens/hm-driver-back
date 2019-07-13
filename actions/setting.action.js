const func = require('od-utility');
const coreConn = require('../services/core.conn');

const VNAction = require('./action.model');


class VNSettingAction extends VNAction {


    static async findSettingWithKey(params, body, query, auth) {
        try {
            const {realm_token} = this.checkRealmToken(auth);


            const {setting_key} = query;
            //@contact_cell for dispatch center number call
            //@contact_email for dispatch center email
            if (!setting_key) func.throwErrorWithMissingParam('setting_key');

            return await coreConn.coreRequest(
                'GET',
                ['setting', 'detail', 'key', realm_token],
                {setting_key}, {}, {}
            );

        } catch (e) {
            throw e;
        }
    }
}

module.exports = VNSettingAction;