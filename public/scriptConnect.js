

var stripe = Stripe('pk_test_51J4X5IHZla0DSOuwEeIrvCEkMIQu5keS2N38lqm9aNPeFhoaMOT5x9JFqIOa6eAQ3t7OP0JDG455C06eVtdfsVv900yg9fv1sa');

const stripeConnect = document.getElementById("stripe-connect");
// create client account

// link client account to vozzi account

//redirect client to finish setting up their account

//update checkout sessions account payment id so that the client gets payments
const stripeConnectClickHandler = (event) => {

    fetch("/client-setup", {
        method: "POST",
    })
        .then(response => response.json())
        .then(data => {

            window.location.replace(data.url);
            return data;
            
        })
        .catch(function (error) {
            console.error("Error:", error);
        });
}

stripeConnect.addEventListener("click", stripeConnectClickHandler);