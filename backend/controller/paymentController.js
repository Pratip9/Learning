const asyncWrapper = require("../middleWare/asyncWrapper");

// process the payment
exports.processPayment = asyncWrapper(async (req, res, next) => {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  // const stripe = require("stripe")(
  //   "sk_test_51NmagnSDp5aiQ0qoVkZVjcHbURJ7yItk6Z0Qx8FXaoep2Yw2rU1nf41OR3vmdVQXH3KUyO7FeKvY55zsq58sya0V00TwP0dyQO"
  // ); // asigning key as well

  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.ammount,
    currency: "inr",
    metadata: {
      company: "Ecommerce", // not mandatory
    },
  });

  res
    .status(200)
    .json({ sucess: true, client_secret: myPayment.client_secret });
});

// send STRIPE_API_KEY to user =>

exports.sendStripeApiKey = asyncWrapper(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
  // res.status(200).json({
  //   stripeApiKey:
  //     "pk_test_51NmagnSDp5aiQ0qo1BE2Jzs2J3Ode0BI7wqTV591wsq3Ov4DuiIg8kU1ZKrQ3GXzD5z7VQiUw7wCejNbr1XbYRUm00bnUsrOM4",
  // });
});
