const router = require('express').Router();

//import stripe and express
require('dotenv').config();
// ----------> insert Stripe API Secret Key in the .env file <-------------
const stripe = require('stripe')(process.env.SEC_KEY);
const YOUR_DOMAIN = 'http://localhost:3001';

//post routes
router.post('/', async (req, res) => {

    console.log(req.body);

    if (req.body.donationInfo.Freq === "reoccuring") {

        //create session for reoccuring payment
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {

                            // ------> insert client name here <----------
                            name: 'Alabama Athletics Donation',

                            // -----> insert client image here <-----------
                            images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Alabama_Athletics_logo.svg/1067px-Alabama_Athletics_logo.svg.png'],
                        },
                        unit_amount: req.body.donationInfo.Amt,
                        recurring: {
                            interval: 'month'
                        }
                    },
                    quantity: 1,
                },
            ],
            payment_intent_data: {
                application_fee_amount: 0,
                transfer_data: {
                    //enter client account number here
                    destination: 'acct_1J79CWFo7BgMIoMv',
                }
            },
            mode: 'subscription',
            customer_email: req.body.donationInfo.Email,
            success_url: `${YOUR_DOMAIN}/success.html`,
            cancel_url: `${YOUR_DOMAIN}/`,
        });

        res.json({ id: session.id });
    } else {

        //create session for non one-time payments
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {

                            // ------> insert client name here <----------
                            name: 'Alabama Athletics Donation',

                            // -----> insert client image here <-----------
                            images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Alabama_Athletics_logo.svg/1067px-Alabama_Athletics_logo.svg.png'],
                        },
                        unit_amount: req.body.donationInfo.Amt
                    },
                    quantity: 1,
                },
            ],
            payment_intent_data: {
                application_fee_amount: 0,
                transfer_data: {
                    //enter client account number here
                    destination: 'acct_1J79CWFo7BgMIoMv',
                }
            },
            mode: 'payment',
            customer_email: req.body.donationInfo.Email,
            success_url: `${YOUR_DOMAIN}/success.html`,
            cancel_url: `${YOUR_DOMAIN}/`,

        });

        res.json({ id: session.id });
    }

});


module.exports = router;