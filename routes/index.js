const router = require('express').Router();

const checkoutRoutes = require('./donation.js');
const clientSetup = require('./clientSetup.js');

router.use('/checkout', checkoutRoutes);
router.use('/clientSetup', clientSetup);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;