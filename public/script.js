// read selected buttons to see what donation amount the user would like using a global state

//if reoccuring payment button selected then dynamically change the page content

// relocate to checkout page 
//checkout page sends money directly to client instead of to vozzi account

// after checkout relocate back to index and add pop-up thanking the customer for their donation to the client

//main functions
var stripe = Stripe('pk_test_51J4X5IHZla0DSOuwEeIrvCEkMIQu5keS2N38lqm9aNPeFhoaMOT5x9JFqIOa6eAQ3t7OP0JDG455C06eVtdfsVv900yg9fv1sa');

var checkoutButton = document.getElementById("checkout-btn");

checkoutButton.addEventListener("click", function () {

    fetch("/create-checkout-session", {
        method: "POST",
    })
        .then(function (response) {
            console.log(response.json);
            return response.json();
        })
        .then(function (session) {
            return stripe.redirectToCheckout({ sessionId: session.id });
        })
        .then(function (result) {
            // If redirectToCheckout fails due to a browser or network
            // error, you should display the localized error message to your
            // customer using error.message.
            if (result.error) {
                alert(result.error.message);
            }
        })
        .catch(function (error) {
            console.error("Error:", error);
        });
 });

