// read selected buttons to see what donation amount the user would like using a global state

//if reoccuring payment button selected then dynamically change the page content

// relocate to checkout page 
//checkout page sends money directly to client instead of to vozzi account

// after checkout relocate back to index and add pop-up thanking the customer for their donation to the client

//main functions
const TEST_KEY = 'sk_test_4eC39HqLyjWDarjtT1zdp7dc';

//set up stripe 
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

async function createIntent() {
    // create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 1000,
        currency: 'usd',
        payment_method_types: ['card'],
        receipt_email: 'jenny.rosen@example.com',
    });


    console.log(paymentIntent);

}

createIntent();

