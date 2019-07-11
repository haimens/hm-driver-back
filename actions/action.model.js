const func = require("od-utility");

class STAction {
    static checkRealmToken(auth = {}) {
        const {realm_token, driver_token} = auth;
        if (!realm_token) func.throwErrorWithMissingParam("realm_token");

        if (!driver_token) func.throwErrorWithMissingParam('driver_token');
        return {realm_token, driver_token};
    }
}

module.exports = STAction;
