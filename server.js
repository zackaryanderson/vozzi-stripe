
//import stripe and express
require('dotenv').config()
const stripe = require('stripe')(process.env.SEC_KEY);
const express = require('express');
const app = express();
const path = require('path');

//middle ware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//initialize variables
const YOUR_DOMAIN = 'http://localhost:3001';

//post routes
app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Stubborn Attachments',
            images: ['https://i.imgur.com/EHyR2nP.png'],
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/`,
  });

  res.json({ id: session.id });
});

//get routes
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(3001, () => console.log('Running on port 3001'));