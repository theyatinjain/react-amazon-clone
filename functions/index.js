const functions = require('firebase-functions');

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51HQ7gYIev2qb1TQCUxMoauwTWmsNc9f1dTPocDH55G0C8AocgZwwKwKdYJfiKbhmLCulJxhtVENoI0Vc8LRZyFjt00l26qmyOk"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

      console.log("Payment Request Recieved!!! for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "inr",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command
exports.api = functions.https.onRequest(app);