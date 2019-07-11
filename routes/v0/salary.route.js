const express = require('express');
const router = express.Router();

const func = require('od-utility');

const VNSalaryAction = require('../../actions/salary.action');


router.get('/all/detail/driver', async (req, res, next) => {
    try {

        const resBody = func.configSuccess(
            await VNSalaryAction.findSalaryList(
                req.params, req.body, req.query, req.driver.verify_info
            )
        );
        res.json(resBody);

    } catch (e) {
        next(e);
    }
});

router.get('/sum/driver', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNSalaryAction.findSalarySum(
                req.params, req.body, req.query, req.driver.verify_info
            )
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


module.exports = router;