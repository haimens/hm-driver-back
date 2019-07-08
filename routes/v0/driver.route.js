const express = require('express');
const router = express.Router();

const func = require('od-utility');

const VNDriverAction = require('../../actions/driver.action');


router.post('/location', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNDriverAction.registerDriverLocation(
                req.params, req.body, req.query, req.driver.verify_info
            )
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});

router.patch('/detail', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNDriverAction.modifyDriverInfo(
                req.params, req.body, req.query, req.driver.verify_info
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


module.exports = router;