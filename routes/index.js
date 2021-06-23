const router = require('express').Router();

const checkoutRoutes = require('./donation.js');

router.use('/checkout', checkoutRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;