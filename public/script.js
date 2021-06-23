
//establish stripe connection with API key
// ----------> insert Stripe API Public Key Here <-------------
var stripe = Stripe('pk_test_51J4X5IHZla0DSOuwEeIrvCEkMIQu5keS2N38lqm9aNPeFhoaMOT5x9JFqIOa6eAQ3t7OP0JDG455C06eVtdfsVv900yg9fv1sa');

//establish connection to important buttons
const checkoutButton = document.getElementById("checkout-btn");

// donation amount buttons
const donation25 = document.getElementById("donation-2500");
const donation50 = document.getElementById("donation-5000");
const donation100 = document.getElementById("donation-10000");
const donation250 = document.getElementById("donation-25000");

// donation frequency buttons
const donationOneTime = document.getElementById("donation-onetime");
const donationReoccuring = document.getElementById("donation-reoccuring");

const emailInput = document.getElementById("email");

//establish important variables
let donationInfo = [];

//function to run when amount button is clicked
donationAmtClickHandler = (event) => {

    //catch the value of the button clicked and set it equal to new variable
    let donationAmt = event.target.id.split('-')[1];
    //add donation amount to donation info object
    donationInfo.Amt = donationAmt;

}

//function to run when frequency button is clicked
donationFreqClickHandler = (event) => {
    
    //catch value of the button clicked and set it equal to a new var
    let donationFreq = event.target.id.split('-')[1];
    //add donation frequency to donation info object
    donationInfo.Freq = donationFreq;

}


//checkout button handler
checkoutButton.addEventListener("click", function () {

    //get user email from input form
    let Email = emailInput.value
    
    //fetch the checkout session from server.js
    fetch("/checkout", {
        method: "POST",
        body: JSON.stringify({
            'donationInfo': {
                "Amt" : donationInfo.Amt,
                "Freq" : donationInfo.Freq,
                "Email" : Email
            }
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(function (response) {
            //log the fetch response and move on to checkout
            console.log(response.json);
            return response.json();
        })
        .then(function (session) {
            //use session id to go to stripe checkout
            return stripe.redirectToCheckout({ sessionId: session.id });
        })
        .then(function (result) {
            //show error if error
            if (result.error) {
                alert(result.error.message);
            }
        })
        .catch(function (error) {
            console.error("Error:", error);
        });

 });

 //establish other event listeners
 donation25.addEventListener("click", donationAmtClickHandler);
 donation50.addEventListener("click", donationAmtClickHandler);
 donation100.addEventListener("click", donationAmtClickHandler);
 donation250.addEventListener("click", donationAmtClickHandler);

 donationOneTime.addEventListener("click", donationFreqClickHandler);
 donationReoccuring.addEventListener("click", donationFreqClickHandler);

