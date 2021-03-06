const express = require('express');
const router = express.Router();

const func = require('od-utility');

const VNTripAction = require('../../actions/trip.action');


router.get('/all/detail/driver', async (req, res, next) => {

    try {

        const resBody = func.configSuccess(
            await VNTripAction.findTripListWithDriver(
                req.params, req.body, req.query, req.driver.verify_info
            )
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});


router.get('/all/active/driver', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNTripAction.findActiveTripListWithDriver(
                req.params, req.body, req.query, req.driver.verify_info
            )
        );

        res.json(resBody);
    } catch (e) {
        next(e);
    }
});

router.get('/detail/:trip_token', async (req, res, next) => {

    try {

        const resBody = func.configSuccess(
            await VNTripAction.findTripDetail(
                req.params, req.body, req.query, req.driver.verify_info
            )
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});

router.patch('/detail/:trip_token', async (req, res, next) => {
    try {
        const resBody = func.configSuccess(
            await VNTripAction.modifyTripDetail(
                req.params, req.body, req.query, req.driver.verify_info
            )
        );
        res.json(resBody);
    } catch (e) {
        next(e);
    }
});

module.exports = router;

