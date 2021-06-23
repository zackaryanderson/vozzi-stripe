const router = require('express').Router();

//import stripe and express
require('dotenv').config()
// ----------> insert Stripe API Secret Key in the .env file <-------------
const stripe = require('stripe')(process.env.SEC_KEY);
const YOUR_DOMAIN = 'http://localhost:3001';

//create account for client with pulled information

//create account link information

//redirect to account link URL to finish account setup
//refresh url should retrigger account link creation loop

//get connected stripe account id and set it on the checkout.sessions.create call to allow purchases to be sent to their account. 


module.exports = router;