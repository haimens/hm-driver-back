const express = require('express');
const router = express.Router();
const cors = require("cors");

const {
    router_checker,
    token_machine,
    loginRoute,
    signupRoute,
    logoutRoute,
    forgetRoute
} = require("@odinternational/exodus_v2_qa");

router.use(cors());

router.use(
    "/",
    router_checker({
        token_type_zero: ['notify'],
        token_type_one: [],
        token_type_two: [],
        token_type_three: ['salary', 'wage', 'trip', 'sms', 'driver']
    })
);

router.use(
    token_machine(
        {
            allowSignup: false,
            havana_url: process.env.HAVANA_URL,
            instance_link: `${process.env.INSTANCE_LINK}/api/v0`,
            instance_name: process.env.INSTANCE_NAME
        },
        process.env.APP_TOKEN,
        process.env.APP_KEY
    )
);


// Exodus routes
router.use("/login", loginRoute);
router.use("/signup", signupRoute);
router.use("/logout", logoutRoute);
router.use("/forget", forgetRoute);


const salaryRoute = require('./salary.route');
const smsRoute = require('./sms.route');
const tripRoute = require('./trip.route');
const wageRoute = require('./wage.route');

const driverRoute = require('./driver.route');

const settingRoute = require('./setting.route');

router.use('/salary', salaryRoute);
router.use('/sms', smsRoute);
router.use('/trip', tripRoute);
router.use('/wage', wageRoute);
router.use('/driver', driverRoute);

router.use('/setting', settingRoute);
// App routes

router.use('/', async (req, res, next) => {
    res.json({status: false, message: 'DRIVER V0 INDEX REACHED'});
});

module.exports = router;
