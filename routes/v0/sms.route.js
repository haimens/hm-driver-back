const express = require('express');
const router = express.Router();

const func = require('od-utility');
const VNSMSAction = require('../../actions/sms.action');

router.get('/all/detail/customer/:customer_token', async (req, res, next) => {

    try {
        const resBody = func.configSuccess(
            await VNSMSAction.findCustomerSMSList(
                req.params, req.body, req.query, req.driver.verify_info
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }

});


router.post('/send/customer/:customer_token', async (req, res, next) => {

    try {

        const resBody = func.configSuccess(
            await VNSMSAction.sendSMSWithCustomer(
                req.params, req.body, req.query, req.driver.verify_info
            )
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


router.post('/send/dispatch/:customer_token', async (req, res, next) => {

    try {

        const resBody = func.configSuccess(
            await VNSMSAction.sendSMSWithDispatch(
                req.params, req.body, req.query, req.driver.verify_info
            )
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});

module.exports = router;